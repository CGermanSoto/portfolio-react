import React from "react";
import '../Styles/Profile.css'

function Profile(){
    return (
        <div className="profile-img-container">
            <img
                className='profile-img' 
                src={require('./img/profile-img.jpg')}
                alt='profile' />
        </div>
    );
}

export default Profile;