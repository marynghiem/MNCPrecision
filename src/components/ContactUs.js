import "../css/ContactUs.css";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contactUsContainer">
      <div className="whiteBackground">
        <div className="contactUsImageContainer">
          <img src="EquipmentPicture1.jpeg" alt="" className="contactUsPicture1" />
          <img src="HomePageMainImage.jpeg" alt="" className="contactUsPicture2" />
        </div>
        <div className="contactFormContainer">
          <h1 className="contactFormTitle">Contact Form</h1>
          <div className="contactFormNameLabel">Name:</div>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            maxLength="20"
            onChange={onNameChange}
            value={name}
          ></input>

          <div className="contactFormEmailLabel">Email:</div>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            maxLength="20"
            onChange={onEmailChange}
            value={email}
          ></input>

          <div className="contactFormAddressLabel">Address:</div>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            maxLength="20"
            onChange={onAddressChange}
            value={address}
          ></input>

          <div className="contactFormPhoneLabel">Phone:</div>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            maxLength="20"
            onChange={onPhoneChange}
            value={phone}
          ></input>
          <div className="contactFormMessageLabel">Message:</div>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            maxLength="20"
            onChange={onMessageChange}
            value={message}
          ></input>
          <div className="contactSubmitButton">Submit</div>
        </div>
        <div className="contactInformationContainer">
          <PlaceIcon sx={{ fontSize: 80 }} />
          <h1 className="contactInformationTitle">Contact</h1>
          <div className="contactInformation">
            <p>1020 Commercial St., Suite #104A San Jose Ca 95112 (map & directions)</p>
            <p>Office : (408) 437-9034</p>
            <p>Fax: (408) 437-3934</p>
            <p>Cell: (408) 966-5282</p>
            <p>Email: info@mncprecision.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
