import { useParams } from "react-router-dom";

const video = () => {

    const { videoID } = useParams();

    return (
       <iframe 
       id="player" 
       type="text/html" 
       width="640" 
       height="390"
       src={`http://www.youtube.com/embed/${videoID}`}
       frameborder="0">
       </iframe>
    );
}

export default video;