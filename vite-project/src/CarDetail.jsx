import React, { useEffect, useState } from "react";
import { VehicleFleet } from "./VehicleFleet";

export const CarDetail = () => {
  const [carDetail, setcarDetail] = useState([]);
  // console.log("CarDetail",props);
  const FetchCarDetail = async () => {
    const res = await fetch("https://alliedge.com/neminath/api/ourvehicale");
    const value = await res.json();
    // console.log(value);
    setcarDetail(value);
  };
  useEffect(() => {
    FetchCarDetail();
  }, []);
  // const { carName, carImage, Textfiled1, Textfiled2, Textfiled3, Textfiled4 } =
  //   props.carDetail;
  // console.log("CArdetail", carDetail);
  const handleWhatsAppClick = () => {
  const phoneNumber = "919876543210"; 
  const message = encodeURIComponent("Hi, I want to book a taxi.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
   window.open(url, "_blank");
};
  return (
   <div>
      <VehicleFleet />
     <div className="grid grid-cols-3">
      {carDetail.map((c) => (
        <div className=" bg-gray-50 border-1 border-slate-700  p-2.5 m-5  text-gray-900 text-center">
          <img className="p-5" src={c.carImage} alt="" />
          <h1 className="text-3xl">{c.carName}</h1>
          <h1 className="">
            <i className="fas fa-car text-gray-400 text-30 m-2"></i>
            {c.Textfiled1}
          </h1>
          <h1>
            <i class="fas fa-car text-gray-400 text-30 m-2"></i>
            {c.Textfiled2}
          </h1>
          <h1>
            <i class="fas fa-car text-gray-400 text-30 m-2"></i>
            {c.Textfiled3}
          </h1>
          <h1>
            <i class="fas fa-car text-gray-400 text-30 m-2"></i>
            {c.Textfiled4}
          </h1>
          <button className="bg-orange-600 text-white w-40 h-15 m-7 rounded-sm">
            Book Now
          </button>
        </div>
      ))}
    </div>
   </div>
  );
};
