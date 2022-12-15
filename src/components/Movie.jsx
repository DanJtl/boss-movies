import React from 'react'
import { Link } from 'react-router-dom'

function Movie({movie}) {
    return (
        <Link to={`${movie.id}`}>
            <div className='sm:w-[12.5rem] md:w-[15rem] lg:[17.5rem] relative inline-block cursor-pointer p-2'>
                <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie.title} />
                <div className='absolute top-0 left-o w-full h-full hover:bg-gray-900/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='flex justify-center items-center h-full white-space-normal text-sm md:text-sm font-bold text-center'>
                        {movie?.title}
                    </p>
                    <p className='absolute top-2 left-2 text-white font-bold'>
                        Rating: {movie?.vote_average}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Movie