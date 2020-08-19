import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const boton = document.getElementById("playButton");
const mute = document.getElementById("MuteButton");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

boton.onclick = () => {
  if (video.paused) return player.play();
  player.pause();
};
mute.onclick = () => {
  if (video.muted) return player.unmute();
  player.mute();
};
