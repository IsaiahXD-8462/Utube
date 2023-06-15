import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const RelatedVideos = (props) => {
    
   const [video, setVideo] = useState([]);
    
    async function getallvideos() {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search?relatedToVideoId='${props.video_ID}'&type=video&key=AIzaSyCij_i9QTAd7j1oN_WgDX73RdjZPNV5hbw&part=snippet")
    try{
      setVideo(response.data)}
    catch(error){
      console.log(error)
    };
  }
   return ( 
        <div>
            <RelatedVideos allvideos={getallvideos(video)} />
        </div>
     );
}
 
export default RelatedVideos;