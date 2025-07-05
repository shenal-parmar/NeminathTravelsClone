import { CarCard } from "./CarCard";
import { Video } from "./Video";
import { CarList } from "./CarList";
import { Testimonials } from "./Testimonials";
import { Services } from "./Services";
import { BookCar } from "./BookCar";
import { Benefits } from "./Benefits";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <Video/>
      <CarList/>
      <BookCar/>
      <Services/>
    <Testimonials/>
      {/* <div className="bg-white h-10 w-full"></div> */}

    </div>
  )
}
