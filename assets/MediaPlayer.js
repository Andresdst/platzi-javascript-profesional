function MediaPlayer(config) {
  this.media = config;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

export default MediaPlayer;
