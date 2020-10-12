//intersection observer, herramienta del DOM
class AutoPause {
  constructor(){
    this.handleObserve = this.handleObserve.bind(this)
    //umbral de viewport del video
    this.threshold=0.25
  }
  run(player){
    this.player = player
    const observer = new IntersectionObserver(this.handleObserve,{
      //umbral de viewport del video
      threshold:this.threshold
    })

    observer.observe(this.player.media)
  }

  handleObserve(entries){
    const entry = entries[0]

    if(entry.intersectionRatio >= this.threshold){
      this.player.play()
    }else{
      this.player.pause()
    }

  }
}

export default AutoPause