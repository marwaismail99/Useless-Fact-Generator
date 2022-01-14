import React from "react";

function Button({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>Get New Fact</button>
    </div>
  );
}

export default Button;
