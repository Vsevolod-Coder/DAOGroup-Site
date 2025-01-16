import React from "react";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header-top_section">
            <div className="header-top_section_wrapper">
                <div className="address-block">
                    <Link to="https://2gis.kg/bishkek/firm/70000001053024609">Кыргызстан, г. Бишкек, пр. Чуй 147, офис 1</Link>
                </div>
                <div className="contacts-container">
                    <Link to='mailto:info@daogroup.pro'>info@daogroup.pro</Link>
                    <p>+996 (312) 900 200</p>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;