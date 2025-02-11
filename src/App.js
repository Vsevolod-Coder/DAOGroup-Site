import logo from './Assets/DAO-Group-original-logo-192x192-icon.png.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactsPage from './Pages/ContactsPage/ContactsPage';



function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path="/About" element={<AboutPage />}/>
      <Route path='/Contacts' element={<ContactsPage />}/>
    </Routes>
  );
};

export default App;
