import React, { useEffect, useState } from "react";
import "./ContentMainPage.css";
import axios from "axios";
import { Link } from "react-router-dom"; // Обратите внимание на корректный импорт

const ContentMainPage = () => {
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

  console.log(data);

  return (
    <section className="content">
      <div className="content-wrapper">
        {data &&
          data.map((item, index) => {
            return (
              <Link
                to={`/Services/${item.id}`}
                key={item.id}
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
    </section>
  );
};

export default ContentMainPage;
