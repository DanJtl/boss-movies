import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Tvseries from "../pages/Tvseries";

function Navbar() {

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-fifthColor p-6">
                <div className="flex items-center flex-shrink-0 text-firstColor mr-20">
                    <NavLink to="Home">
                        <h1 className="font-bold text-3xl tracking-tight">BossMovies</h1>
                    </NavLink>
                </div>
                <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div className="text-xl md:flex-grow my-5">
                        <NavLink to="Movies">
                            <span className="block mt-4 md:inline-block md:mt-0 text-white hover:text-firstColor mr-8">Movies</span>
                        </NavLink>
                        <NavLink to="Tvseries">
                            <span className="block mt-4 md:inline-block md:mt-0 text-white hover:text-firstColor mr-8">Tv-Series</span>
                        </NavLink>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search a movie..."
                            className="bg-gray-200 rounded-full text-gray-900 mt-2 md:mt-0 px-4 py-2 focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='Home' element={<Home />} />
                <Route path='Movies' element={<Movies />} />
                <Route path='Tvseries' element={<Tvseries />} />
            </Routes>
        </>
    );
}

export default Navbar;
