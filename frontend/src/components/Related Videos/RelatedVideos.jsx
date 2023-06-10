import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import VideoPlayer from "./component/Video Player/VideoPlayer"

const RelatedVideos = (props) => {
    
   const [video, setVideo] = useState([]);
    
    async function getallvideos() {
    const response = await axios.get('http://127.0.0.1:8000/api/auth/comments/comment/all')
    try {response =>
      console.log(response.data);
      setVideo(response.data)}
    catch {error =>
      console.log(error)
    };
  }
   return ( 
        <div>
            <RTCEncodedVideoFrame>{videoID}</RTCEncodedVideoFrame>
        </div>
     );
}
 
export default RelatedVideos;