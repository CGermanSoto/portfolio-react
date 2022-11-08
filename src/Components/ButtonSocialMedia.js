import React from "react";
import '../Styles/ButtonSocialMediaCss.css';

function ButtonSocialMedia(props){
    return (
        <>
        <img
            className="img-button"
            src={require(`./img/${props.imagen}.png`)}
            alt='SocialMedia'
        />
        </>
    );
}

export default ButtonSocialMedia;