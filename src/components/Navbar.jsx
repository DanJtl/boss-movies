import React from 'react'
import { ImSearch } from 'react-icons/im'
import '../css/Navbar.css'

function Navbar() {
    return (
        <>
            <nav className=''>
                <div className=''>
                    <h1 id="logo">BossMovies</h1>

                </div>
                <input type="text" placeholder='Search a movie...'></input>
                <ImSearch />
                <div id="night-switch">
                    <div id="night-switch-move"></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar