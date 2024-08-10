import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets/collageVideo.mp4'

const VideoPlayer = ({playstate,setPlayState}) => {

  const player=useRef(null);
  const closePlayer = (e) =>{
    if(e.target === player.current){
      setPlayState(false);
    }
  }

  return (
    <div className={` videoPlayer ${ playstate ? "" : "hide"}`} ref={player} onClick={closePlayer}>      
      <video src={video} autoPlay muted controls></video>
      
      
      
      
      </div>
  )
}

export default VideoPlayer