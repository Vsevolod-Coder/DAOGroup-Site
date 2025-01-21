<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
=======
import logo from './Assets/DAO-Group-original-logo-192x192-icon.png.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './Pages/MainPage/MainPage';


function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
>>>>>>> 7072a8524dad2fdaf7354c6141427224480f0416
    </Routes>
  );
};

export default App;
