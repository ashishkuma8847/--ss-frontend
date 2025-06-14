import React, { useRef } from "react";
import Button from "../component/ui/Button";
import "./style.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const products = [
  {
    name: "Granite",
    price: "₹120.00",
    image: "/assets/images/granite.jpg",
  },
  {
    name: "Wooden white stone",
    price: "₹90.00",
    image: "/assets/images/woodstone.jpg",
  },
  {
    name: "Stone door frames and window frames",
    price: "₹60.00",
    image: "/assets/images/doorframe.jpg",
  },
];
const Products = () => {
  const swiperRef = useRef();
  return (
    <section className="bg-[#fdfcf9] min-h-screen py-16 px-6 md:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-Poppins text-primaryred uppercase">
          Our Products
        </h2>
      </div>
<div className="flex gap-2 items-end h-full  justify-end">
                      {/* <button
                        className={`flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300`}
                        onClick={() => swiperRef.current?.slidePrev()}
                      >
                        <img
                          src={"/assets/svg/swiperlefticon.svg"}
                          alt="left"
                        />
                        
                      </button>
                      <button
                        className=" flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                        onClick={() => swiperRef.current?.slideNext()}
                      >
                        <img
                          src={"/assets/svg/swiperrighticon.svg"}
                          alt="right"
                        />
                      </button> */}
                    </div>
      {/* Product Cards Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
         {/* <Swiper
              slidesPerView={2}
              loop={true}
              spaceBetween={10}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                375: {
                  slidesPerView: 1.5,
                },
                640: {
                  slidesPerView: 2,
                },
                800:{
                  slidesPerView: 2.5,

                },
                1024: {
                  slidesPerView: 3,
                },
                1200:{
                  slidesPerView:4,
                }
              }}
                className="mySwiper"
              > */}
              {products.map((product, index) => ( 
                <SwiperSlide>
          <div
            key={index}
            className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg overflow-hidden text-center p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold font-Poppins text-primaryred mb-1">
              {product.name}
            </h3>
            <p className="text-md font-medium text-gray-800">{product.price}</p>
          </div>
          </SwiperSlide>
        ))}
        {/* </Swiper> */}
       
      </div>

      {/* CTA Button */}
      <div className="mt-14 text-center">
        <Button title={"VIEW PRODUCTS"} />
      </div>
    </section>
  );
};

export default Products;
