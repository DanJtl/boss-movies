import React from 'react'
import Footer from '../components/Footer';
import Main from '../components/Main';
import Slider from '../components/Slider';
import requests from '../Requests';

function Home() {
    return (
        <>
            <Main />
            <Slider sliderId="1" title="Popular Movies" fetchURL={requests.popularMovies} />
            <Slider sliderId="2" title="Top Rated Movies" fetchURL={requests.topRatedMovies} />
            <Footer />
        </>
    )
}

export default Home;