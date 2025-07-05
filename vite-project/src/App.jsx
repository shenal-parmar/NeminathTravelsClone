import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"; // Make sure Tailwind is imported here
import { Header } from "./Header";
import { CarCard } from "./CarCard";
import { Video } from "./Video";
import { CarList } from "./CarList";
import { Testimonials } from "./Testimonials";
import { Services } from "./Services";
import { BookCar } from "./BookCar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Footer } from "./Footer";
import { Route, Routes } from "react-router";
import { Home } from "./Home";
import { About } from "./About";
import { PopularRoutes } from "./PopularRoutes";
import { CarDetail } from "./CarDetail";
import { AvailableCars } from "./AvailableCars";
import { Gallery } from "./Gallery";
import { ContactUs } from "./ContactUs";
import { CityDescription } from "./CityDescription";

// https://neminathtravels.com/
function App() {
  
  return (
    
    <div>
      <Header/>
      {/* <Home/> */}
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/show" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/availableCars" element={<AvailableCars/>}></Route>
        <Route path="/popularRoutes" element={<PopularRoutes/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/cityDescription/:id" element={<CityDescription/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
