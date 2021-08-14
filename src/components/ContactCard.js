import React from "react"
import Button from "react-bootstrap/Button"

export default function ContactCard() {
    
    return (
        <div className ="contact-card-container">
         <div className="contact-card">
            <span className="contact-initial"><h1>WA</h1></span>
            <p className="contact-email"><i class="far fa-envelope icon-customized"></i>wa@supermario.com</p>
            <p className="contact-name"><i class="far fa-id-card icon-customized"></i>Waluigi Aoki</p>
            <Button variant="outline-secondary" className="achive-btn">Achive<i class="far fa-trash-alt trash-customized"></i></Button>
         </div>   
        </div>
    );
    
}