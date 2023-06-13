const VideoPlayer = (props) => {

    return (
       <iframe 
       id="player" 
       type="text/html" 
       width="640" 
       height="390"
       src={`http://www.youtube.com/embed/${props.video_ID}`}
       frameborder="0">
       </iframe>
    );
}

export default VideoPlayer;