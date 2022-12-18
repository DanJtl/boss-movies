import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import requests from "../Requests";


function Navbar() {
    const key = '73b625c23e946ab575b1295cd2592adf'

    const [searchMovie, setSearchMovie] = useState([]);
    const [results, setResults] = useState([]);



    const searchMovies = async (event) => {
        setSearchMovie(event.target.value);

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchMovie}`);
            setResults(response.data.results)
        } catch (error) {
            console.log("Something went wrong...");
        }
    };

    return (
        <>
            <nav className=" bg-[#111827] p-6">
                <div className="flex items-center justify-between flex-wrap w-10/12 mx-auto">
                    <div className="flex items-center flex-shrink-0 text-white mr-20">
                        <NavLink to="/">
                            <h1 className="font-bold text-3xl tracking-tight hover:text-secondColor">BossMovies</h1>
                        </NavLink>
                    </div>
                    <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
                        <div className="text-xl md:flex-grow my-5">
                            <NavLink to="Movies">
                                <span className="block mt-4 md:inline-block md:mt-0 text-white hover:text-secondColor mr-8">Movies</span>
                            </NavLink>
                            <NavLink to="Tvseries">
                                <span className="block mt-4 md:inline-block md:mt-0 text-white hover:text-secondColor mr-8">Tv-Series</span>
                            </NavLink>
                        </div>
                        <div className="flex items-center">
                            <form>
                                <input
                                    type="text"
                                    value={searchMovie}
                                    onChange={searchMovies}
                                    placeholder="Search a movie..."
                                    className="bg-gray-200 rounded-full text-gray-900 mt-2 md:mt-0 px-4 py-2 focus:outline-none focus:shadow-outline"
                                />
                                <button type="submit" className="bg-blue-500 rounded py-2 px-3 text-white">
                                    Search
                                </button>
                           
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            {results.length > 0 && (
                <div>
                    {results.map((movie, id) => (
                         <div key={id} className='sm:w-[12.5rem] md:w-[15rem] lg:[17.5rem] relative inline-block cursor-pointer p-2 hover:bg-firstColor'>
                            <img 
                                className='w-full h-auto block' 
                                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} 
                                alt={movie.title} 
                            />
                            <div 
                                //  onClick={handleClick} 
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
                    ))}
                </div>
            )}
        </>
    );
}

export default Navbar;
