import React from "react";
import "./Preview.css";

const Preview = () => {
  return (
    <section className="Preview">
      <div className="Preview_wrapper">
        <div className="Preview-content">
          <h1>
            Сервис - ориентированный <br />
            системный интегратор
          </h1>
          <h2 className="Preview-h2">
            Мы создаем мир безграничных возможностей для развития бизнеса наших
            заказчиков, <br />
            используя самые передовые технологии и новаторские идеи
          </h2>
          <button className="Preview-button">Получить консультацию</button>
        </div>
      </div>
    </section>
  );
};

export default Preview;
