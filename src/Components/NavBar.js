import React from "react";
import '../Styles/NavBar.css';

function NavBar(){
    return (
        <div className="navBar-container">
         <button className="myButton"><a href="/">Home</a></button>
         <button className="myButton"><a href="/AboutMe">About me</a></button>
         <button className="myButton"><a href="/Education">Education</a></button>
         <button className="myButton"><a href="/Experience">Work Experience</a></button>
         <button className="myButton"><a href="/Proyects">My proyects</a></button>
        </div>
    );
}

export default NavBar;