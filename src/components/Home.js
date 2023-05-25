import "../css/Home.css";
import React, { useState } from "react";

export const Home = () => {
  return (
    <div className="homeContainer">
      <img src="HomePageMainImage.jpeg"></img>
      <h2>Welcome to MNC Precision</h2>
      <div>
        MNC Precision is an established manufacturer of precision-made parts. We serve many industries including but not
        limited to, semiconductor, electronic, medical, security and military. We can meet all your manufacturing needs:
        Prototype, production and engineering design. We can provide such processes as lay patterns and other finishes
        of the highest quality.
      </div>
      <h2>ADDRESS</h2>
      <div>
        1020 Commercial St., Suite #104A San Jose Ca 95112 (map & directions) Office : (408) 437-9034 Fax: (408)
        437-3934 Cell: (408) 966-5282 Email: info@mncprecision.com
      </div>
    </div>
  );
};
