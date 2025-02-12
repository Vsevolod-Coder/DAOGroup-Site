import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import axios from "axios";
import "./ServicesPage.css";
import { Link } from "react-router";
import SideBar from "../../Components/SIdeBar/SideBar";

const ServicesPage = () => {
  const [data, setData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/services");
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  return (
    <Layout>
      <div className="services">
        <div className="services-title">
          <h2>Предостовляемый спектр услуг</h2>
        </div>
        <div className="services_wrapper">
          <div className="services-container">
            <div className="services-block">
              {data &&
                data.map((item, index) => {
                  return (
                    <Link
                      to={`/Services/${item.slug}`}
                      className="services-card"
                      onMouseEnter={() => {
                        setTimeout(() => {
                          setHoveredIndex(index);
                        }, 50);
                      }}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.backimg})`,
                      }}
                    >
                      <div className="services-title-block">
                        <h2 className="services-card-title">{item.title}</h2>
                      </div>
                      <div
                        className="services-description-block"
                        style={{
                          display: hoveredIndex === index ? "block" : "none",
                          paddingBottom: "20%",
                        }}
                      >
                        <p className="services-card-description">
                          {truncateText(item.description, 15)}
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="services-sidebar-block">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
