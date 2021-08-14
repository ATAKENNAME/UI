import React from "react"

export default function UserMessage (){
    return (
    <div className="message-thread">
        <div className ="chat-user-card">
             <span className="user-pic-holder user-pic-log">
                <img src="https://64.media.tumblr.com/50bbdfce99b2eed1c56b716476a8c1ab/8ed583288b73e1d2-82/s1280x1920/263af6630e779ce82fa711158569eb5093042545.jpg" 
                className="user-pic"
                alt="user profile"/>
            </span>
            <p className ="user-message" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>
    </div>
    )
}