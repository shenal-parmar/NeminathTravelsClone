import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useEffect, useState } from "react";
import {TempleImageComp} from "./TempleImageComp"
import { CarBanner } from "./CarBanner";
import { PopularRoutesContext } from "./PopularRoutesContext";
import { CityDescription } from "./CityDescription";
import { Link } from "react-router";

export const PopularRoutes = () => {
  const [PopularCities, setPopularCities] = useState([]);
  const [PopularRoutes, setPopularRoutes] = useState([]);

  const FetchPopularCities = async () => {
    const res = await fetch(
      "https://alliedge.com/neminath/api/populercity/names"
    );
    const value = await res.json();
    console.log(value);

    setPopularCities(value);
  };
  const FetchPopularRoutes = async () => {
    const res = await fetch("https://alliedge.com/neminath/api/populercity");
    const value = await res.json();
    console.log("PopularRoutes",value);

    setPopularRoutes(value);
  };
  useEffect(() => {
    FetchPopularCities();
    FetchPopularRoutes();
  }, []);
  // const cityDescription = PopularRoutes

  return (
    <div>
      <div className="image relative  w-full">
        <TempleImageComp
          img="https://res.cloudinary.com/dagd6qt6p/image/upload/v1735630771/neminathimg1_axl1q9.jpg"
          statement="Popular Routes"
        />
      </div>
      <h1 className="text-6xl text-center m-5">Popular Cities</h1>
      <div className="cities grid grid-cols-4">
        {PopularCities.map((p) => { 
          return (
            <Link className="bg-pink-100 rounded-full m-5 text-center h-10 overflow-hidden" to={`/cityDescription/${p._id}`} key={p._id}>
              {p.Populercity }
            </Link>
          );
        })}
      </div>
      <h1 className="text-6xl text-center m-5">Popular Routes</h1>
      <div className="routes grid grid-cols-3 p-5 ">
        {PopularRoutes.map((place) => {
          return (
            <div className=" m-5" key={place._id}>
              <p className="text-3xl"  >{place.Populercity}</p>

              {place.routes.map((rt) => { 
                return (
                   <p className=" text-xl p-2.5"  key={rt._id}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-orange-500 "
                    />
                    {"Taxi from " + place.Populercity + " to " + rt}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      <CarBanner/>
      {/* <PopularRoutesContext.Provider value={PopularRoutes}>
        <CityDescription></CityDescription>
      </PopularRoutesContext.Provider> */}
    </div>
  );
};
