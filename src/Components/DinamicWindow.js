import React from "react";
import '../Styles/DinamicWindow.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import AboutMe from './pages/AboutMe';
import Home from './Home';
import Experience from "./pages/Experiences";
import Proyects from './pages/Proyects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Cv from './pages/Cv';

function Window(){
    return (
        <>
        <div className="window-container">
            <div className="window-content-container">
                <BrowserRouter>
                    <Routes>
                        <Route path='/AboutMe' element={<AboutMe />}/>
                        <Route path='/Experience' element={<Experience />}/>
                        <Route path='/Proyects' element={<Proyects />}/>
                        <Route path='/Education' element={<Education />}/>
                        <Route path='/Contact' element={<Contact />}/>
                        <Route path='/Cv' element={<Cv />}/>
                        <Route path='/' element={<Home />}/>
                    </Routes>
                </BrowserRouter>   
            </div>
            <div className="window-menu">
                <NavBar />
            </div>
        </div>
     </>
    );
}

export default Window;