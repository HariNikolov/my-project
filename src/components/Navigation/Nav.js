import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="nav__links">
      <Link to="hair">Hair Salon</Link>
      <Link to="barber">Barbershop</Link>
      <Link to="beauty">Nail Salon</Link>
      <Link to="beauty">Beauty Salon</Link>
      <Link to="beauty">Eyebrows & Lashes</Link>
      <Link to="massage">Massage</Link>
      <Link to="beauty">Makeup Artist</Link>
    </div>
  );
}

export default NavLinks;
