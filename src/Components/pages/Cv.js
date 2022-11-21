import React from "react";
import '../../Styles/Cv.css';
import imgCv from '../img/abajo.png';
import Documento from '../../downloads/CSotoCV.pdf';


function Cv(){
    return (
        <div className="aboutMe-container">
        <h1 className="window-title p"> <span className="red mi">Mi</span> Curriculum Vitae</h1>
        <div className="parrafoCv">
            <div className="parrafo">
            <h1 className="p-titulo">Descargar CV.pdf</h1>
                <a href={Documento} download>
                    <img src={imgCv} className='imgCv'></img>
                </a>
            </div>

        </div>
    </div>
    );
}

export default Cv;