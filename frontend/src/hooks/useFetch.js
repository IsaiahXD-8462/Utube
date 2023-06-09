import React, { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://127.0.0.1:8000/api/auth/comments/comment/${data}');
                if (response.status === 201) {
                    setData(response.data);
                }
            } catch (error) {
                setData(response.data);
                console.log(reponse.data)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return {loading, data };

    return ( 
        <div className='App'>
            {loading && <div className='loader' />}
            {data?.length > 0 &&
                data.map((Comment) => <p key={Comment.video_id}>{Comment.text}</p>)}
        </div>
     );
}
 
export default useFetch;