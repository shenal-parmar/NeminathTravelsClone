import React from "react";

export const Video = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        src="https://res.cloudinary.com/dagd6qt6p/video/upload/v1735622347/Neminath_Videos_eiyd34.mp4"
        controls={false}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  w-3xl justify-items-center leading-loose">
        <h2 className="text-2xl">Your Reliable Travel partner in Gujarat</h2>{" "}
        <br />
        <span className="text-6xl text-orange-700">OneWay</span>
        <span className="text-6xl">& </span>
        <span className="text-6xl text-orange-700">RoundTrips</span>
        <span className="text-6xl">Cabs!!</span>
        <br /> <br />
        <h5>
          Your Trusted Cab Partner in Ahmedabad – Neminath Travels, Always There
          for You
        </h5>
        <div>
          <button className="bg-orange-700 m-5 rounded-sm w-50 h-13 text-white text-xl">
            Book by Whatsapp{" "}
          </button>
          <button className=" bg-amber-50 text-black hover:bg-orange-700 m-5 rounded-sm w-50 h-13  hover:text-white text-xl">
            Book by Call{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
