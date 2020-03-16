import React from 'react';
import banner from './images/banner.png';
import logo from './images/logo.PNG';


function Header() {

  return (
    <div className="header">
      <div>
      <img  src={logo} alt=""/>
      <button className="seach-button">Search</button>
      <button className="list-button">List your space</button>
      <button className="list-button1">Sign Up</button>
      <button className="list-button2">Log In</button>
      </div>
  	<img  src={banner} alt=""/>
      <h1 className="heading">Find a space</h1>
      <h5 className="sub-heading">Discover & Book a Space for Your Next Event</h5>
      <select className="selector">
        <option value="local">Location</option>
        <option value="city1">Cape Town</option>
        <option value="city2">Gauteng</option>
        <option value="city3">Durban</option>
      </select>
      <select className="planner">
        <option value="option">What are you planning</option>
        <option value="option1">Holiday</option>
        <option value="option1">Business Trip</option>
        <option value="option1">Visit</option>
      </select>
      <button class="button">Search</button>
      </div>
  );
}

export default Header;