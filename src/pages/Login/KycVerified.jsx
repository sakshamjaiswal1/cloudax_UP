import React from "react";
import logo from "../../assets/logo.svg";
import verified from "../../assets/verified.svg";
import right from '../../assets/right.svg'

import { AiOutlineArrowLeft } from "react-icons/ai";

const KycVerified = () => {
  return (
    <div className="flex lg:bg-[#F5F5F5] ip:bg-[white] ">
    <div className="flex-[3.3_3.3_0]  hidden lg:inline-block">
      <img src={logo} className="h-max w-[100%]" alt="" />
    </div>

    <div className="flex-[4_4_0] flex flex-col  pl-[40px] lg:pl-[100px] pt-[35px] lg:pt-[69px]">
      <AiOutlineArrowLeft className="text-[#000000] text-[26px] lg:text-[30px] mb-[24px]" />
      <p className="text-[#000000] mb-[20px] font-[700] lg:text-[39.02px] leading-[51px] text-[24px]">
        KYC verification
      </p>
      <label
        htmlFor=""
        className="text-[#000000] lg:pr-[150px] pr-[20px] text-mn lg:text-[21px] font-[400] py-[30px]"
      >
        To ensure the security of your account, please complete the following.
      </label>
      <button className="bg-[#DBFFC9] flex justify-between items-center rounded-[20px] text-[#000000]  lg:text-[21px]  mt-[13px] mb-[20px] px-[20px] lg:w-[476px] lg:h-[82px] h-[60px] w-[308px] text-mn">
        Verify Phone Number <img src={verified} alt=""  className=" h-[14px] w-[14px] lg:h-[20px] lg:w-[20px]"/>
      </button>
      <button className="bg-[#DBFFC9] rounded-[20px] text-[#000000] flex items-center justify-between px-[20px]   mb-[20px] lg:text-[21px] lg:w-[476px] lg:h-[82px] h-[60px] w-[308px] text-mn">
          Verify Government Issued ID{" "}
          <img src={right} alt=""  className=" h-[14px] w-[14px] lg:h-[20px] lg:w-[20px]"/>
        </button>
      <button className="bg-[#F2F2F2] rounded-[20px] text-[#000000] flex items-center justify-between px-[20px]   mb-[20px] lg:text-[21px] lg:w-[476px] lg:h-[82px] h-[60px] w-[308px] text-mn">
          Facial Verification{" "}
          <img src={right} alt="" className=" h-[14px] w-[14px] lg:h-[20px] lg:w-[20px]" />
        </button>
        <button className="bg-[#F2F2F2] rounded-[38px] text-[#121212] flex items-center lg:text-[25px] h-[60px] w-[308px] font-[400] justify-center px-[20px] lg:w-[476px] lg:h-[82px] text-[16px] mb-[40px]">
          Skip
        </button>
      </div>
    </div>
  )
}

export default KycVerified