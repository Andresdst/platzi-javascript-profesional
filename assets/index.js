import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";


const video = document.querySelector("video");
const boton = document.getElementById("playButton");
const mute = document.getElementById("MuteButton");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

boton.onclick = () => {
  if (video.paused) return player.play();
  player.pause();
};
mute.onclick = () => {
  if (video.muted) return player.unmute();
  player.mute();
};

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
  .catch(error =>{
    console.log(error.message)
  })
}