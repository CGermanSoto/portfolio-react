import React from "react";
import '../../Styles/Contact.css'


function Contact(){
    return (
        <div className="form-container">
            <div><h1 className="title-contact"><a href="#">Enviar<span className="red">!</span></a></h1></div>
            <div className="form-contact">
                <input className='input' type='text' placeholder="Nombre"/>
                <input className='input' type='text' placeholder="Asunto"/>
                <input className='input' type='text' placeholder="Email"/>
                <textarea className='input textarea' placeholder="Mensaje"/>
            </div>
        </div>

    );
}

export default Contact;