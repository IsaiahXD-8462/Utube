import VideoThumbnail from 'react-video-thumbnail'

const videoThumbnail = (props) => {
    return ( 
        <VideoThumbnail
            videoUrl={'https://www.youtube.com/watch?v=${props.video_ID}'}
            thumbnailHandler={(thumbnail) => console.log(thumbnail)}
            width={120}
            height={80}
            />
     );
}
 
export default videoThumbnail;