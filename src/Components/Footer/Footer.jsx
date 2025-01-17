import React from 'react'
import "./Footer.css"
import Logo from "../../Assets/DAO-Group-original-white-logo.png.png"
import { Link } from 'react-router'
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-logo'>
            <img src={Logo} alt="Logo" className='logo'/>
        </div>
        <div className='footer-contacts'>
            <div className='address-footer-block'>
                <SlLocationPin className='map-marker' />
                <Link className='address-footer' to="https://2gis.kg/bishkek/firm/70000001053024609" target="blank">Кыргызстан, г. Бишкек, пр. Чуй 147, офис 1</Link>
            </div>
            <div className='mail-footer-block'>
                <CiMail className="mail"/>
                <Link className='mail-footer' to='mailto:info@daogroup.pro'>info@daogroup.pro</Link>
            </div>
            <div className='phone-footer-block'>
                <FaPhoneAlt className="phone"/>
                <Link className='phone-footer' to="tel:+996312900200">+996 (312) 900 200</Link>
            </div>
        </div>
        <div className='footer-navigation-container'>
            <div className='footer-navigation'>
                <Link>О компании</Link>
                <Link>Услуги</Link>
                <Link>Партнёры</Link>
                <Link>Контакты</Link>
                <Link>Поддержка</Link>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
