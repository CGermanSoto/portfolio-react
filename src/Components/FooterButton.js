import React from "react";
import '../Styles/FooterButton.css'


function Footer(){
    return (
        <div className="footer-container">  
            <a href="https://github.com/CGermanSoto" target='_blank'>
                <img className='iconFooter' src={require('./img/github.png')}></img>
            </a>
            <a href="https://www.linkedin.com/in/ger-developer/" target='_blank'>
                <img className='iconFooter' src={require('./img/linkedin.png')}></img>
            </a>
            <a href="https://walink.co/38fd18" target='_blank'>
                <img className='iconFooter' src={require('./img/whatsapp.png')}></img>
            </a>
            <a href="#" target='_blank'>
                <img className='iconFooter' src={require('./img/cv.png')}></img>
            </a>
            <a href="/Contact">
                <img className='iconFooter' src={require('./img/correo-electronico.png')}></img>
            </a>
        </div>
    );
}

export default Footer;