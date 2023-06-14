import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import axios from "axios";
import VideoPage from "../../pages/Videos Page/VideosPage";

const SearchBar= (props) => {

    const [ media, setmedia ] = useState ([]);
    
    async function searchallmedia() {
        const response = await axios.get('http://127.0.0.1:8000/comments/all/')
        try{
          setmedia(response.data)}
        catch(error){
          console.log(error)
        };
      }

    return (
        <form>
            <label>Search</label>
            <input type='text' value={media} onChange={(event) => searchallmedia(event.target.value)} />
            <input placeholder="Type To Search..." />
            <button type='submit'>search</button>
        <Routes>
            <Route exact path="/videos" element={<VideoPage />} />
        </Routes>
        </form>
    );
}
 
export default SearchBar;