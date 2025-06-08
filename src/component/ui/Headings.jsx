import React from "react";

function Headings({text}) {
  return (
    <div className="flex gap-3 items-center text-base">
      <div className="w-[20px] h-[40px] bg-primaryred rounded"></div>
      <h4 className="text-primaryred text-lg md:text-[24px] font-Poppins font-medium">
        {text}
      </h4>
    </div>
  );
}

export default Headings;
