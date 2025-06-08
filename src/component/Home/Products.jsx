import React from "react";
import Core from "../../animations/core";
import Button from "../ui/Button";
import { Hammer, ShieldCheck, Truck } from "lucide-react";
import "./Home.css"
const Products = () => {
    const data = [{
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
        <main className="mt-[80px]">
          <div className="container ">
            <div className="flex justify-between w-full">
              <div className=" max-w-[510px]  w-full flex flex-col gap-[30px] items-start">
                <div>
                  <Core />
                </div>
                <p className="text-[25px] font-normal ">
                  Shri Shyam Stone - Crafted to Frame Every Entrance with
                  Elegance
                </p>
                <Button title={"View Products"} />
              </div>
              <div className="relative ">
                <img className="relative w-[500px] h-[500px] rounded-[10px] z-50 image" src="assets/images/product.png" alt="product" />
              <img className="absolute item-c block z-0 min-w-[700px] w-full h-[700px]" src="assets/images/HeroBg.png" alt="bg" />
              </div>
            </div>
            <div className="grid  grid-cols-3 gap-[30px] pt-[50px] pb-[80px]">
                {
                    data.map((item,index)=>(

                        <div className=" card flex flex-col justify-center items-center gap-[10px]">
                            {item.icon}
                            <h4 className="text-[20px] font-Poppins">{item.title}</h4>
                            <p className="w-[200px] text-center text-[15px] font-Poppins">{item.description}</p>
                        </div>
                    ))
                }
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Products;
