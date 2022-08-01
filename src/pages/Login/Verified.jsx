import React from "react";
import logo from "../../assets/logo.svg";
import face from "../../assets/face.svg";
import congrats from '../../assets/congrats.png'
import successalert from '../../assets/successalert.svg'
import { AiOutlineArrowLeft } from "react-icons/ai";

const Verified = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center">
      <div className="lg:flex-[3_3_0] hidden lg:inline-block ">
        <img src={logo} className="h-max w-[100%]" alt="" />
      </div>

      <div className="lg:flex-[4_4_0] flex flex-col  pl-[50px] lg:pl-[100px] pt-[40px]">
        <div className="flex justify-between mt-[100px] ml-[40px] lg:ml-[100px]">
          <img src={congrats} alt="" className="lg:h-[267px] h-[185px] w-[185px] lg:w-[267px] bg-[#F5F5F5]" />
        
        </div>
        <p className="flex justify-start my-[30px] items-center text-[#39BE0A] lg:text-[32px] font-[400] pl-[60px] lg:pl-[100px] text-[20px]">You are verified <img src={successalert} className='h-[21px] w-[21px] lg:h-[33px]  lg:w-[33px] mx-[10px]' alt="" /></p>
        <p className="text-[#252525] lg:text-[20px] text-[13px] lg:pl-[50px] lg:pr-[200px]">
        Thank you for verifying your identity. You are set to make transactions from your dashboard.
        </p>
        <button className="bg-[#28A9F1] rounded-[38px] text-[#ffffff] flex items-center justify-center px-[20px] lg:w-[476px] lg:h-[82px]  mt-[40px] mb-[20px] h-[53px] w-[308px] text-[16px] lg:text-[25px]">
        Proceed to Cloudax
        </button>
      </div>
    </div>
  );
};

export default Verified;
