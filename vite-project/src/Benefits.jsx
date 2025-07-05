import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Benefits = () => {
  return (
    <div className="flex  ">
      <div className="box1  max-w-2xl p-10">
        <h3 className="font-bold text-2xl m-3">Why Neminath Travels?</h3>
        <h1 className=" text-5xl mb-5">
          Reliable Taxi Service for All Your Travel Needs
        </h1>
        <div className="text-gray-500 text-80">
          Neminath Travels operates on the core belief that “Guest is King.” As
          a pioneer in Ahmedabad, Gujarat’s automobile rental market, we pride
          ourselves on delivering exceptional car rental services at highly
          competitive rates. Neminath Travels is a trusted provider of a wide
          range of vehicles, driven by experienced and professional drivers who
          are available 24/7 to serve our esteemed customers. Whether for
          corporate travelers or families, we are dedicated to offering the best
          travel experience in and around Gujarat, ensuring comfort, safety, and
          reliability on every journey.
        </div>
        <button className="bg-orange-600 h-15 w-50 rounded-sm m-5 text-white font-bold">
          Book By Whatsapp <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="box2 p-10">
        <div className="flex p-10 ">
          <img src="src/assets/car.png" alt="" className="h-20 w-20" />
          <div className="flex flex-col">
            <div className="font-bold text-2xl">Comfortable Rides</div>
            <p className="text-gray-500">
              Enjoy a smooth, comfortable ride with our well-maintained and
              clean cabs.
            </p>
          </div>
        </div>
        <div className="flex p-10">
          <img src="src/assets/dollarImg.png" alt="" className="h-20 w-20" />
          <div className="flex flex-col">
            <div className="font-bold text-2xl">Affordable Prices</div>
            <p className="text-gray-500">
              Experience budget-friendly travel with competitive rates for
              oneway and roundtrip journeys.
            </p>
          </div>
        </div>
        <div className="flex p-10">
          <img src="src/assets/car2Img.png" alt="" className="h-20 w-20" />
          <div className="flex flex-col">
            <div className="font-bold text-2xl">Easy Booking</div>
            <p className="text-gray-500">
              Book your cab effortlessly online or via phone, with quick
              confirmations and no hassles.
            </p>
          </div>
        </div>
      </div>
      </div>
  );
};
