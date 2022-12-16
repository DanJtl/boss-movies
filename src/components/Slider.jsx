import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import Movie from './Movie';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function Slider({title, fetchURL, sliderId}) {
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

    const slideLeft = () => {
        let slider = document.getElementById("slider" + sliderId);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById("slider" +sliderId);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
            <div className='w-10/12 mx-auto my-6'>
                <h2 className='text-white md:text-xl font-bold'>{title}</h2>   
                <div className='relative flex items-center group'>
                    <AiOutlineArrowLeft 
                        onClick={slideLeft}
                        className='absolute bg-firstColor rounded-full opacity-75 hover:opacity-100 z-50 cursor-pointer group-hover:block' 
                        size={60} 
                    />
                    <div id={'slider' + sliderId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                        {movies.map((movie, id) => (
                            <Movie key={id} movie={movie}/>
                        ))}   
                    </div>  
                    <AiOutlineArrowRight 
                        onClick={slideRight}
                        className='absolute right-0 bg-firstColor rounded-full opacity-75 hover:opacity-100 z-50 cursor-pointer group-hover:block' 
                        size={60} 
                    />
                </div>
            </div>
        </>
    );
}

export default Slider