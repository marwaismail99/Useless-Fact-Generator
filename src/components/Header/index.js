import React from "react";

function Header({ factOTD }) {
  return (
    <div>
      <h1>Useless Fact Generator</h1>
      <p>Fact of the Day:</p>
      <p>{factOTD.text}</p>
      <p>
        -<a href={factOTD.source_url}>{factOTD.source}</a>
      </p>
    </div>
  );
}

export default Header;
