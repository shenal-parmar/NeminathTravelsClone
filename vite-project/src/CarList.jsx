import React, { useEffect, useState } from "react";
import { CarCard } from "./CarCard";
import { CarDetail } from "./CarDetail";
import { VehicleFleet } from "./VehicleFleet";

export const CarList = () => {
  const [CarData, setCarData] = useState([])
 
  // const carsInfo = [
  //   {
  //     route: "Ahmedabad-Vadodara",
  //     trip: "One-Way",
  //     type: [
  //       {
  //         desc: "sedan",
  //         price: 9999,
  //       },
  //       {
  //         desc: "Suv",
  //         price: 8000,
  //       },
  //     ],
  //   },
  //   {
  //     route: "Ahmedabad-Rajkot",
  //     trip: "two-Way",
  //     type: [
  //       {
  //         desc: "sedan",
  //         price: 9999,
  //       },
  //       {
  //         desc: "Suv",
  //         price: 8000,
  //       },
  //     ],
  //   },
  //   {
  //     route: "Ahmedabad-Surat",
  //     trip: "One-Way",
  //     type: [
  //       {
  //         desc: "sedan",
  //         price: 9999,
  //       },
  //       {
  //         desc: "Suv",
  //         price: 8000,
  //       },
  //     ],
  //   },
  // ];
  const apiFetchDetails=async()=>{
    const res = await fetch("https://alliedge.com/neminath/api/ourfavRoutes")
    const value = await res.json()
    // console.log("res::",value);
    
    setCarData(value)
  }
  
useEffect(()=>{
  apiFetchDetails()

},[])
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-5xl m-5 ">Our Favourite Routes!</h1>
      <h1 className="text-gray-500  text-xl max-w-4xl mx-auto text-center">
        We provide Oneway and Round Trip Taxi Service in All over India!
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {CarData.map((car) => {
          return <CarCard carData={car}></CarCard>;
        })}
      </div>
     <CarDetail/>

    </div>
  );
};
