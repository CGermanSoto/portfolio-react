import React from "react";
import '../Styles/AboutMe.css';

function AboutMe(){
    return (
        <div className="aboutMe-container">
            <h1 className="window-title p">Un poco de <span className="red mi">mi</span></h1>
            <p >
                Hola, te cuento un poco de mi...<br/>

                Soy German Soto, vivo en Buenos Aires, CABA, desde el 2015. Nací en Corrientes Capital, el 13/05/1992 y hace ya un año y poco más descubrí la programación junto con la nueva oleada de personas interesadas en el mundo IT. Desde entonces nunca paré de estudiar, principalmente desarrollando en la rama BackEnd y enamorado de JavaScript.
                <br/>
                Formación:<br/>

                Junio-2021<br/>
                Cursando: Lic. en Sistemas de la Información de las organizaciones - Facultad de Ciencias Economicas - UBA
                <br/>
                Marzo-2021<br/>
                CODO A CODO: Carrera de FrontEnd - HTML, CSS, JavaScript
                <br/>
                Agosto-2021<br/>
                CODO A CODO: Carrera de BackEnd - JavaScript, NodeJs, ExpressJs, MongoDB
                <br/>
                Octubre-2021<br/>
                FreeCodeCamp: NodeJs, ExpressJs, MongoDB, JavaScript
                <br/>
                Enero-2021<br/>
                Udemy: Carrera de BackEnd - NodeJs, ExpressJs, MongoDB<br/>
            </p>
        </div>
    );
}

export default AboutMe;