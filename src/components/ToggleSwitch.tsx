import React, {useState} from "react";
export default function ToggleSwitch() {

  return (
    <label className="switch">
      <input type="checkbox" />
      <div className="slider">
        <span>PT</span>
        <span>ENG</span>
      </div>
    </label>
    
  );
}
