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
        video.src = this.src
        setInterval(()=>{
          context.drawImage(video,0,0,w,h)
          context.font = context.font.replace(/\d+/,w/20)
          context.fillStyle='white'
          context.fillText(this.title,w/2-context.measureText(this.title).width/2,3*h/5)
          context.font = context.font.replace(/\d+/,w/40)
          context.fillText(this.title,w/2-context.measureText(this.title).width/2,4*h/5)
          const img = document.createElement('img')
          img.src = canvas.toDataURL()
          document.body.appendChild(img)
        },100)
    }
}