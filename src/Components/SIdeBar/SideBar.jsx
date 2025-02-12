import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom"; // Используйте react-router-dom, если работаете с React Router

const SideBar = () => {
  const [menu, setMenu] = useState(null); // Массив для отслеживания состояния каждой кнопки

  const toggleMenu = (index) => {
    setMenu(menu === index ? null : index); // Если меню для этой кнопки уже открыто, то закрыть, иначе открыть
  };

  const buttons = [
    { title: "Системная интеграция", link: "/system-integration" },
    { title: "IT инфраструктура", link: "/it-infrastructure" },
    { title: "COD", link: "/cod" },
    { title: "Техническая поддержка", link: "/tech-support" },
    { title: "Разработка ПО", link: "/software-development" },
    { title: "Миграция в облако", link: "/cloud-migration" },
    { title: "Технические услуги", link: "/tech-service" },
    { title: "Аутсорсинг", link: "/outsourcing" },
    { title: "Бизнес-системы", link: "/business-system" },
    { title: "Технический аудит", link: "/tech-audit" },
    { title: "Аналитика", link: "/analytics" },
    { title: "Образование", link: "/education" },
    { title: "Кибербезопасность", link: "/cybersecurity" },
  ];

  return (
    <div className="SideBar">
      <div className="SideBar-wrapper">
        <h2>Решения</h2>
        <hr />
        {buttons.map((button, index) => (
          <div key={index}>
            <button
              className="sidebar-menu-container"
              onClick={() => toggleMenu(index)}
            >
              {button.title}
            </button>
            <div style={{ display: menu === index ? "block" : "none" }} className="sidebar-link">
              <Link to={button.link}> {button.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;