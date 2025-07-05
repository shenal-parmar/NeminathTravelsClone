import { useContext, useEffect, useState } from "react";
import { PopularRoutesContext } from "./PopularRoutesContext";
import { useParams } from "react-router";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CityDescription = () => {
  const id = useParams().id; //if only done useParams then will return object
  console.log(id);
  const [data, setdata] = useState();
  const FetchPopularRoutes = async () => {
    try {
      const res = await fetch(
        `https://alliedge.com/neminath/api/populercity/${id}`
      );
      const value = await res.json();
      setdata(value);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    FetchPopularRoutes();
  }, []);

  return (
    <div className="p-10">
      {console.log("PopularRoutes", data)}
      <p className="font-bold m-5 text-3xl">{data?.Populercity} </p>
      <div className="grid grid-cols-2 gap-2 m-10">
        <img
          src={data?.images}
          alt=""
          className="h-120 w-180 p-5 rounded-4xl"
        />

        <div className="text-3xl ">
          {data?.Title}
          <p className=" text-2xl mt-2.5">{data?.Description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6  bg-gray-100 w-full  ">
        <div className="text-3xl ">
          {data?.Title1}
          <p className=" text-2xl mt-2.5">
            <FontAwesomeIcon icon={faCircleCheck} /> {data?.Textfiled1}
          </p>
          <p className=" text-2xl mt-2.5">
            <FontAwesomeIcon icon={faCircleCheck} /> {data?.Textfiled2}
          </p>
          <p className=" text-2xl mt-2.5">
            <FontAwesomeIcon icon={faCircleCheck} /> {data?.Textfiled3}
          </p>
          <p className=" text-2xl mt-2.5">
            <FontAwesomeIcon icon={faCircleCheck} /> {data?.Textfiled4}
          </p>
        </div>
        <img src={data?.image1} alt="" className="h-100 w-150 rounded-4xl" />
      </div>
    </div>
  );
};
