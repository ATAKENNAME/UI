import React from "react"

export default function ProfileCard() {
    
    return (
        <div className ="profile-card-container">
         <div className="profile-card">
            <img className ="profile-pic"src = "https://avatarfiles.alphacoders.com/103/103985.jpg" alt="mario" />
            <p className="profile-name">Mario Sandiego<i className="fas fa-cog cog-customized"></i></p>
            <p className="profession">Swiss Plumber</p>
            <span className="switch-btn">
                <label className="switch">
                 <input type="checkbox"/>
                 <span className="slider round" />
                </label> 
            </span> 
                <p className="status">Active</p>  
         </div>   
        </div>
    );
    
}