import React from "react";
import '../../Styles/Cv.css';


function Cv(){
    return (
        <div className="cv-container">
            <div>
                <h1 className="first-title"> Curriculu<span className="red">m</span> Vita<span className="red">e</span> </h1>
            </div>
            <div className="div-options">
                <h1 className="title-cv"><a href="#">Descargar<span className="red"></span></a></h1>
                <h1 className="title-cv"><a href="#">Ver online <span className="red"></span></a></h1>
            </div>  
        </div>
    );
}

export default Cv;