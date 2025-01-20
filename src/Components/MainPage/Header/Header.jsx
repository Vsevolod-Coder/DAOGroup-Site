import React from "react";
import "./Header.css";
import { Link } from "react-router";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../../../Assets/DAO-Group-original-black-logo.png.png"
import Cock from "../../../Assets/dancing-cock.gif"


const Header = () => {
  return (
    <header className="header">
      <section className="header_wrapper">
        <div className="header-top_section">
            <div className="header-top_section_wrapper">
                <div className="address-block">
                    <SlLocationPin className="map-marker"/>
                    <Link to="https://2gis.kg/bishkek/firm/70000001053024609" target="blank">Кыргызстан, г. Бишкек, пр. Чуй 147, офис 1</Link>
                </div>
                <div className="contacts-container">
                    <div className="mail-block">
                        <CiMail className="mail"/>
                        <Link to='mailto:info@daogroup.pro'>info@daogroup.pro</Link>
                    </div>
                    <div className="phone-block">
                        <FaPhoneAlt className="phone"/>
                        <Link to="tel:+996312900200">+996 (312) 900 200</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-block">
            <div className="logo-block">
                <Link to="/"><img className="logo" src={Logo} alt="Logo" /></Link>
            </div>
            <div className="navigation-container">
                <nav className="nav">
                    <Link>О компании</Link>
                    <Link>Услуги</Link>
                    <Link>Партнёры</Link>
                    <Link>Контакты</Link>
                    <Link>Поддержка</Link>
                </nav>
            </div>
        </div>
      </section>
      <div className="secret">
        <div className="secret-message">It's DAGroup baby</div>
        <img className="secret-message" src={Cock} alt="Roach" />
        <audio src=""></audio>
      </div>
    </header>
  );
};

export default Header;