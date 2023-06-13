import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import videoThumbnail from '../Thumbnail/Thumbnail';

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
            <videoThumbnail RelatedVideos='{props.video_ID, props.text}' />
        </div>
     );
}
 
export default RelatedVideos;