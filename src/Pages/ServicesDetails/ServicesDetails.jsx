import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Хук для получения параметра из URL
import axios from "axios";
import Layout from "../../Layout/Layout";

const ServiceDetails = () => {
  const { id } = useParams(); // Получаем id из URL
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/services/${id}` // Делаем запрос с id
        );
        setService(response.data);
        console.log(response.data); // Проверяем, что приходит в ответ
      } catch (error) {
        console.error("Ошибка при получении сервиса:", error);
      }
    };
    fetchServiceDetails();
  }, [id]); // Запрос обновляется при изменении id

  if (!service) {
    return <div>Loading...</div>; // Пока данные загружаются
  }

  return (
    <Layout>
      <div className="service-details">
        {/* Здесь отображаем информацию о сервисе */}
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
