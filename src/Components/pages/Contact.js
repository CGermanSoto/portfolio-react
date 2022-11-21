import '../../Styles/Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9a51jit', 'template_brzxp9h', form.current, 'dbkv3AVmSTzPsIyJv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        const inputName = document.getElementById('name');
        inputName.value='';
        const inputMail = document.getElementById('mail');
        inputMail.value='';
        const inputText = document.getElementById('text');
        inputText.value='';
    };
  
    return (
        <>
        <h1 className="window-title p"> Contacta<span className="red mi">me!</span></h1>
        <div className='form-container'>
            <form ref={form} onSubmit={sendEmail} className="form-contact">
                
                <input type="submit" value="Enviar" className='button-input'/>
                
               <div>
                    <input type="text" name="user_name" placeholder='Name'className='input' id='name'/>
                    <input type="email" name="user_mail" placeholder='Email'className='input' id='mail'/>
                    <textarea name="user_text" placeholder='Mensaje' className='input textarea' id='text'/>
               </div>
            </form>
        </div>
        </>

    
    );
}

export default Contact;