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
                setMovies(response.data.results)
            } catch (error) {
                console.log("Something went wrong...");
            }
        };

        fetchData();
    }, []);

    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="flex items-center">
                    <div className="w-full md:w-1/2 pr-6 block ">
                        <h1 className="text-4xl font-bold leading-tight mb-4 text-center">
                            {movie?.original_title}
                        </h1>
                        <p className="text-lg leading-normal my-8 text-center">
                            {movie?.overview}
                        </p>
                        <div className="flex items-center justify-center mt-4">
                            <p className="text-lg leading-normal font-bold text-center px-4">
                                Rating: {movie?.vote_average}
                            </p>
                            <div className='px-4'>
                                <button className="bg-secondColor text-white font-bold py-3 px-4 rounded-lg hover:text-secondColor hover:bg-white">
                                    Watch Movie!
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 hidden md:block">
                        <img className='rounded-3xl border-4' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;



    
