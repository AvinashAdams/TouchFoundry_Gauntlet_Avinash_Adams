import React, { Component } from 'react';
import thumb2 from './images/thumb2.jpg'
import jhb from './images/jhb.jpg'
import image7 from './images/image7.jpg'
import image2 from './images/image2.jpg'
import image1 from './images/image1.jpg'
import image6 from './images/image6.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import thumb from './images/thumb.png'

//Create Curated Component
class Curated extends Component {

    render() { 
        return ( 
            <div className="curated-div">
            <h1 className="main-header">Our Curated List</h1>
            <h6 className="sub-header">Some of our favourite, featured collections</h6>
            <Container className="curated-container">
                <Row>
                    <Col><img className="cape" src={thumb2} alt=""/>
                        <div className="curated-text-block">
                            <h6 className="curated-label">Scenic Meeting Spots</h6>
                        </div>
                    </Col>
                    <Col><img className="joburg" src={image7} alt=""/>
                        <div className="curated-text-block2">
                            <h6 className="curated-label">Affordable Party Venues</h6>
                        </div>
                    </Col>
                    <Col><img className="durb" src={image2} alt=""/>
                        <div className="curated-text-block3">
                            <h6 className="curated-label">Scenic Meeting Spots</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="curated-container">
                <Row>
                    <Col><img className="cape" src={image1} alt=""/>
                        <div className="curated-text-block4">
                            <h6 className="curated-label">Affordable Party Venues</h6>
                        </div>
                    </Col>
                    <Col><img className="joburg"  src={jhb} alt=""/>
                    </Col>
                    <Col><img className="durb" src={image6} alt=""/>
                        <div className="curated-text-block5">
                            <h6 className="curated-label">Affordable Party Venues</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
         );
    }
}
//export the component
export default Curated;