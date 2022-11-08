import React from "react";
import '../Styles/DinamicWindow.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import AboutMe from './AboutMe';
import Home from './Home';

function Window(){
    return (
        <>
        <div className="window-container">
            <h1 className="window-title">Hola, soy Ger</h1>
            <div className="window-content-container">
                <BrowserRouter>
                    <Routes>
                        <Route path='/AboutMe' element={<AboutMe />}/>
                        <Route path='/Home' element={<Home />}/>
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