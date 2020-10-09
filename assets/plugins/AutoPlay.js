function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  //llamando getter y setter
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};
export default AutoPlay;
