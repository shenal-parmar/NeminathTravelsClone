import { faEnvelope, faEnvelopeOpenText, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


export const ContactUs = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl text-center">Need additional information?</h1>
      <div className="grid grid-cols-3 text-center m-5 p-2 text-xl ">
        
        <div>   
          <FontAwesomeIcon icon={faPhone} className="text" /> +91 79846 06025
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="text font-bold" />
          akshatshah2021@gmail.com
        </div>
        <Link to="3" className="m-5 text-xl ">
        <FontAwesomeIcon icon={faLocationDot} className="text-orange-500 " />
          Nagindas Chambers, 404/A, Ashram Rd, opp. AUDA Office, Sattar Taluka
          Society, Usmanpura, Ahmedabad, Gujarat 380013
        </Link>
      </div>
      <div className=" grid grid-cols-2 gap-3 w-[42rem] mx-auto">
            <input type="text" name="name" placeholder="Enter Your Name" className="textbox"/>
            <input type="email" name="email" placeholder="Enter Your Email" className="textbox "/>
            <input type="text" name="mobile" placeholder="Enter Your Mobile" className="col-span-2 bg-[#e9e7e7] w-[40rem] mb-4 h-[50px]"/>
            <input type="text" name="msg" placeholder="Write Here..." className="col-span-2 bg-[#e9e7e7] w-[40rem] mb-4 h-[50px]"/>
            <button className="bg-orange-600 text-center h-15 text-2xl text-white font-bold col-span-2 w-[40rem]"> <FontAwesomeIcon icon={faEnvelopeOpenText} /> Send Message</button>
      </div>

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14685.617706690196!2d72.55110870361416!3d23.04563007519903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830d4d31edd9%3A0xf6f068457ea9832d!2sNeminath%20Travels!5e0!3m2!1sen!2sin!4v1750056526711!5m2!1sen!2sin" className="w-full mt-10" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};
