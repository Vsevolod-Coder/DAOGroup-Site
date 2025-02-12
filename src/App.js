import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ServicesDetails from "./Pages/ServicesDetails/ServicesDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Contacts" element={<ContactsPage />} />
      <Route path="Services" element={<ServicesPage />} />
      <Route path="/Services/:slug" element={<ServicesDetails />} />
    </Routes>
  );
}

export default App;
