import React from "react";
import Button from "react-bootstrap/Button";
import UserMessage from "./UserMessage"
import MasterMessage from "./MasterMessage"

export default function Chat (){
    return (
        <div id="chat-window">
            <div className="chat-log">
                <UserMessage />
                <MasterMessage />
                <UserMessage />
                <MasterMessage />
                <UserMessage />
                <MasterMessage />
                <UserMessage />
                <MasterMessage />
            </div>
            <div className="text-input-box">
                <i class="fas fa-paperclip"></i>
                <input className="text-input" placeholder="Enter your message here" >
                </input>
                <Button className="send-btn"variant="primary">Send<i class="far fa-paper-plane"></i></Button>
            </div>
        </div>
    )
}