import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import Movie from './Movie';

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
            <div className='w-10/12 mx-auto my-6'>
                <h2 className='text-white md:text-xl font-bold'>{title}</h2>   
                <div className='relative flex items-center'>
                    <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                        {movies.map((movie, id) => (
                            <Movie key={id} movie={movie}/>
                        ))}   
                    </div>  
                </div> 
            </div>
        </>
    );
}

export default Slider