import React from 'react'
import Main from '../components/Main';
import Slider from '../components/Slider';
import requests from '../Requests';

function Home() {
    return (
        <>
            <Main />
            <Slider title="Popular Movies" fetchURL={requests.popularMovies} />
            <Slider title="Top Rated Movies" fetchURL={requests.topRatedMovies} />
        </>
    )
}

export default Home;