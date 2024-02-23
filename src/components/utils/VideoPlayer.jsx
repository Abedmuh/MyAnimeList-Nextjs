"use client"

const { default: YouTube } = require("react-youtube")

const VideoPlayer = ({youtubeId}) => {
  const option = {
    width: "300",
    height: "250"
  }
  return(
    <>
    <div>
      <button></button>
      <YouTube 
      videoId={youtubeId} 
      onReady={(event) => event.target.pauseVideo()}/>
    </div>
    </>
  )
}

export default VideoPlayer