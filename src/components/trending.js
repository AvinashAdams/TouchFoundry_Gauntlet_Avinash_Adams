import React, { Component } from 'react';
import image1 from './images/image1.jpg'
import thumb2 from './images/thumb2.jpg'
import image2 from './images/image2.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//Create Trending Component
class Trending extends Component {
    
    render() { 
        return ( 
            <div className="trending-div">
            <h1 className="main-header">Trending Spaces</h1>
            <h6 className="sub-header">Popular with Hourspace Users</h6>
            <Container className="trending-container">
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <img className="office" src={thumb2} alt=""/>
                     <Card.Body>
                     
                    <Card.Text>
                        The Space Title
                        <br></br>
                        Gardens, Cape Town
                    </Card.Text>
                     </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <img className="office" src={image1} alt=""/>
                     <Card.Body>
                    <Card.Text>
                        The Space Title
                        <br></br>
                        Gardens, Cape Town
                    </Card.Text>
                     </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <img className="office" src={image2} alt=""/>
                     <Card.Body>
                    <Card.Text>
                        The Space Title
                        <br></br>
                        Gardens, Cape Town
                    </Card.Text>
                     </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
         );
    }
}
//export the component
export default Trending;