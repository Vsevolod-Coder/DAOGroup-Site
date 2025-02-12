import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Хук для получения параметра из URL
import axios from "axios";
import Layout from "../../Layout/Layout";
import "./ServicesDetails.css";
import SideBar from "../../Components/SIdeBar/SideBar";

const ServiceDetails = () => {
  const { slug } = useParams(); // Получаем slug из URL
  const [service, setService] = useState(null);

  const fetchServiceDetails = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/services/${slug}`
      );
      setService(data);
      console.log(data);
    } catch (error) {
      console.error("Ошибка при получении сервиса:", error);
    }
  };

  useEffect(() => {
    fetchServiceDetails(); // Запрос данных
  }, [slug]); // Делаем запрос при изменении slug

  if (!service) {
    return <div>Loading...</div>; // Пока данные загружаются
  }

  return (
    <Layout>
      <div className="service-details">
        <div
          className="services-details-banner_block"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.backimg})`,
          }}
        >
          <h2>{service.title}</h2>
        </div>
        <div className="services-details-wrapper">
          <div className="services-details_description">
            <p>{service.description}</p>
          </div>
          <SideBar className="sidebar-component" />
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
