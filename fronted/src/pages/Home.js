import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <Row>
        <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                <h1>Share your talk with every one</h1>
                <h6>ChatApp lets you connect with the world</h6>
            </div>
    
            <LinkContainer to="/chat">
                <Button variant="success">
                    Get Started <i className="fas fa-comments home-message-icon"></i>
                </Button>
            </LinkContainer>
        </Col>
        <Col md={6} className="home__bg"></Col>
    </Row>
  )
}

export default Home