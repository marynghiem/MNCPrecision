import "../css/Footer.css";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerCompanyName footersections">MNC Precision</div>
      <div className="footerAddress footersections">
        <LocationOnIcon />
        <div className="footerAddressTitle ">ADDRESS</div>
        <div className="footerAddressDescription"> 1020 Commercial St., Suite #104A San Jose Ca 95112</div>
      </div>
      <div className="footerPhoneNumber footersections">
        <PhoneIphoneIcon />
        <div className="footerPhoneNumberTitle">PHONE NUMBER</div>
        <div className="footerPhoneNumberDescription">
          Office : (408) 437-9034 Fax: (408) 437-3934 Cell: (408) 966-5282
        </div>
      </div>
      <div className="footerEmail footersections">
        <EmailIcon />
        <div className="footerEmailTitle">EMAIL</div>
        <div className="footerEmailDescription">info@mncprecision.com</div>
      </div>
    </div>
  );
};
