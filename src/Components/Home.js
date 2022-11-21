import React from "react";
import '../Styles/Home.css';

function Home(){
    const llavesA= '{';
    const llavesB= '}';
    return (
        <div className="home-container">
            <h1 className="title">Hola, soy <span className="red ger">Ger</span></h1>
            <img
                className='profile-img-home' 
                src={require('./img/profile-img.jpg')}
                alt='profile' />
            
            <p className="p puesto"><span className="llaves red">{llavesA}</span>Software Engineer<span className="llaves red">{llavesB}</span></p>
        </div>
    );
}

export default Home;