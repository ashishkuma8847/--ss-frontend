import React from 'react';

const Button = ({ title, classname }) => {
  return (
    <button
      className={`bg-primaryred text-white rounded-[5px] py-[12px] px-[24px] text-[16px] sm:text-[18px] md:text-[20px] font-Poppins 
      ${classname}`}
    >
      {title}
    </button>
  );
};

export default Button;
