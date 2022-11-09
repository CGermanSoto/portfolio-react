import React from "react";
import '../Styles/NavBar.css';

function NavBar(){
    return (
        <div className="navBar-container">
         <button className="myButton"><a href="http://localhost:3000">Home</a></button>
         <button className="myButton"><a href="http://localhost:3000/AboutMe">About me</a></button>
         <button className="myButton"><a href="http://localhost:3000/">Experience</a></button>
         <button className="myButton"><a href="http://localhost:3000/">Proyects</a></button>
         <button className="myButton"><a href="http://localhost:3000/">Contact</a></button>
        </div>
    );
}

export default NavBar;