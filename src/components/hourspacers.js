import React, { Component } from 'react';
import thumb2 from './images/thumb2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import user from './images/user.svg'

//Create the Hourspacers Components
class Hourspacers extends Component {
    
    render() { 
        return ( 
            <div className="hourspacers-div">
            <h3 className="main-header">Meet Fellow Hourspacers</h3>
            
            <Container className="trending-container">
                <Row>
                    <Col><Card style={{ width: '18rem' }}>
                        <img className="office" src={thumb2} alt=""/>
                     <Card.Body>
                    <Card.Text>
                        <img className="icon" src={user} alt=""/>
                        <p className="host-info">
                        Host Name 
                        </p>
                        <br></br>
                        <p className="space-info">
                        Title of Space Here
                        </p>
                    </Card.Text>
                     </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <img className="office" src={image3} alt=""/>
                     <Card.Body>
                    <Card.Text>
                    <img className="icon" src={user} alt=""/>
                        <p className="host-info">
                        Host Name 
                        </p>
                        <br></br>
                        <p className="space-info">
                        Title of Space Here
                        </p>
                    </Card.Text>
                     </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <img className="office" src={image4} alt=""/>
                     <Card.Body>
                    <Card.Text>
                    <img className="icon" src={user} alt=""/>
                        <p className="host-info">
                        Host Name 
                        </p>
                        <br></br>
                        <p className="space-info">
                        Title of Space Here
                        </p>
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
export default Hourspacers;

/* <img  src={thumb} alt=""/>
<img className="durb" src={durban} alt=""/>*/