import React from "react";
import "./header.css";
import NavLinks from "../Navigation/Nav";
import Logo from "../Logo/Logo";
import AccountBtn from "../AccountButton/AccBtn";

function Header() {
  return (
    <div className="header__container">
      <div className="header__top">
        <Logo />
        <div className="header__accIcon">
          <AccountBtn />
        </div>
      </div>
      <span className="header__span">
        Discover and book beauty & wellness professionals near you
      </span>
      <div className="header__search">
        <input
          className="search__input"
          type="text"
          placeholder="Book your services..."
        />
      </div>
      <NavLinks />
    </div>
  );
}

export default Header;
