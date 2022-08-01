import React from "react";
import logo from "../../assets/logo.svg";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Activate = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center">
    <div className="flex-[3_3_0]">
      <img src={logo} className="h-max w-[100%]" alt="" />
    </div>

    <div className="flex-[4_4_0] flex flex-col  pl-[100px] pt-[90px]">
    <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
      <p className="text-[#000000] font-[700] text-[39.02px] leading-[51px]">
        Activate your account
      </p>
   
      <label htmlFor="" className="text-[#393939] text-[21px] py-[30px]">Enter the 6-digit OTP sent to your phone number</label>
      <input
        type="text"
        className="px-[20px]  border-[1.29px] border-[#000000] rounded-[38px] w-[478px] text-[21px] h-[83px]  relative bg-inherit"
      />
         <p className="text-[#393939] text-[21px] font-[400] pl-[70px] mt-[23px]">Didn’t get the code? <a href=""className="text-[#28A9F1] underline" >Resend OTP </a></p>
      <button className="bg-[#28A9F1] rounded-[38px] text-[25px] text-[#F9F9FB] w-[476px] h-[82px] mt-[73px] mb-[30px]" >Confirm</button>
   
    </div>
  </div>
  )
}

export default Activate