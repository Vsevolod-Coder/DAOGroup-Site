import React, { useEffect, useState } from "react";
import "./Preview.css";
import axios from "axios";

const Preview = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/users`);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
          {data &&
            data.map((user) => {
              return <div>{user.name}</div>;
            })}
        </div>
      </div>
    </section>
  );
};

export default Preview;
