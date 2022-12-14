import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';

function Main() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(requests.movies);
                setMovies(response.data.results)
            } catch (error) {
                console.log("Something went wrong...");
            }
        };

        fetchData();
        console.log(movies)
    }, []);

    if (!movies) {
        return <p>Loading...</p>;
      }

    return (
        <div>Main</div>
    )
}

export default Main;