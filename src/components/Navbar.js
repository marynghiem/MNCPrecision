import "../css/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navMenuList">
      <Link to="/" className="navMenuHome">
        Home
      </Link>
      <Link to="/Services" className="navMenuServices">
        Services
      </Link>
      <Link to="/Equipment" className="navMenuEquipment">
        Equipment
      </Link>
      <Link to="/QualityControl" className="navMenuQualityControl">
        Quality Control
      </Link>
      <Link to="/ContactUs" className="navMenuContactUs">
        Contact Us
      </Link>
    </div>
  );
};
