import React from "react";
import '../../Styles/Experience.css';

function Experience(){
    return (
        <div className="aboutMe-container">
            <h1 className="window-title p">Mi <span className="red mi">experiencia</span></h1>
            <div className="parrafoExperience">
                <div className="parrafo">
                    <h1 className="p-titulo"><u>NTT DATA Europe & LATAM</u></h1>
                    <h4 className="p-fecha red">Mayo - 2022 // Actualidad</h4>
                    <h3 className="p-puesto"><i>Software Engineer Junior</i></h3>
                    <h4 className="p-funciones">
                        <span className="red">•</span> Desarrollo de funcionalidades en aplicaciones web utilizando
                            principalmente java 7/8. Spring y Springboot, y ZK. <br /><br />
                        <span className="red">•</span> Conexión a base de datos con Hibernate y
                            Bases de datos en SQL. <br /><br />
                        <span className="red">•</span> Integración con API REST.<br /><br />
                        <span className="red">•</span>  Pruebas unitarias con JUnit. <br /><br />
                        <span className="red">•</span>  Metodologías ágiles: Scrum.
                    </h4>
                </div>

                <br /><hr className="linea"/>

                <div className="parrafo">
                    <h1 className="p-titulo"><u>Developer Web Autonomo</u></h1>
                    <h4 className="p-fecha red">Octubre - 2020 // Mayo - 2022</h4>
                    <h4 className="p-funciones">
                    <span className="red">•</span>  Desarrollador web con JavaScript y ReactJs. <br /><br />
                    <span className="red">•</span>  Conexión a base de datos con mongoose y
                            Bases de datos NodeJs. <br /><br />
                    <span className="red">•</span>  Integración y desarrollo de API.<br /><br />
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Experience;