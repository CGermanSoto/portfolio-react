import React from "react";
import '../../Styles/Cv.css';


function Cv(){
    return (
        <div className="aboutMe-container">
        <h1 className="window-title p"> <span className="red mi">Mi</span> Curriculum Vitae</h1>
        <div className="parrafoCv">
            <div className="parrafo">
                <h1 className="p-titulo"><u>Descargar PDF</u></h1>
                
            </div>

            <div className="parrafo">
                <h1 className="p-titulo"><u>Ver online</u></h1>
                
            </div>
            
        </div>
    </div>
    );
}

export default Cv;