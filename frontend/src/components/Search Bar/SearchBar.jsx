import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import axios from "axios";
import VideoPage from "../../pages/Videos Page/VideosPage";
import SearchPage from "../../pages/Search Page/SearchPage";

const SearchBar= (props) => {

    const [ media, setmedia ] = useState ([]);
    
    async function searchallmedia() {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search?q='${props.userinput}'&key=AIzaSyCij_i9QTAd7j1oN_WgDX73RdjZPNV5hbw&part=snippet")
        try{
          setmedia(response.data)}
        catch(error){
          console.log(error)
        };
      }

    return (
        <form onSubmit={searchallmedia}>
            <label>Search</label> 
            <input placeholder="Type To Search..." type='text' onChange={(event) => setmedia(event.target.value)} />           
            <button type='submit'>search</button>
        <Routes>
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/video" element={<VideoPage />} />
        </Routes>
        </form>
    );
}
 
export default SearchBar;