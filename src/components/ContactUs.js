import "../css/ContactUs.css";
import React, { useState } from "react";

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
      <div className="contactInformationTitle">Contact</div>
      <div className="contactInformation">
        1020 Commercial St., Suite #104A San Jose Ca 95112 (map & directions) Office : (408) 437-9034 Fax: (408)
        437-3934 Cell: (408) 966-5282 Email: info@mncprecision.com
      </div>
      <div className="contactFormTitle">Contact Form</div>
      <div className="contactFormContainer">
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
      </div>
      <button className="contactSubmitButton">Submit</button>
    </div>
  );
};
