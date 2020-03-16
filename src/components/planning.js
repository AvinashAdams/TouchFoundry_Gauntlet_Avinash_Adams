import React, { Component } from 'react';
import thumb from './images/thumb.png'
import CapeTown from './images/CapeTown.jpg'
import durban from './images/durban.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Create Planning Component
class Planning extends Component {
    
    render() { 
        return ( 
            <div className="plandiv">
            <h1 className="main-header">where are you planning your event</h1>
            <h6 className="sub-header">Discover & book a space for your next event</h6>
            <Container className="planning-container">
                <Row>
                    <Col><img className="cape" src={CapeTown} alt=""/>
                        <div className="text-block">
                            <h6 className="label">Cape Town</h6>
                        </div>
                    </Col>
                    <Col><img  src={thumb} alt=""/>
                        <div className="text-block2">
                            <h6 className="label">Gauteng</h6>
                        </div>
                    </Col>
                    <Col><img className="durb" src={durban} alt=""/>
                        <div className="text-block3">
                            <h6 className="label">Durban</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
         );
    }
}
//export the component
export default Planning;