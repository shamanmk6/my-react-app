import React, { useEffect } from "react";
import Label from "./label";
import "./ListItem.css";
function ListItem(props) {
  const {

    title,
    descr,
    isActive,
    onDelete,
    onLabelClick

  } = props;
  console.log(props);

  useEffect(()=>{
    
  })

  return (
    <div className="list-item">
      <hr />
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete}>Delete</label>
      </div>
      <div className="list-descr">
        {descr}
        </div>
      <div className="list-label">
        <Label
          isActive={isActive} onAction={onLabelClick}
        />
      </div>
    </div>
  );
}
export default ListItem;
