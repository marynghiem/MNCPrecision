import "../css/ContactUs.css";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";

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
          <EmailIcon sx={{ fontSize: 80 }} />
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
            placeholder="Email"
            maxLength="20"
            onChange={onEmailChange}
            value={email}
          ></input>

          <div className="contactFormAddressLabel">Address:</div>
          <input
            type="text"
            className="nameInput"
            placeholder="Address"
            maxLength="20"
            onChange={onAddressChange}
            value={address}
          ></input>

          <div className="contactFormPhoneLabel">Phone:</div>
          <input
            type="text"
            className="nameInput"
            placeholder="Phone Number"
            maxLength="20"
            onChange={onPhoneChange}
            value={phone}
          ></input>
          <div className="contactFormMessageLabel">Message:</div>
          <input
            type="text"
            className="nameInput"
            placeholder="Message"
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
            <div className="contactMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.9995582004526!2d-121.88903132418426!3d37.36618733559119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc6448b248a7%3A0xf6b383019d5b8ff!2s1020%20Commercial%20St%2C%20San%20Jose%2C%20CA%2095112!5e0!3m2!1sen!2sus!4v1697486098104!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="googleMap"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
