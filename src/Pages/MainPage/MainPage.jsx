import React from "react";
import "./MainPage.css"
import Layout from "../../Layout/Layout";
import Preview from "../../Components/MainPage/Preview/Preview";
import ContentMainPage from "../../Components/ContentMainPage/ContentMainPage";

const MainPage = () => {
  return (
    <Layout>
      <Preview />
      <ContentMainPage />
    </Layout>
  );
};

export default MainPage;
