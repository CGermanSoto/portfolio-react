import React from "react";
import '../../Styles/Education.css';

function Education(){
    return (
        <div className="aboutMe-container">
            <h1 className="window-title p">Mis <span className="red mi">estudios</span></h1>
            <div className="parrafoAboutMe">
                <div className="parrafo">
                    <h4 className="p-fecha red">Octubre - 2022</h4>
                    <h3 className="p-puesto">Java Talent Camp - Intermedio</h3>
                    <h4 className="p-funciones">
                        Curso de Java intermedio dictado por NTTDATA. <br /><br />
                        <span className="red">•</span> Spring core <br /><br />
                        <span className="red">•</span> Desarrollo e integración API REST con Spring<br /><br />
                        <span className="red">•</span>  Spring Security <br /><br />
                        <span className="red">•</span>  Springboot
                    </h4>
                </div>

                <br /><hr className="linea"/>

                <div className="parrafo">
                    <h4 className="p-fecha red">Agosto - 2022</h4>
                    <h3 className="p-puesto">TODOCODEACADEMY.COM</h3>
                    <h4 className="p-funciones">
                        Curso de Desarrollo de APIs en JAVA con SpringBoot. <br /><br />
                    </h4>
                </div>

                <br /><hr className="linea"/>

                <div className="parrafo">
                    <h4 className="p-fecha red">Mayo - 2022</h4>
                    <h3 className="p-puesto">Java Talent Camp - Inicial</h3>
                    <h4 className="p-funciones">
                        Curso de Java inicial dictado por NTTDATA. <br /><br />
                        <span className="red">•</span> Fundamentos de la programación <br /><br />
                        <span className="red">•</span> POO<br /><br />
                        <span className="red">•</span> Patrones de diseño<br /><br />
                        <span className="red">•</span>  Springboot
                    </h4>
                </div>
                <br /><hr className="linea"/>

                <div className="parrafo">
                    <h4 className="p-fecha red">Marzo - 2021</h4>
                    <h3 className="p-puesto">CODO A CODO - FrontEnd</h3>
                    <h4 className="p-funciones">
                        Curso de Java intermedio dictado por NTTDATA. <br /><br />
                        <span className="red">•</span> Fundamentos de la programación con JavaSript <br /><br />
                        <span className="red">•</span> POO <br /><br />
                        <span className="red">•</span> HTML, CSS, JavaScript <br /><br />
                        <span className="red">•</span> React Js
                    </h4>
                </div>

            </div>
        </div>
    );
}

export default Education;