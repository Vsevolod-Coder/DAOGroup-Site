import React from "react";
import Layout from "../../Layout/Layout";
<<<<<<< HEAD

const MainPage = () => {
  return <Layout></Layout>;
=======
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
>>>>>>> 7072a8524dad2fdaf7354c6141427224480f0416
};

export default MainPage;
