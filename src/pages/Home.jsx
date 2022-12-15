import React from 'react'
import Footer from '../components/Footer';
import Main from '../components/Main';
import Slider from '../components/Slider';
import requests from '../Requests';

function Home() {
    return (
        <>
            <Main />
            <Slider title="Popular Movies" fetchURL={requests.popularMovies} />
            <Slider title="Top Rated Movies" fetchURL={requests.topRatedMovies} />
            <Footer />
        </>
    )
}

export default Home;