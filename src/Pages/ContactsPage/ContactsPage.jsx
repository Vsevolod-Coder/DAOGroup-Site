import React, { useState } from 'react';
import "./ContactsPage.css";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import Layout from "../../Layout/Layout";
import { Link } from 'react-router';
import MapComponent from '../../Components/Map/Map';

const ContactsPage = () => {
  const [visibleCard, setVisibleCard] = useState(null);

  const showCard = (key) => setVisibleCard(key);
  const hideCard = (key) => {
    if (visibleCard === key) setVisibleCard(null);
  };

  return (
    <Layout>
      <section className='contacts'>
        <div className='contacts-content'>
          <div className='contacts-content-wrapper'>
            <div className='contacts-title'>
              <h2>Связаться с нами</h2>
            </div>
            <div className='contacts-cards'>
              <div className="email-card card">
                <div 
                  className='email-icon-block icon-block' 
                  onMouseEnter={() => showCard("email")} 
                  onMouseLeave={() => hideCard("email")}
                >
                  <CiMail className='email-icon contacts-icon' />
                </div>
                <div 
                  className='card-text' 
                  onMouseEnter={() => showCard("email")}
                  onMouseLeave={() => hideCard("email")}
                  style={{ visibility: visibleCard === "email" ? "visible" : "hidden" }}
                >
                  <Link to='mailto:info@daogroup.pro'>info@daogroup.pro</Link>
                </div>
              </div>
              <div className="phone-card card">
                <div 
                  className='phone-icon-block icon-block' 
                  onMouseEnter={() => showCard("phone")} 
                  onMouseLeave={() => hideCard("phone")}
                >
                  <FaPhoneAlt className='phone-icon contacts-icon'/>
                </div>
                <div 
                  className='card-text' 
                  onMouseEnter={() => showCard("phone")}
                  onMouseLeave={() => hideCard("phone")}
                  style={{ visibility: visibleCard === "phone" ? "visible" : "hidden" }}
                >
                  <Link to="tel:+996312900200">+996 (312) 900 200</Link>
                </div>
              </div>
              <div className="schedule-card card">
                <div 
                  className='schedule-icon-block icon-block' 
                  onMouseEnter={() => showCard("schedule")} 
                  onMouseLeave={() => hideCard("schedule")}
                >
                  <CiClock1 className='schedule-icon contacts-icon'/>
                </div>
                <div 
                  className='card-text' 
                  onMouseEnter={() => showCard("schedule")}
                  onMouseLeave={() => hideCard("schedule")}
                  style={{ visibility: visibleCard === "schedule" ? "visible" : "hidden" }}
                >
                  <p className='schedule-text'>ПН-ПТ 9:00-18:00 <br/> СБ-ВС выходной</p>
                </div>
              </div>
              <div className="employee-card card">
                <div 
                  className='employee-icon-block icon-block' 
                  onMouseEnter={() => showCard("employee")} 
                  onMouseLeave={() => hideCard("employee")}
                >
                  <IoMdContact className='employee-icon contacts-icon'/>
                </div>
                <div 
                  className='card-text' 
                  onMouseEnter={() => showCard("employee")}
                  onMouseLeave={() => hideCard("employee")}
                  style={{ visibility: visibleCard === "employee" ? "visible" : "hidden" }}
                >
                  <p className='employee-text'>Контакты наших <Link className='employee-page'>сотрудников</Link></p>
                </div>
              </div>
            </div>
            <div className='map-block'>
              <MapComponent />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactsPage;
