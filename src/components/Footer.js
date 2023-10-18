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
        <div className="iconBorderBottom">
          <LocationOnIcon sx={{ fontSize: 80 }} />
        </div>
        <div className="footerAddressTitle title">ADDRESS</div>
        <div className="footerAddressDescription descriptions"> 1020 Commercial St., Suite #104A San Jose Ca 95112</div>
      </div>
      <div className="footerPhoneNumber footersections">
        <div className="iconBorderBottom">
          <PhoneIphoneIcon sx={{ fontSize: 80 }} />
        </div>
        <div className="footerPhoneNumberTitle title">PHONE NUMBER</div>
        <div className="footerPhoneNumberDescription descriptions">
          Office : (408) 437-9034 Fax: (408) 437-3934 Cell: (408) 966-5282
        </div>
      </div>
      <div className="footerEmail footersections">
        <div className="iconBorderBottom">
          <EmailIcon sx={{ fontSize: 80 }} />
        </div>
        <div className="footerEmailTitle title">EMAIL</div>
        <div className="footerEmailDescription descriptions">info@mncprecision.com</div>
      </div>
    </div>
  );
};
