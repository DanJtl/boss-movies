import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const key = '73b625c23e946ab575b1295cd2592adf'
    
    const [searchMovie, setSearchMovie] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchMovies = async () => {

            if (searchMovie !== "") {
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchMovie}`);
                    setResults(response.data.results)
                } catch (error) {
                    console.log("Something went wrong...");
                }  
            } else {
                setResults([]);
            } 
        };

        searchMovies();
    }, [searchMovie]);

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
                            <q className="text-white italic">"Where even the bad movies are Boss"</q>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={searchMovie}
                                onChange={event => setSearchMovie(event.target.value)}
                                placeholder="Search a movie..."
                                className="bg-gray-200 rounded-full text-gray-900 mt-2 md:mt-0 px-4 py-2 focus:outline-none focus:shadow-outline"
                            />                           
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex items-center justify-between flex-wrap w-10/12 mx-auto">
                {results.map((movie, id) => (
                    <a 
                        key={id} 
                        href={`https://www.themoviedb.org/movie/${movie?.id}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className='sm:w-[12.5rem] md:w-[15rem] lg:[17.5rem] relative inline-block cursor-pointer p-2 hover:bg-thirdColor'
                        onClick={() => {
                            const storedMovies = JSON.parse(localStorage.getItem('recentlyViewedMovies')) || [];
                            const movieFound = storedMovies.find(storedMovie => storedMovie.id === movie.id)
                            if (!movieFound) {
                                storedMovies.unshift(movie);
                                localStorage.setItem("recentlyViewedMovies", JSON.stringify(storedMovies));
                            }
                        }}
                    >
                        <img 
                            className='w-full h-auto block' 
                            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} 
                            alt={movie.title} 
                        />
                        <div className="text-white text-center">
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
                    </a>
                ))}
            </div>
        </>
    );
}

export default Navbar;
