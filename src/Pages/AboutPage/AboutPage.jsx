import React from "react";
import "./AboutPage.css";
import Layout from "../../Layout/Layout";
import Content from "../../Components/AboutPageComponents/Content";
// import Employees from "../../Components/AboutPageComponents/Employees/Employees";

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <Content />
        {/* <Employees /> */}
      </div>
    </Layout>
  );
};

export default AboutPage;
