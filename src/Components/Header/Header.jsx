import React from "react";
import "./Header.css";
import { Link } from "react-router";
import Logo from "../../Assets/DAO-Group-original-black-logo.png.png";
import Cock from "../../Assets/dancing-cock.gif";

const Header = () => {
  return (
    <header className="header">
      <section className="header_wrapper">
        <div className="header-line"></div>
        <div className="nav-block">
          <div className="logo-block">
            <Link to="/">
              <img className="logo" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="navigation-container">
            <nav className="nav">
              <Link to="/About">О компании</Link>
              <Link to="/Services">Услуги</Link>
              <Link>Партнёры</Link>
              <Link to="/Contacts">Контакты</Link>
              <Link>Поддержка</Link>
            </nav>
          </div>
        </div>
      </section>
      <div className="secret">
        <div className="secret-message">It's DAGroup baby</div>
        <img className="secret-message" src={Cock} alt="Roach" />
      </div>
    </header>
  );
};

export default Header;