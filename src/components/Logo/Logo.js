import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo__div">
      <Link to="home">Book24</Link>
    </div>
  );
}

export default Logo;
