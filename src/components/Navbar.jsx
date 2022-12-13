import React, { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(true);

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-fifthColor p-6">
                <div className="flex items-center flex-shrink-0 text-firstColor mr-20">
                    <h1 className="font-semibold text-3xl tracking-tight">BossMovies</h1>
                </div>
                <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div className="text-xl md:flex-grow my-5">
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-firstColor mr-8">
                            Movies
                        </a>
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-firstColor">
                            Tv-Series
                        </a>
                    </div>
                    <div>
                        <input type="text" placeholder="Search a movie..." className="bg-gray-200 rounded-full text-gray-900 mt-2 md:mt-0 px-4 py-2 focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
