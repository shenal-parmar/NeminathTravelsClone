// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const BookCar = () => {
  return (
    <div className="relative  object-cover flex flex-col">
      <img
        src="https://res.cloudinary.com/dagd6qt6p/image/upload/v1735906721/Polo-Forest-Banner1_pw8o5s.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className=" bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-6xl">
          <h1 className="text-2xl font-bold">Book Your Car Now</h1>
          <form action="">
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col ">
                <label className="text-xl h-11">
                  <i class="fas fa-car text-orange-500 text-30 m-2"></i>Select
                  Your Car Type *
                </label>
                <select className="bg-gray-100 h-12 border-1 border-gray-400">
                  {/* <option placeholder="Select the car type" className="text-gray-800" ></option> */}
                  <option value="sedan">Sedan</option>
                  <option value="suv">Suv</option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label className="text-xl">
                  <i class="fas fa-car text-orange-500 text-30 m-2"></i> Pick-up
                  *
                </label>
                <input
                  type="text"
                  placeholder="Enter Pick-up Location"
                  className="border-1 p-4 border-gray-400 bg-gray-100 h-12 mt-3 "
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-xl">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-orange-500 "
                  />
                  Drop off*
                </label>
                <input
                  type="text"
                  placeholder="Enter Drop-off Location"
                  className="border-1 p-4 border-gray-400 bg-gray-100 h-12 mt-3 "
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-xl">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-orange-500"
                  />
                  Pick up *
                </label>
                <input
                  type="text"
                  placeholder="Enter Pick-up Date"
                  className=" border-gray-400 border-1 p-4 bg-gray-100 h-12 mt-3 "
                />
              </div>
              <div className="flex flex-col p-10 ">
                <button className="bg-orange-600 h-15">Book Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// <div className="max-w-[1] border-2">
//           <label className="text-xl">
//             <i class="fas fa-car text-orange-500 text-30 m-2"></i>Select Your
//             Car Type *
//           </label>
//           <input type="text" className="border-1 bg-gray-200  " />
//         </div>
//         <label className="text-xl">
//           {" "}
//           <FontAwesomeIcon icon={faLocationDot} />
//           Pick up
//           <span className="text-orange-500">*</span>
//         </label>
//         <input type="text" />
//         <label className="text-xl">
//           <FontAwesomeIcon icon={faLocationDot} />
//           Drop off
//           <span className="text-orange-500">*</span>
//         </label>
//         <input type="text" />
//         <label className="text-xl">
//           <i class="fas fa-car text-orange-500 text-30 m-2"></i>Pick up
//           <span className="text-orange-500">*</span>
//         </label>
//         <input type="date" />
