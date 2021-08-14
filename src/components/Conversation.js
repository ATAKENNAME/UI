import React, {useState} from "react"
import ActiveUserCard from "./ActiveUserCard"
import AchivedUserCard from "./AchivedUserCard"

export default function Conversation (){
    const [isActive, setIsActive] = useState(true);
    const [isAchive, setIsAchive] = useState(false)
  return (
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <h6>Active Conversations</h6>
            <div>{isActive?<i class="fas fa-angle-up"></i>: 
            <i class="fas fa-angle-down"></i>}</div>
          </div>
          {isActive && <div className="accordion-content">
              <ActiveUserCard />
              </div>}
        </div>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsAchive(!isAchive)}>
            <h6>Achived Conversations</h6>
            <div>{isAchive?<i class="fas fa-angle-up"></i>: 
            <i class="fas fa-angle-down"></i>}</div>
          </div>
          {isAchive && <div className="accordion-content">
            <AchivedUserCard />
            </div>}
        </div>
      </div>
  );
}