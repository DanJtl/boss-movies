import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function RecentlyViewed({title}) {
    const [recentlyViewedMovie, setRecentlyViewedMovie] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const storedMovies = JSON.parse(localStorage.getItem('recentlyViewedMovies')) || [];
            setRecentlyViewedMovie(storedMovies);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
            <div className='w-10/12 mx-auto my-12'>
                <h2 className='text-white md:text-xl font-bold text-center'>{title}</h2>
                <div className='relative flex items-center group'>
                    <AiOutlineArrowLeft 
                        onClick={slideLeft}
                        className='absolute bg-firstColor rounded-full opacity-75 hover:opacity-100 z-50 cursor-pointer group-hover:block' 
                        size={60} 
                    />
                    <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                        {recentlyViewedMovie.length > 0 ?
                            recentlyViewedMovie.map(movie => (
                                <a 
                                href={`https://www.themoviedb.org/movie/${movie?.id}`} 
                                target="_blank" 
                                rel="noreferrer"
                                key={movie.id} 
                                > 
                                    <div 
                                        className='sm:w-[12.5rem] md:w-[15rem] lg:[17.5rem] relative inline-block cursor-pointer p-2 hover:bg-firstColor'
                                    >
                                        <img 
                                            className='w-full h-auto block' 
                                            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} 
                                            alt={movie?.title} 
                                        />
                                        <div 
                                            className='absolute top-0 right-0 w-full h-full hover:bg-gray-900/80 opacity-0 hover:opacity-100 text-white text-center p-6'
                                        >
                                            <h3 className='text-sm font-bold mb-2 text-yellow-300'>
                                                {movie?.title}
                                            </h3>
                                            <p className='text-sm font-bold mb-2 italic'>
                                                Rating: {movie?.vote_average}
                                            </p>
                                            <p className='text-sm font-bold mb-2 italic'>
                                                Votes: {movie?.popularity}
                                            </p>
                                            <p className='text-sm font-bold italic'>
                                                Language: {movie?.original_language}
                                            </p>
                                        </div>
                                    </div>   
                                </a> 
                            )) : <p className='text-white md:text-l font-bold text-center'>You have no recently viewed movies!</p>
                        }
                    </div>    
                    <AiOutlineArrowRight 
                        onClick={slideRight}
                        className='absolute right-0 bg-firstColor rounded-full opacity-75 hover:opacity-100 z-50 cursor-pointer group-hover:block' 
                        size={60} 
                    />   
                </div> 
            </div>
        </>  
    )
}

export default RecentlyViewed
