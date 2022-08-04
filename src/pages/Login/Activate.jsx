import React from "react";
import logo from "../../assets/logo.svg";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Activate = () => {
  return (
    <div className="flex lg:bg-[#F5F5F5] ip:bg-[white]  justify-center">
    <div className=" flex-[3_3_0]  lg:block ip:hidden">
      <img src={logo} className="h-max w-[100%] " alt="" />
    </div>

    <div className="flex-[4_4_0] flex flex-col  lg:pl-[100px] pl-[40px]  lg:pt-[90px] ip:pt-[40px]">
    <AiOutlineArrowLeft className="text-[#000000] text-[30px] lg:mb-[24px] ip:mb-[16px]" />
      <p className="text-[#000000] lg:text-[39.02px]  ip:text-[24px] font-[700]  leading-[51px]">
        Activate your account
      </p>
   
      <label htmlFor="" className="text-[##00000] lg-text-[21px] text-[14px] lg:py-[30px] ip:py-[10px]">Enter the 6-digit OTP sent to your phone number</label>
      <input
        type="text"
        className="lg:px-[20px] ip:px-[15spx]   border-[1.29px] border-[#000000] rounded-[38px] lg:py-[0px]  ip:my-[25px] lg:w-[478px] ip:w-[330px] text-[21px] lg:h-[83px]  ip:h-[63px] relative bg-inherit"
      />
         <p className="text-[#000000] lg:text-[21px] text-[14px] lg:font-[400] font-[400] lg:pl-[70px] pl-[10px] lg:mt-[23px]  mt-[0px]">Didn’t get the code? <a href=""className="text-[#28A9F1] underline" >Resend OTP </a></p>
      <button className="bg-[#28A9F1] rounded-[38px] lg:text-[25px] text-[16px]  text-[#F9F9FB] lg:w-[476px]  ip:w-[308px] lg:h-[82px] ip:h-[53px] lg:mt-[73px]  ip:mt-[53px] mb-[30px]" >Confirm</button>
   
    </div>
  </div>
  )
}

export default Activate