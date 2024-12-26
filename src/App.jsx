import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Earphones from "./Components/ContactUs";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";


function App() {
  return (
    <div>
      <Navbar
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Contact"
          element={<Earphones  />}
        />
        <Route
          path="/aboutUs"
          element={<AboutUs />}
        />
        <Route path="/services" element={<Services  />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;