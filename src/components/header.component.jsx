import React from "react";
import { useState } from "react";

function Header() {
  const [header, setHeader] = useState("Feedback UI");
  return (
    <header>
      <div className="container">
        <h2>{header}</h2>
      </div>
    </header>
  );
}

export default Header;
