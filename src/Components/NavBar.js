import React from "react";
import '../Styles/NavBar.css';

function NavBar(){
    return (
        <div className="navBar-container">
         <button className="myButton"><a href="http://localhost:3000/Home">Home</a></button>
         <button className="myButton"><a href="http://localhost:3000/AboutMe">About me</a></button>
         <button className="myButton"><a href="http://localhost:3000/Home">My Experience</a></button>
         <button className="myButton"><a href="http://localhost:3000/Home">My Proyects</a></button>
         <button className="myButton"><a href="http://localhost:3000/Home">Contact me!</a></button>
        </div>
    );
}

export default NavBar;