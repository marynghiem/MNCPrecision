import "../css/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="navMenu">
        <a href="/">
          <img src="mncprecisionlogo.png" className="company_logo" />
        </a>
        <div className="navMenuListItem">
          <a href="/" className="navMenuHome">
            Home
          </a>
        </div>
        <div className="navMenuListItem">
          <a href="/Services" className="navMenuServices">
            Services
          </a>
        </div>
        <div className="navMenuListItem">
          <a href="/Equipment" className="navMenuEquipment">
            Equipment
          </a>
        </div>
        <div className="navMenuListItem">
          <a href="/QualityControl" className="navMenuQualityControl">
            Quality Control
          </a>
        </div>
        <div className="navMenuListItem">
          <a href="/ContactUs" className="navMenuContactUs">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
