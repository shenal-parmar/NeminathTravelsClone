import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";


export const Header = () => {
  return (
    <div>
       <nav className="bg-white text-gray-800 w-full shadow-md">
      <div className="w-full flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold"><img src="https://neminathtravels.com/static/media/logo.f957c585d9b766ee117b.png" className="w-35"/></div>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/home" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/popularRoutes" className="hover:text-blue-600">Popular Routes</Link></li>
          <li><Link to="/availableCars" className="hover:text-blue-600">Available Cars</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-600">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
          <li><button className="hover:text-blue-600 bg-orange-600  rounded-full  w-50 h-10 ">
             <span className="bg-white  rounded-full">
              <FontAwesomeIcon icon={faPhone} className="text rounded-full w-[60px] h-10" /> 
             </span>
            7986598723</button></li>
        </ul>
        <button className="md:hidden text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
    </div>
  );
};
