import React, { useState, useEffect } from "react";
import "./Usage.css";
function Usage() {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("yellow");
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    setBoom(false)
     const id=setTimeout(() => {
      setBoom(true)
    }, value*1000);
    return(()=>{
         clearTimeout(id)
    })
  },[value]);

  return (
    <div className="usage">
      <div className="usage-item" style={{ background: color }}>
        <button
          onClick={() => {
            setValue((state) => {
              return state + 1;
            });
          }}
        >
          Increment
        </button>
        <label>{value}</label>
        <button
          onClick={() => {
            setValue((state) => {
              return state - 1;
            });
          }}
        >
          Decrement
        </button>
      </div>
      <button
        onClick={() => {
          setColor((color) => {
            return (color = "green");
          });
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          setColor((color) => {
            return (color = "blue");
          });
        }}
      >
        blue
      </button>
      {
      boom && value ? (
        <div className="boom">
          <span>Boom</span>
        </div>
      ) : null
      }
    </div>
  );
}

export default Usage;
