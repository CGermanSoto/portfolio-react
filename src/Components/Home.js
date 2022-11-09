import React from "react";
import '../Styles/Home.css';

function Home(){
    const llavesA= '{';
    const llavesB= '}';
    return (
        <div className="home-container">
            <h1 className="title">Hola, soy <span className="red">Ger</span></h1>
            <p className="p"><span className="llaves red">{llavesA}</span>Backend Developer<span className="llaves red">{llavesB}</span></p>
        </div>
    );
}

export default Home;