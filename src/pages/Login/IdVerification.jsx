import React from "react";
import logo from "../../assets/logo.svg";
import down from "../../assets/down.svg";
import upload from '../../assets/upload.svg'
import { AiOutlineArrowLeft } from "react-icons/ai";
const IdVerification = () => {
  return (
    <div className="flex bg-[#F5F5F5] ">
      <div className="flex-[3.3_3.3_0]">
        <img src={logo} className="h-max w-[100%]" alt="" />
      </div>

      <div className="flex-[4_4_0] flex flex-col  pl-[100px] pt-[40px]">
        <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
        <p className="text-[#000000] font-[700] text-[39.02px] leading-[51px]">
          ID verification
        </p>

        <label
          htmlFor=""
          className="text-[#000000] pr-[150px] text-[21px] font-[400] py-[30px]"
        >
          Please provide a valid government issued ID for verification.
        </label>

        <button className="bg-[#F2F2F2] rounded-[20px] text-[#000000] flex items-center justify-between text-[22px] font-[400] px-[20px] w-[476px] h-[82px]  mb-[20px]">
          Select Id Type <img src={down} alt="" className="h-[20px] w-[20px]" />
        </button>
        <button className="bg-[#F2F2F2] rounded-[20px] text-[#000000] flex items-center justify-between  text-[22px] font-[400] px-[20px] w-[476px] h-[82px]  mb-[20px]">
          Id Number
        </button>
        <div className="relative">
          <label
            htmlFor="prefix"
            className="absolute z-[1] top-[20px] right-[275px] bg-[#F5F5F5] text-[16px] font-[400] "
          >
            <img src={upload} alt="" className="h-[47px] w-[47px]"/>
          </label>
          <input
            type="text"
            value={'Upload Front of ID'}
            className="px-[6px] text-[#494949]  border-[1.29px] border-[#000000] rounded-[23px] w-[480px] pl-[30px] h-[92px] relative bg-inherit text-[21px] font-[400]"
          />
        </div>
        <div className="relative mt-[25px]">
          <label
            htmlFor="prefix"
            className="absolute z-[1] top-[20px] right-[275px] bg-[#F5F5F5] text-[16px] font-[400] "
          >
            <img src={upload} alt="" className="h-[47px] w-[47px]"/>
          </label>
          <input
            type="text"
            value={'Upload Back of ID'}
            className="px-[6px] text-[#494949]  border-[1.29px] border-[#000000] rounded-[23px] w-[480px] pl-[30px] h-[92px] relative bg-inherit text-[21px] font-[400]"
          />
        </div>
        <p className="text-[16px] font-[400] text-[#000000] mt-[30px] mb-[15px]">All images should be in JPEG or PNG fotmat.</p>
        <button className="bg-[#F2F2F2] rounded-[38px] text-[#121212] flex items-center text-[25px] font-[400] justify-center px-[20px] w-[476px] h-[82px]  mb-[40px]">
          Verify
        </button>
      </div>
    </div>
  );
};

export default IdVerification;
