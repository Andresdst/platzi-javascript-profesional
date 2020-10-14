import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    //llamando getter y setter
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}
export default AutoPlay;
