import "../css/Navbar.css";
import React, { useState } from "react";

export const Navbar = () => {
  return (
    <div className="NavMenuList">
      <div className="NavMenuHome">Home</div>
      <div className="NavMenuServices">Services</div>
      <div className="NavMenuEquipment">Equipment</div>
      <div className="NavMenuQualityControl">Quality Control</div>
      <div className="NavMenuContactUs">Contact Us</div>
    </div>
  );
};
