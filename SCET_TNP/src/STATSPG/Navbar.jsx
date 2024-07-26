import React, { useEffect } from 'react';
import './style.css';
import './header.css';
import './button.css';
import './graph.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="nav">
      <div className="logotext">
        <img className="logo" src="./source1/sesuni.png" alt="SU LOGO" />
        <div className="text1">
          <p className="scettext inter-font">SCET</p>
          <div className="line-1"></div>
          <div className="placement-portal inter-font">
            Placement
            <br />
            Portal
          </div>
        </div>
      </div>
      <hr className="scetbelowline" />
      <div className="side-bar">
        {["STATISTICS", "VISION_AND_MISSION", "TnP_POLICY", "ABOUT", "OFFERS", "TEAM", "NOTIFICATION", "PROFILE","ADD_OFFER"].map((item, index) => (
          <div key={index} className={`frame-${index + 3}`}>
            <div className={`${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}-inter-font`} id={item.toLowerCase().replace(/ /g, '-')} onClick={() => window.location.href = `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}><Link to={`/${item.toLowerCase()}`}className="no-underline">{item}</Link></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
