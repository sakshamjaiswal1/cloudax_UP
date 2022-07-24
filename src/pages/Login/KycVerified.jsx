import React from "react";
import logo from "../../assets/logo.svg";
import verified from "../../assets/verified.svg";
import right from '../../assets/right.svg'

import { AiOutlineArrowLeft } from "react-icons/ai";

const KycVerified = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center">
    <div className="flex-[3_3_0]">
      <img src={logo} className="h-max w-[100%]" alt="" />
    </div>

    <div className="flex-[4_4_0] flex flex-col  pl-[100px] pt-[40px]">
      <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
      <p className="text-[#000000] font-[700] text-[39.02px] leading-[51px]">
        KYC Verification
      </p>

      <label
        htmlFor=""
        className="text-[#000000] pr-[70px] text-[21px] py-[30px]"
      >
        To ensure the security of your account, please complete the following.
      </label>
      <button className="bg-[#DBFFC9] flex justify-between items-center rounded-[20px] text-[#000000] w-[476px] text-[21px] h-[82px] mt-[13px] mb-[20px] px-[20px]">
        Go to Email{" "}
        <img src={verified} alt="" className="h-[27px] w-[27px]" />
      </button>

      <button className="bg-[#DBFFC9] rounded-[20px] text-[#000000] flex items-center justify-between px-[20px] text-[21px] w-[476px] h-[82px]  mb-[20px]">
        Verify Government Issued ID  <img src={verified} alt="" className="h-[27px] w-[27px]" />
      </button>
      <button className="bg-[#F2F2F2] rounded-[20px] text-[#000000] flex items-center justify-between px-[20px] text-[21px] w-[476px] h-[82px]  mb-[20px]">
        Facial Verification <img src={right} alt="" className="h-[20px] w-[20px]" />
      </button>
      <button className="bg-[#F2F2F2] rounded-[20px] text-[#000000] flex items-center justify-center px-[20px] w-[476px] text-[21px] h-[82px]  mb-[20px]">
       Skip
      </button>
    </div>
  </div>
  )
}

export default KycVerified