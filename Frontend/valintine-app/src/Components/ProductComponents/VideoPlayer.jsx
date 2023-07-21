import ReactPlayer from "react-player";
import React, { useRef } from "react";
function PlayerComponent({VIDEO_PATH}) {
    // const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
  const playerRef = useRef(null);
  return (
    <div style={{maxWidth:"100%",marginBottom:"30px"}}>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
    </div>
  );
}
export default PlayerComponent;
