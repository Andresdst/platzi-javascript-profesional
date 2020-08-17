import MediaPlayer from "./assets/MediaPlayer.js";

const video = document.querySelector("video");
const boton = document.getElementById("playButton");

const player = new MediaPlayer(video);

boton.onclick = () => {
  if (video.paused) return player.play();
  player.pause();
};
