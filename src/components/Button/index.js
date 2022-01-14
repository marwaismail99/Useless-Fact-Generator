import "./Button.css";
import React from "react";

function Button({ handleClick }) {
  return (
    <div className="new-fact-button">
      <button
        onClick={() => {
          handleClick();
        }}
      >
        New Fact
      </button>
    </div>
  );
}

export default Button;
