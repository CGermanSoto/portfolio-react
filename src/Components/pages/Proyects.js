import React from "react";
import '../../Styles/Proyects.css';

function Proyects(){
    return (
        <div className="aboutMe-container">
            <h1 className="window-title p">Mis <span className="red mi">proyectos</span></h1>
            <div className="parrafoAboutMe">
                <div class="parent">
                    <div class="div1">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/repo1.png')} /></a>
                    </div>
                    <div class="div2">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/contador-clics.png')} /></a> 
                    </div>
                    
                    <div class="div3">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/repo2.png')} /></a>
                    </div>
                    <div class="div4">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/repo3.png')} /></a>
                    </div>
                    <div class="div5">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/repo1.png')} /></a>
                    </div>
                    <div class="div6">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/repo1.png')} /></a>
                    </div>
                    <div class="div7">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/repo1.png')} /></a>
                    </div>
                    <div class="div8">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/repo1.png')} /></a>
                    </div>
                    <div class="div9">
                        <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target='_blank'><img className="img-proyect" src={require('../img/repo1.png')} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyects;