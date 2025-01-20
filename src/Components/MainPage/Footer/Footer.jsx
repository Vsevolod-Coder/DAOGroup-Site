import React from 'react'
import "./Footer.css"
import Logo from "../../../Assets/DAO-Group-original-white-logo.png.png"
import { Link } from 'react-router'
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { PiBuildingsBold } from "react-icons/pi";
import { TbPackages } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-top'>
        <div className='footer-wrapper'>
          <div className='footer-logo'>
            <img src={Logo} alt="Logo" className='logo'/>
            <p>Предоставляем широкий ассортимент услуг по разработке и внедрению всех видов инновационных технологий для вашего бизнеса.</p>
          </div>
          <div className='footer-contacts'>
              <div className='footer-contact-title'>Головной офис</div>
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
              <div className='work-hours-footer-block'>
                <CiClock1 className='watch'/>
                <p className='work-hours'>ПН-ПТ 9:00-18:00<br />СБ-ВС выходной</p>
              </div>
          </div>
          <div className='footer-navigation-container'>
            <div className='main-menu'>Меню разделов</div>
            <div className='footer-navigation'>
              <div className='company-footer-block'>
                <PiBuildingsBold className='company-marker' />
                <Link>О компании</Link>
              </div>
              <div className='services-footer-block'>
                <TbPackages className='services-marker' />
                <Link>Услуги</Link>
              </div>
              <div className='partners-footer-block'>
                <FaRegHandshake className='partners-marker' />
                <Link>Партнёры</Link>
              </div>
              <div className='contacts-footer-block'>
                <IoMdContact className='contacts-marker' />
                <Link>Контакты</Link>
              </div>
              <div className='support-footer-block'>
                <MdOutlineContactSupport className='support-marker' />
                <Link>Поддержка</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='footer-bottom'>
        <div className='footer-bottom-wrapper'>
          <div className='footer-copyright-block'>
            <div className='footer-copyrights'>DAO Group • Сервис ориентированный системный интегратор<br /><p> © 2018-2025 Все права защищены</p></div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
