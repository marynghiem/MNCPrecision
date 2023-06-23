import "../css/Services.css";
import React, { useState } from "react";

export const Services = () => {
  return (
    <div className="ServicesContainer">
      <div>Services Offered:</div>
      <ul>
        <li>Prototype</li>
        <li>Production & Assembly </li>
        <li>Semiconductor</li>
        <li>Medical</li>
        <li>DOD</li>
        <li>Aerospace Oil & Gas Hardware Commercial</li>
      </ul>
      <div className="serviceImages">
        <img src="services1.jpeg" alt="" />
        <img src="services2.jpeg" alt="" />
        <img src="services3.jpeg" alt="" />
        <img src="services4.jpeg" alt="" />
        <img src="services5.jpeg" alt="" />
        <img src="services6.jpeg" alt="" />
      </div>
    </div>
  );
};
