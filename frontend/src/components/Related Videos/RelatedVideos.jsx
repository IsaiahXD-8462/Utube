import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import VideoPlayer from "./"

const RelatedVideos = (props) => {
    
   const [video, setVideo] = useState([]);
    
    async function getallvideos() {
    const response = await axios.get('http://127.0.0.1:8000/api/auth/comments/comment/all')
    try {response =>
      console.log(response.data);
      setVideos(response.data)}
    catch {error =>
      console.log(error)
    };
  }
   return ( 
        <div>
            <VideoPlayer></VideoPlayer>
        </div>
     );
}
 
export default RelatedVideos;