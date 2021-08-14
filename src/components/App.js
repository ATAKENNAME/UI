import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo";
import ProfileCard from "./ProfileCard";
import ContactCard from "./ContactCard";
import Conversation from "./Conversation";
import Chat from "./Chat";

function App() {
  return (
    <Container className="app-container">
      <Row className="app-holder">
        <Col id="left-col" sm ={12} md={4} lg={3}> 
          <Row id ="left-col-up">
            <Col><Logo /></Col>
            <Col><ProfileCard /></Col>
          </Row>
          <Row id="left-col-down">
            <Col><Conversation /></Col>
          </Row>
        </Col>
        <Col id="cen-col" md={8} lg={6}>
          <Chat />
        </Col>
        <Col id="right-col" md={4} lg={3}>
          <ContactCard />
        </Col>
      </Row>
    </Container>
   
  );
}

export default App;

