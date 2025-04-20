const funny_sound = new Audio("audio/jukebox_audio.mp3");
const funny_button = document.querySelectorAll("#funny_sound");
//jukebox control
funny_button.forEach(button => {
  button.addEventListener("click", () => {
    funny_sound.play();
  });
});