import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Create the Footer Component
class Footer extends Component {
    
    render() { 
        return ( 
            <div className="footer">
               <Container>
                    <Row>
                        <Col><h5 className="footer-heading">Hourspace</h5>
                        <br></br>
                        <h6 className="footer-links">About</h6>
                            <h6 className="footer-links">Contact Us</h6>
                            <h6 className="footer-links">Terms of Service</h6>
                            <h6 className="footer-links">Privacy Policy</h6>
                            <h6 className="footer-links">Cancellation Policy</h6>
                            <h6 className="footer-links">Space Use Agreement</h6>
                        </Col>
                        <Col><h5 className="footer-heading">Discover Spaces</h5>
                        <br></br>
                        <h6 className="footer-links">How it works</h6>
                             <h6 className="footer-links">List your space</h6>
                             <h6 className="footer-links">Help Centre</h6>
                             <h6 className="footer-links">Press</h6>
                             <h6 className="footer-links">Site Map</h6>
                        </Col>
                        <Col><h5 className="footer-heading">Connect</h5>
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-google-plus"></i>
                        <i class="fa fa-youtube-play"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-pinterest"></i>
                        <i class="fa fa-envelope"></i>
                        </Col>
                    </Row>
                </Container>
                <div className="copy-right">
                    <h6>Avinash Adams</h6>
                </div>

            </div>
         );
    }
}
//export the component
export default Footer;