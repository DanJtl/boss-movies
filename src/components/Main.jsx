import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';

function Main() {
    
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(requests.upcomingMovies);
                setMovies(response.data.results);
            } catch (error) {
                console.log("Something went wrong...");
            }
        };

        fetchData();
    }, []);

    const movieURL = `https://www.themoviedb.org/movie/${movie?.id}`;    

    const handleClick = () => {
        window.open(movieURL, '_blank');
        let movieFound = false;

        const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewedMovies')) || [];

        recentlyViewed.forEach(recentMovie => {
            if (recentMovie.id === movie.id) {
                movieFound = true;
            }
        });

        if (!movieFound) {
            recentlyViewed.push(movie);
            localStorage.setItem('recentlyViewedMovies', JSON.stringify(recentlyViewed));
        } 
    };

    return (
        <>
            <section className="bg-thirdColor text-white py-16">
                <div className="container mx-auto px-6 w-10/12">
                    <div className="flex-row md:flex items-center">
                        <div className="w-full md:w-1/2 pr-6 block ">
                            <h1 className="text-4xl font-bold leading-tight mb-4 text-center">
                                {movie?.original_title}
                            </h1>
                            <p className="text-lg leading-normal my-4 text-center">
                                {movie?.overview}
                            </p>
                            <p className="text-md text-gray-400 leading-normal my-4 text-center">
                                Release Date: {movie?.release_date}
                            </p>
                            <div className="flex items-center justify-center mt-4">
                                <p className="text-lg leading-normal font-bold text-center px-4">
                                    {movie?.vote_average !== 0 ? `Rating: ${movie?.vote_average}` : "Rating: No rating yet"}
                                </p>
                                <div className='p-4'>
                                    <button onClick={handleClick} className="bg-secondColor text-white font-bold py-3 px-4 rounded-lg hover:text-secondColor hover:bg-white">
                                        Read More!
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mx-auto py-4 my-4">
                            <img className='rounded-3xl border-4' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;



    
