import "./assets/services.css";
import { motion } from "framer-motion";
export const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, backgroundColor: "pink" }}
      animate={{ opacity: 20, y: 0, backgroundColor: "#F1E7E7" }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
      //      initial={{ backgroundColor: "#ec4899" }}
      // animate={{ backgroundColor: "#3b82f6" }}
      // transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      className="p-6 text-white text-2xl font-bold rounded-xl"
    >
      {/* <h1 className="text-3xl font-bold">Framer Motion Animation</h1> */}
      <div className="grid grid-cols-3">
        <div className="box">
          <img
            className="custom-image"
            src="https://neminathtravels.com/static/media/location.746a974813df719101fb.jpg"
            alt=""
          />{" "}
          <p className="text-2xl">Live GPS Tracking</p>
          <p className="text">
            Real-time taxi location tracking ensures your safety and security,
            keeping you informed and confident throughout your journey."
          </p>
        </div>
        <div className="box">
          <img
            className="custom-image"
            src="https://neminathtravels.com/static/media/support.63046b74775012fe7ea7.png"
            alt=""
          />
          <p className="text-2xl">24x7 Available</p>
          <p className="text">
            Our 24/7 taxi services are always available, making it easy to book
            and travel whenever you need a ride
          </p>
        </div>
        <div className="box">
          <img
            className="custom-image"
            src="https://neminathtravels.com/static/media/driver.9393c7ef226c3c54f858.png"
            alt=""
          />
          <p className="text-2xl">Experienced Drivers</p>
          <p className="text">
            Experienced drivers providing safe, reliable, and comfortable rides,
            ensuring you reach your destination with confidence and peace of
            mind.
          </p>
        </div>
        <div className="box">
          <img
            className="custom-image"
            src="https://neminathtravels.com/static/media/corporation.132bbed9a0b982692659.png"
            alt=""
          />
          <p className="text-2xl">Corporate Rental</p>
          <p className="text">
            Professional corporate rental services offering reliable, flexible,
            and cost-effective transportation solutions for businesses and
            employees.
          </p>
        </div>
        <div className="box">
          <img
            className="custom-image"
            src="https://neminathtravels.com/static/media/transport.000c9ec61d7b2490684c.png"
            alt=""
          />
          <p className="text-2xl">Outstation Services</p>
          <p className="text">
            Reliable outstation services offering comfortable, safe, and
            convenient travel for long-distance journeys to various
            destinations.
          </p>
        </div>
        <div className="box">
          <img
            className="custom-image"
            src="https://neminathtravels.com/static/media/airport.24ba758cc5f675fdf523.png"
            alt=""
          />
          <p className="text-2xl">Airport Services</p>
          <p className="text">
            Efficient airport services providing timely, comfortable, and
            reliable transportation to and from the airport, ensuring a smooth
            journey.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
