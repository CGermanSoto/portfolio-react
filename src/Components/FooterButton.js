import React from "react";
import '../Styles/FooterButton.css'
import ButtonSocialMedia from "./ButtonSocialMedia";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer(){
    return (
        <>  
            <a href="https://github.com/CGermanSoto" target='_blank'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
            <ButtonSocialMedia 
                imagen='github' />
            <ButtonSocialMedia 
                imagen='github' />
            <ButtonSocialMedia 
                imagen='github' />
            <ButtonSocialMedia 
                imagen='github' />
            <ButtonSocialMedia 
                imagen='github' />
        </>
    );
}

export default Footer;