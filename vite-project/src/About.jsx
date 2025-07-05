import React from "react";
import { Services } from "./Services";
import { TempleImageComp } from "./TempleImageComp";
export const About = () => {
  return (
    <div className="">
      {/* ----------------------- */}
      <div className="image relative  w-full">
        <TempleImageComp
          img="https://res.cloudinary.com/dagd6qt6p/image/upload/v1735630771/neminathimg1_axl1q9.jpg"
          statement="About us"
        />
      </div>
      <div className="flex p-10 justify-between bg-gray-100">
        <div className="left ">
          <h2 className="text-4xl ">About Us</h2>
          <h2 className="text-5xl m-3">We are Neminath Travels</h2>
          <div className="text-gray-500 text-xl max-w-2xl">
            Neminath Travels, based in the heart of Ahmedabad, Gujarat, is
            dedicated to providing a seamless and enjoyable travel experience.
            We cater to both short city trips and long distance journeys,
            ensuring comfort and reliability every step of the way. Our fleet of
            well maintained vehicles and experienced drivers are available 24/7
            to meet your travel needs. Booking a ride with us is quick and
            hassle free through our simple three-step process. Whether you need
            a car for business meetings, family outings, or special occasions,
            we offer flexible options tailored to your requirements. At Neminath
            Travels, customer satisfaction is our top priority, and we go the
            extra mile to deliver exceptional service at affordable rates.
            Choose us for punctuality, safety, and a stress-free travel
            experience because your journey deserves the best!
          </div>
        </div>
        <div className="right">
          <img
            src="./src/assets/neminathGod.gif"
            alt=""
            className="w-100 m-5"
          />
        </div>
      </div>
      <Services />
    </div>
  );
};
