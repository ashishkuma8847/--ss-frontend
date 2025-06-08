import React from 'react'

const Button = ({title,classname}) => {
  return (
    <>
    <button className={`${classname} bg-primaryred text-white rounded-[5px] py-[15px] px-[30px] font-Poppins text-[20px]  `}>{title}</button>
    </>
  )
}

export default Button