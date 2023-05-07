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
      const choices = document.createElement("choices");
      choices.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        choices.textContent += " — DEFAULT";
      }
      choises.setAttribute("data-lang", voices[i].lang);
      choises.setAttribute("data-name", voices[i].name);
      voice.appendChild(choices);
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
    const say = new SpeechSynthesisUtterance(inputText.value);
    const choice_made =
      voice.choice_made[0].getAttribute("data-name");
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
