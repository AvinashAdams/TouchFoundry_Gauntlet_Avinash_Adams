import React, { Component } from 'react';


//Create Protected Component
class Protected extends Component {

    render() { 
        return ( 
            <div className="protected-div">
                <h4 className="pro-heading">100% Secure and Protected</h4>
                <h6 className="pro-heading">Trust and Safety is our #1 Priority at Hourspace</h6>
                <ul className="looking">
                    <h6> Looking for a Space</h6>
                    <li>✓ Secure Merchant Transactions</li>
                    <li>✓ Authenticated Hosts</li>
                    <li>✓ Direct Messaging with Hosts</li>
                    <li>✓ Host Profile and Reviews</li>
                </ul>
                <ul className="hosting">
                    <h6>Hosting out a Space</h6>
                    <li>✓ R1,000,000 Insurance Coverage</li>
                    <li>✓ Booking Management Platform Flexible</li>
                    <li>✓ Cancellation and Deposit Policies</li>
                    <li>✓ 24/7 Customer Support Team</li>
                </ul>
            </div>
            
         );
    }
}
//export the component
export default Protected;