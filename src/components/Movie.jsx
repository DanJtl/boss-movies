import React from 'react'

function Movie({movie}) {

    const movieURL = `https://www.themoviedb.org/movie/${movie?.id}`;

    const handleClick = () => {
        window.open(movieURL, '_blank');
    };

    return (
        <>
            <div className='sm:w-[12.5rem] md:w-[15rem] lg:[17.5rem] relative inline-block cursor-pointer p-2 hover:bg-firstColor'>
                <img 
                    className='w-full h-auto block' 
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} 
                    alt={movie.title} 
                />
                <div 
                    onClick={handleClick} 
                    className='absolute top-0 right-0 w-full h-full hover:bg-gray-900/80 opacity-0 hover:opacity-100 text-white text-center p-6'
                >
                    <h3 className='text-sm font-bold mb-2 text-firstColor'>
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
        </>
    );
};

export default Movie