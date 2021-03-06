class VideoDiv {
    constructor(src,title,subtitle) {
        this.src = src
        this.title = title
        this.subtitle = subtitle
    }
    create() {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        const video = document.createElement('video')
        const w = window.innerWidth ,h = window.innerHeight
        video.width = w
        video.height = h
        canvas.width = w
        canvas.height = h
        video.src = this.src
        const img = document.createElement('img')
        document.body.appendChild(img)
        setInterval(()=>{
          context.drawImage(video,0,0,w,h)
          context.font = context.font.replace(/\d+/,w/20)
          if(this.color) {
              context.fillStyle = this.color
              context.globalAlpha = 0.6
              context.fillRect(0,0,w,h)
          }
          context.fillStyle='white'
          context.fillText(this.title,w/2-context.measureText(this.title).width/2,3*h/5)
          context.font = context.font.replace(/\d+/,w/40)
          context.fillText(this.subtitle,w/2-context.measureText(this.subtitle).width/2,4*h/5)
          img.src = canvas.toDataURL()
        },1)
    }
    applyColorFilter(color) {
        this.color = color
    }
}
