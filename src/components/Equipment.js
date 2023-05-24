import "../css/Equipment.css";
import React, { useState } from "react";

export const Equipment = () => {
  return (
    <div className="EquipmentContainer">
      <div>(1) VF4_50"x20"x25"</div>
      <img src="EquipmentPicture1.jpeg" />
      <div>(3) VF3SS_40"x20"x25"</div>
      <img src="EquipmentPicture2.jpeg" />
      <div>(3) VF3_40"x20"x25"</div>
      <img src="EquipmentPicture3.jpeg" />
      <div>(1) VF2_30"x16"x20"</div>
      <img src="EquipmentPicture4.jpeg" />
      <div>(2) DT1_2"x16"x15.5"</div>
      <img src="EquipmentPicture5.jpeg" />
    </div>
  );
};
