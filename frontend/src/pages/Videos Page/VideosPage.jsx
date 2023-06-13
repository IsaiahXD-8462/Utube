import React, { useState, useEffect } from 'react';
import VideoPlayer from '../../components/Video Player/VideoPlayer';
import RelatedVideos from '../../components/Related Videos/RelatedVideos';
import CommentForm from '../../components/Comments/CommentForm'
import CommentList from '../../components/Comments/CommentList'
import { useParams } from 'react-router-dom';

const VideoPage = () => {
    // useParams to get the video id from the url, pass down the video id into the other components
    const { video_ID } = useParams();
    
    
    return ( 
        <div>
            <VideoPlayer videoID={video_ID} />
            <RelatedVideos videoID={video_ID} />
            <CommentForm videoID={video_ID}/>
            <CommentList videoID={video_ID}/>
        </div>
     );
}
 
export default VideoPage;