"use client"

const { default: YouTube } = require("react-youtube")

const VideoPlayer = ({youtubeId}) => {

  return(
    <>
    <div className="videoWrapper">
      <YouTube 
      videoId={youtubeId} 
      onReady={(event) => event.target.pauseVideo()}
      />
    </div>
    </>
  )
}

export default VideoPlayer