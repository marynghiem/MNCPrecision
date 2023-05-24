import "../css/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="NavMenuList">
      <Link to="/" className="NavMenuHome">
        Home
      </Link>
      <Link to="/Services" className="NavMenuServices">
        Services
      </Link>
      <Link to="/Equipment" className="NavMenuEquipment">
        Equipment
      </Link>
      <Link to="/QualityControl" className="NavMenuQualityControl">
        Quality Control
      </Link>
      <Link className="NavMenuContactUs">Contact Us</Link>
    </div>
  );
};
