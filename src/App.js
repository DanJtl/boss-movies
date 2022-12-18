import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tvseries from "./pages/Tvseries";
import requests from "./Requests";



function App() {
  return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Movies' element={<Movies />} />
                <Route path='Tvseries' element={<Tvseries />} />
            </Routes>
        </>
    );
}

export default App;
