import "../css/ContactUs.css";
import React, { useState } from "react";

export const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <div className="contactInformationTitle">Contact</div>
      <div className="contactInformation">
        1020 Commercial St., Suite #104A San Jose Ca 95112 (map & directions) Office : (408) 437-9034 Fax: (408)
        437-3934 Cell: (408) 966-5282 Email: info@mncprecision.com
      </div>
      <div className="contactFormTitle">Contact Form</div>
      <div className="contactFormContainer">
        <div className="contactFormNameLabel">Name:</div>
        <div className="contactFormInput"></div>
        <div className="contactFormEmailLabel">Email:</div>
        <div className="contactFormInput"></div>
        <div className="contactFormAddressLabel">Address:</div>
        <div className="contactFormInput"></div>
        <div className="contactFormPhoneLabel">Phone:</div>
        <div className="contactFormInput"></div>
        <div className="contactFormMessageLabel">Message:</div>
      </div>
    </div>
  );
};
