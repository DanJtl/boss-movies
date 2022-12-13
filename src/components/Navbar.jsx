import React, { useState } from 'react'
import { ImSearch } from 'react-icons/im'
import '../css/Navbar.css'

function Navbar() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <nav className=''>
                <div className=''>
                    <h1 id="logo">BossMovies</h1>

                </div>
                <input type="text" placeholder='Search a movie...'></input>
                <ImSearch />
                <div id="toggle-color">
                    <div id="toggle-color-on"></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar