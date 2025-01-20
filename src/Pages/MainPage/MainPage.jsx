import React from "react";
import Layout from "../../Layout/Layout";
import Preview from "../../Components/MainPage/Preview/Preview";
import Slider from "../../Components/MainPage/Slider/Slider";
import "./MainPage.css"

const MainPage = () => {
  return (
    <Layout>
      <Preview />
        <Slider />
    </Layout>
  );
};

export default MainPage;
