import React, { useEffect, useState } from "react";
import { TempleImageComp } from "./TempleImageComp";

export const Gallery = () => {
  const [gallery, setgallery] = useState([]);
  const [load, setload] = useState(false);
  const FetchGallery = async () => {
    const res = await fetch("https://alliedge.com/neminath/api/gallery");
    const value = await res.json();
    // console.log(value);
    setgallery(value);
    setload(true);
  };

  useEffect(() => {
    FetchGallery();
  }, []);

  //   console.log("car1",car4);

  return (
    <div>
      <TempleImageComp
        img="https://res.cloudinary.com/dagd6qt6p/image/upload/v1735630771/neminathimg1_axl1q9.jpg"
        statement="Gallery"
      />

      <div className="flex flex-wrap justify-around">
        {gallery.map((car) => (
          <span className="" key={car._id}>
            {car.carImages.length > 0 && (
              <img
                src={car.carImages[0]}
                alt={car.carName}
                className="w-55 h-60 bg-gray-100  rounded-3xl border-2 border-gray-300"
              />
            )}
          </span>
        ))}

        <span className="grid grid-cols-5">
          {load &&
            gallery[3].carImages.map((c) => (
              <img
                src={c}
                className="w-55 h-60 bg-gray-100  rounded-3xl border-2 border-gray-300"
              ></img>
            ))}
        </span>
      </div>
    </div>
  );
};
