import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header-top_section">
          <div className="header-top_section_wrapper">
            <div className="address-block">
              <Link to="https://www.youtube.com/">
                Кыргызстан, г. Бишкек, пр. Чуй 147, офис 1
              </Link>
            </div>
            <div className="contact-container">
              <div className="contact-block">
                <p>info@daogroup.pro</p>
                <p>number</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
