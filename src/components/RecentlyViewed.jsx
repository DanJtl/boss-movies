import React, { useEffect, useState } from 'react';

function RecentlyViewed({title}) {
    const [recentlyViewedMovies, setRecentlyViewedMovies] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const storedMovies = JSON.parse(localStorage.getItem('recentlyViewedMovies')) || [];
            setRecentlyViewedMovies(storedMovies);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='w-10/12 mx-auto my-6'>
                <h2 className='text-white md:text-xl font-bold'>{title}</h2>
                <div className='relative flex items-center group'>
                    <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                        {recentlyViewedMovies.map(movie => (
                            <div key={movie.id} className='sm:w-[12.5rem] md:w-[15rem] lg:[17.5rem] relative inline-block cursor-pointer p-2 hover:bg-firstColor'>
                            <img 
                                className='w-full h-auto block' 
                                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} 
                                alt={movie.title} 
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
                        ))}
                    </div>  
                </div> 
            </div>
        </>  
    )
}

export default RecentlyViewed
