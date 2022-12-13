import React, { useState } from 'react'
import { ImSearch } from 'react-icons/im'
// import 'tailwindcss/dist/tailwind.min.css';

function Navbar() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <nav className="bg-gray-800 flex items-center justify-between p-4">
                <a href="#" className="text-white font-bold">
                    My App
                </a>
                <div>
                    <a href="#" className="text-white hover:text-gray-300 mr-4">
                        Home
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        About
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar

