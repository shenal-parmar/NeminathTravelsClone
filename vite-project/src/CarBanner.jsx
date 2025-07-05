import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhone } from "@fortawesome/free-solid-svg-icons";

export const CarBanner = () => {
  return (
   <div className="carBannerSection relative">
        <img
          src="/src/assets/carBanner.png"
          alt=""
          className="opacity-80 relative"
        />
        <div className="absolute inset-0 flex items-center justify-between p-8">
          <h2 className="text-white text-xl font-bold    bg-opacity-50 p-4 rounded">
            Book a car by getting in touch with us
          </h2>
          <button className="border-red-400 bg-black rounded-full w-35 text-white ">
            <FontAwesomeIcon icon={faPhone} />
            988237327
          </button>
        </div>
      </div>
  )
}
