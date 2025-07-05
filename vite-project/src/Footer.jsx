
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
export const Footer = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12">
          <div className="col-span-4">
            <img
              src="https://neminathtravels.com/static/media/logo.f957c585d9b766ee117b.png"
              alt="logo"
              className="w-40 h-25 m-5"
            />
            <FontAwesomeIcon icon={faLocationDot} className="text-orange-500 " />
            <Link to="3" className="m-5 text-xl">
              Nagindas Chambers, 404/A, Ashram Rd, opp. AUDA Office, Sattar Taluka
              Society, Usmanpura, Ahmedabad, Gujarat 380013
            </Link>
            <div><FontAwesomeIcon icon={faPhone} className="text" /> +91 79846 06025</div>
            <div><FontAwesomeIcon icon={faEnvelope} className="text" />akshatshah2021@gmail.com</div>
          </div>
          <div className="col-span-3">
            <h1 className="font-bold text-3xl p-3">Services</h1>
            <p className="text">Home </p>
            <p className="text">Popular Routes</p>
            <p className="text">Available Cars</p>
            <p className="text">Contact us</p>
          </div>
          <div className="col-span-2">
            <h1 className="font-bold text-3xl p-3">Company</h1>
            <p className="text">About Us </p>
            <p className="text"> Terms & Condition</p>
            <p className="text">Privacy Policy</p>
          </div>
          <div className="col-span-3">
            <h1 className="font-bold text-3xl p-3">About Neminath travels</h1>
            <p className="text">
              We would love to make you one of our happy customers at Neminath
              travels. Contact us now to discuss your trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
