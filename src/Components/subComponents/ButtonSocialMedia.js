import React from "react";
import ButtonSocialMediaCss from './Stles/ButtonSocialMediaCss.css';

function ButtonSocialMedia(props){
    return (
        <>
        <img
            className="img-button"
            src={require(`../img/${props.imagen}.png`)}
        />
        </>
    );
}

export default ButtonSocialMedia;