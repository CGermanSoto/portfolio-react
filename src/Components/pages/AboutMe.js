import React from "react";
import '../../Styles/AboutMe.css';

function AboutMe(){
    return (
        <div className="aboutMe-container">
            <h1 className="window-title p">Un poco de <span className="red mi">mi</span></h1>
            <div className="parrafoAboutMe">
            • Bienvenido/a a mi <span className="red">portfolio</span>!<br />
                <br /><hr className="linea"/>
                Donde además de mostrar mi experiencia y habilidades dentro de la programación, también comparto algunas de las que son mis pasiones.
                <br />
                Me llamo <span className="red">German</span> Soto y soy de <span className="red">Corrientes</span> Capital. Actualmente resido en
                la Gran Ciudad de <span className="red">Buenos Aires</span>.
                <br />
                Empecé aprendiendo fundamentos de programación y algunas cositas de <span className="red">JavaScript</span>. Luego continué mi camino estudiando <span className="red">NodeJs</span>, ExpressJS, Bases de datos (SQL, MONGODB, MYSQL)
                <br />
                Hasta que empecé a estudiar y trabajar Con <span className="red">Java</span>. El resto de la historia se encuentra en mi CV, pero en resumen, continúo este camino, aprendiendo de cada lenguaje y recoveco donde me lleva la programación. 
                <hr />
            </div>
        </div>
    );
}

export default AboutMe;