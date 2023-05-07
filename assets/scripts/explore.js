// explore.js

window.addEventListener('DOMContentLoaded', init);

let speech = window.speechSynthesis;

function init() {
  let explore = document.querySelector("#explore");
  const voice = explore.querySelector("#voice-select");
  console.log(voice.value);
  const Btn = explore.querySelector("button");
  const sentence = explore.querySelector("#text-to-speak");
  const smiley = explore.querySelector("img");
  let voices = [];

  function fillVoices() {
    voices = speech.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voice.appendChild(option);
    }
  }

  fillVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = fillVoices;
  }
  sentence.onsubmit = (event) => {
    event.preventDefault();
  }

  Btn.addEventListener("click", (event) => {
    const say = new SpeechSynthesisUtterance(sentence.value);
    const choice_made =
      voice.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === choice_made) {
        say.voice = voices[i];
      }
    }
    speech.speak(say);
    smiley.src = "assets/images/smiling-open.png";
    say.addEventListener("end", function () {
      console.log(speechSynthesis.speaking);
      smiley.src = "assets/images/smiling.png";
    });
    sentence.blur();
  });
}
