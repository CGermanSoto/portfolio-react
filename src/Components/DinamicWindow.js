import React from "react";
import '../Styles/DinamicWindow.css'

function Window(){
    return (
        <div className="window-container">
            <div className="window-title-content-container">
                <h1 className="window-title">Hola, soy Ger</h1>
                <p className="window-content">Backend Developer</p>
            </div>
            <div className="window-menu">
                <button>Inicio</button>
                <button>Ger</button>
                <button>Proyectos</button>
                <button>Contacto</button>
            </div>
        </div>
    );
}

export default Window;