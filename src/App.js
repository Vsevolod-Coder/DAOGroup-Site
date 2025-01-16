import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default App;
