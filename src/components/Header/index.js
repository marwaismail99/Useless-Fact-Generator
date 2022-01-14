import "./Header.css";
import React from "react";

function Header({ factOTD }) {
  return (
    <div className="header">
      <div>
        <h1>
          <span className="italic smaller">Useless</span> Fact Generator
        </h1>
      </div>
      <div className="header-fotd">
        <p className="fotd">
          <span className="italic">Useless</span> fact of the Day:
        </p>
        <p className="fotd-fact">{factOTD.text}</p>
        <p>
          -<a href={factOTD.source_url}>{factOTD.source}</a>
        </p>
      </div>
    </div>
  );
}

export default Header;
