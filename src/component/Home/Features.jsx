import React from "react";
import Core from "../../animations/core";
import Button from "../ui/Button";
import { Hammer, ShieldCheck, Truck } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./Home.css";
import Headings from "../ui/Headings";
const Features = () => {
  const data = [
    {
      title: "Durable Stone Material",
      description:
        "Premium-grade red, sandstone, and marble options for long-lasting strength and aesthetics.",
      icon: <ShieldCheck size={36} className="text-red-600" />,
    },
    {
      title: "Pan India Delivery",
      description:
        "We deliver across all states with proper packaging and size customization on request.",
      icon: <Truck size={36} className="text-red-600" />,
    },
    {
      title: "Custom Cutting & Design",
      description:
        "Chaukhat sizes available for all types of doors and designs — fully handcrafted by experts.",
      icon: <Hammer size={36} className="text-red-600" />,
    },
  ];
  return (
    <>
      <section>
        <main className="md:mt-[80px] mt-[50px]">
          <div className="container ">
            <div className="flex justify-between w-full md:flex-row items-center gap-5 flex-col-reverse">
              <div className=" max-w-[510px]  w-full flex flex-col gap-4 md:gap-8 items-start">
                <div>
                  <Core />
                </div>
                <p className="md:text-2xl text-lg font-normal ">
                  Shri Shyam Stone - Crafted to Frame Every Entrance with
                  Elegance
                </p>
                <Button title={"View Products"} />
              </div>
              <div className="relative ">
                <img
                  className="relative md:max-w-[500px]  max-w-[300px] w-full h-7max-w-[300px] md:h-[500px] rounded-[10px] z-20 heroSecimage"
                  src="assets/images/product.png"
                  alt="product"
                />
                <img
                  className="absolute  top-2/4 left-2/4 -translate-x-2/4 md:translate-y-[-58%] translate-y-[-65%] block z-0 md:min-w-[680px] min-w-[380px] w-full h-[370px] md:h-[680px]"
                  src="assets/images/HeroBg.png"
                  alt="bg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[30px] pt-[50px] pb-[80px]">
              {/* Section Title */}
              <Headings text="Why Choose Shri Shyam Stone?" />

              {/* Desktop Grid */}
              <div className="hidden lg:grid grid-cols-3 gap-[30px]">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="card border border-primaryred flex flex-col justify-center items-center gap-[10px] p-4 text-center"
                  >
                    {item.icon}
                    <h4 className="text-[20px] font-Poppins">{item.title}</h4>
                    <p className="text-[15px] font-Poppins">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile Swiper */}
              <div className="lg:hidden">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1.1}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  loop={true}
                >
                  {data.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="p-6 border mt-2 border-primaryred flex flex-col justify-center items-center gap-[10px]  text-center rounded-xl">
                        {item.icon}
                        <h4 className="text-[20px] font-Poppins">
                          {item.title}
                        </h4>
                        <p className="text-[15px] font-Poppins">
                          {item.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Features;
