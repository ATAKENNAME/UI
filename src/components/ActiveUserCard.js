import React from "react";

export default function ActiveUserCard (){
    return (
        <>
        <div className="user-card">
            <span className="user-pic-holder">
                <img src="https://64.media.tumblr.com/50bbdfce99b2eed1c56b716476a8c1ab/8ed583288b73e1d2-82/s1280x1920/263af6630e779ce82fa711158569eb5093042545.jpg" 
                className="user-pic"
                alt="user profile"/>
            </span>
            <span className="user-name">Waluigi Aoki</span>
        </div>
        <div className="user-card">
            <span className="user-pic-holder">
                <img src="https://www.vectorkhazana.com/assets/images/products/Luigi-Circle.jpg" 
                className="user-pic"
                alt="user profile"/>
            </span>
            <span className="user-name">Luigi Sandiego</span>
        </div>
        <div className="user-card">
            <span className="user-pic-holder">
                <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-super-mario-brothers-princess-peach.jpg" 
                className="user-pic"
                alt="user profile"/>
            </span>
            <span className="user-name">Princesa Sandiego</span>
        </div>
        </>
    )
}