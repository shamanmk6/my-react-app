import React, { useState } from "react";
import "./label.css";
// function Label(){
//     return <span> Label 1</span>
// }

function Label(props) {
  const [showToolTip, setShowToolTip] = useState(false);

  const style = props.isActive ? { background: "blue" } : { background: "red" };

  const handleMouseEnter = () => {
    showToolTip(true);
  };
  const handleMouseLeave = () => {
    showToolTip(false);
  };

  return (
    <div>
      <span
        onClick={() => {
          props.onAction(props.isActive ? "active" : "non-active");
        }}
        className="list-label-item"
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.isActive ? "Active" : "Non-Active"}
      </span>
      <label >This is {props.isActive?"Active":"Non-Active"}</label>
    </div>
  );
}
export default Label;
