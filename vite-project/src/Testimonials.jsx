import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
export const Testimonials = () => {
  const [testimonials, settestimonials] = useState([]);
  const fetchTestimony = async () => {
    const res = await fetch("https://alliedge.com/neminath/api/testimonials");
    const value = await res.json();
    console.log(value);

    settestimonials(value);
  };
  useEffect(() => {
    fetchTestimony();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl m-5 ">Client's Testimonials</h1>
        <h1 className="text-gray-500  text-xl max-w-4xl mx-auto text-center">
          Discover the positive impact we've made on our clients by reading
          through their testimonials.
        </h1>
      </div>
    
     
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true, dynamicBullets: true }}
        // loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => {
          return (
            //   <div className="h-50 w-80 rounded-sm bg-gray-200 m-5 p-3">
            //     <div className="flex p-5">
            //       <img src={t.image} className="h-20 w-20 " />
            //       <div className="flex-col">
            //         <div className="text-xl">{t.name}</div>
            //         <div className="text-20 text-orange-500">{t.city}</div>
            //       </div>
            //     </div>
            //     <div className="max-w-2xs overflow-hidden">{t.description}</div>
            //   </div>
            <SwiperSlide key={t._id}>
              <div
                key={t._id}
                className="bg-gray-100 rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-20 w-20 object-cover rounded-full border-2 border-orange-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t.name}
                    </h3>
                    <p className="text-sm text-orange-500">{t.city}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm">{t.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="max-w-6xl mx-auto py-10 px-4 pb-24"> Increased bottom padding</div> */}

    </div>
  );
};
