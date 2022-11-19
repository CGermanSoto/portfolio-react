import React from "react";
import '../Styles/NavBar.css';

function NavBar(){
    return (
        <div className="navBar-container">
         <a href="/"><button className="myButton">Home</button></a>
         <a href="/AboutMe"><button className="myButton">About me</button></a>
         <a href="/Education"><button className="myButton">Education</button></a>
         <a href="/Experience"><button className="myButton">Work Experience</button></a>
         <a href="/Proyects"><button className="myButton">My proyects</button></a>
        </div>
    );
}

export default NavBar;