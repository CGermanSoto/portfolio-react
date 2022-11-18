import React from "react";
import '../../Styles/Proyects.css';
import repo1 from '../img/contador.png';
import repo2 from '../img/tetris.png';
import repo3 from '../img/short-url.png';
import repo4 from '../img/api-todocode.png';
import repo5 from '../img/testimonios.png';
import repo6 from '../img/rgb.png';
import repo7 from '../img/tienda.png';
import repo8 from '../img/multiplicacion.png';

function Proyects(){
    return (
        <div className="aboutMe-container">
            <h1 className="window-title p">Mis <span className="red mi">proyectos</span></h1>
            <div className="parrafoProyects">
                <div class="div1 div-card">
                    <a href="https://github.com/CGermanSoto/contador-de-clics" target="_blank">
                    <img src={repo1} className='img-card repo1'></img>
                    <p className='p-card'>Contador de clics</p>
                    </a>
                </div>
                <div class="div2 div-card">
                    <a href="https://github.com/CGermanSoto/Tetris---javaScript" target="_blank">
                    <img src={repo2} className='img-card repo1'></img>
                    <p className='p-card'>Tetris</p>
                    </a>
                </div>
                <div class="div3 div-card">
                    <a href="https://github.com/CGermanSoto/ShortURL-API-REST" target="_blank">
                    <img src={repo3} className='img-card repo1'></img>
                    <p className='p-card'>Short  URL</p>
                    </a>
                </div>
                <div class="div4 div-card">
                    <a href="https://github.com/CGermanSoto/api-todocode" target="_blank">
                    <img src={repo4} className='img-card repo1'></img>
                    <p className='p-card'>API - todocode.com</p>
                    </a>
                </div>
                <div class="div5 div-card">
                    <a href="https://github.com/CGermanSoto/testimonios-freecodecamp" target="_blank">
                    <img src={repo5} className='img-card repo1'></img>
                    <p className='p-card'>Testimonios - freecodecamp.com</p>
                    </a>
                </div>
                <div class="div6 div-card">
                    <a href="https://github.com/CGermanSoto/RGB-RainBow" target="_blank">
                    <img src={repo6} className='img-card repo1'></img>
                    <p className='p-card'>RGB - RainBow</p>
                    </a>
                </div>
                <div class="div7 div-card">
                    <a href="https://github.com/CGermanSoto/Store-Api" target="_blank">
                    <img src={repo7} className='img-card repo1'></img>
                    <p className='p-card'>API - Store.com</p>
                    </a>
                </div>
                <div class="div8 div-card">
                    <a href="https://github.com/CGermanSoto/Tablas-en-consola-NodeJs-Api-REST" target="_blank">
                    <img src={repo8} className='img-card repo1'></img>
                    <p className='p-card'>Tablas de multiplicar - En consola</p>
                    </a>
                </div>
                {/* <div class="div9 div-card">
                    <a href="https://github.com/CGermanSoto/contador-de-clics" target="_blank">
                    <img src={repo1} className='img-card repo1'></img>
                    <p className='p-card'>Contador de clics</p>
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Proyects;