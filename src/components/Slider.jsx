import axios from 'axios';
import React,{ useState, useEffect } from 'react';

function Slider({title, fetchURL}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchURL);
                setMovies(response.data.results);
            } catch (error) {
                console.log("Something went wrong...");
            }
        };
    
        fetchData();
    }, [fetchURL]);

    return (
        <>
            <h2 className='text-white md:text-xl font-bold'>{title}</h2>   
            <div className='relative flex items-center'>
                <div id={'slider'}>
                    
                </div>  
            </div> 
        </>
    );
}


export default Slider