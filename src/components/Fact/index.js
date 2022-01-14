import "./Fact.css";
import React from "react";

function Fact({ fact }) {
  return (
    <div className="fact">
      <h2>{fact.text}</h2>
      <p>
        -<a href={fact.source_url}>{fact.source}</a>
      </p>
    </div>
  );
}

export default Fact;
