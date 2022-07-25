import React from "react";
import logo from "../../assets/logo.svg";
import face from "../../assets/face.svg";
import congrats from '../../assets/congrats.png'
import successalert from '../../assets/successalert.svg'
import { AiOutlineArrowLeft } from "react-icons/ai";

const Verified = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center">
      <div className="flex-[3_3_0]">
        <img src={logo} className="h-max w-[100%]" alt="" />
      </div>

      <div className="flex-[4_4_0] flex flex-col  pl-[100px] pt-[40px]">
        <div className="flex justify-between mt-[100px] ml-[100px]">
          <img src={congrats} alt="" className="h-[267px] w-[267px] bg-[#F5F5F5]" />
        
        </div>
        <p className="flex justify-start my-[30px] items-center text-[#39BE0A] text-[32px] font-[400] pl-[100px]">You are verified <img src={successalert} className='h-[33px] w-[33px] mx-[10px]' alt="" /></p>
        <p className="text-[#252525] pl-[50px] pr-[200px]">
        Thank you for verifying your identity. You are set to make transactions from your dashboard.
        </p>
        <button className="bg-[#28A9F1] rounded-[38px] text-[#000000] flex items-center justify-center px-[20px] w-[476px] h-[82px]  mt-[40px] mb-[20px]">
        Proceed to Cloudax
        </button>
      </div>
    </div>
  );
};

export default Verified;
