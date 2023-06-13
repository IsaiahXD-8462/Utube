import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/Search Bar/SearchBar';
import RelatedVideos from '../../components/Related Videos/RelatedVideos';

const SearchPage = () => {
    const { video_ID } = useParams();
    
    return ( 
        <div>
            <SearchBar videoID={video_ID}/>
            <RelatedVideos videoID={video_ID}/>
        </div>
     );
}
 
export default SearchPage;