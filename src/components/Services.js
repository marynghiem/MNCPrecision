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
        <img src="services1.jpeg" />
        <img src="services2.jpeg" />
        <img src="services3.jpeg" />
        <img src="services4.jpeg" />
        <img src="services5.jpeg" />
        <img src="services6.jpeg" />
      </div>
    </div>
  );
};
