// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  var hornSelect = document.getElementById("horn-select");
  var image = document.querySelector("img");
  var audio = document.querySelector("audio");
  var playButton = document.querySelector("button");
  var vol = document.querySelector("#volume-controls img");
  var volSlider = document.getElementById("volume");

  playButton.addEventListener("click", function() {
    audio.play();
    if (hornSelect.value === "party-horn") {
      
      jsConfetti.addConfetti();
    }
  })
  
  hornSelect.addEventListener("change", function() {
    if (hornSelect.value === "party-horn") {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    else if (hornSelect.value === "car-horn"){
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (hornSelect.value === "air-horn"){
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else {
      image.src = "assets/images/no-image.png";
      audio.src = "";
    }
  });

  volSlider.addEventListener("change", function() {
    audio.volume = document.getElementById("volume").value / 100;
    if(audio.volume === 0) {
      vol.src = "assets/icons/volume-level-0.svg";
    }
    else if(audio.volume >= 0.01 && audio.volume < 0.33) {
      vol.src = "assets/icons/volume-level-1.svg";
    }
    else if(audio.volume >= 0.33 && audio.volume < 0.67) {
      vol.src = "assets/icons/volume-level-2.svg";
    }
    else {
      vol.src = "assets/icons/volume-level-3.svg";
    }
  });

}
