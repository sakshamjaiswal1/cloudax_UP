import React from "react";
import logo from "../../assets/logo.svg";
import down from "../../assets/down.svg";
import uploads from '../../assets/uploads.svg'
import { AiOutlineArrowLeft } from "react-icons/ai";
const IdVerified = () => {
  return (
    <div className="flex bg-[#F5F5F5] ">
    <div className="flex-[3.3_3.3_0]  hidden lg:inline-block">
      <img src={logo} className="h-max w-[100%]" alt="" />
    </div>

    <div className="flex-[4_4_0] flex flex-col  pl-[40px] lg:pl-[100px] pt-[35px] lg:pt-[69px]">
      <AiOutlineArrowLeft  className="text-[#000000] text-[26px] lg:text-[30px] mb-[24px]" />
      <p className="text-[#000000] mb-[20px] font-[700] lg:text-[39.02px] leading-[51px] text-[24px]">
        ID Verification
      </p>
      <label
        htmlFor=""
        className="text-[#000000] pr-[150px] text-mn lg:text-[21px] font-[400] py-[30px]"
      >
        Please provide a valid government issued ID for verification.
      </label>
      <button className="bg-[#F2F2F2] rounded-[20px] text-[#000000] flex items-center justify-between lg:text-[22px] font-[400] px-[20px] lg:w-[476px] lg:h-[82px] h-[60px] w-[308px]  mb-[20px] text-mn">
        Select ID Type <img src={down} alt="" className="h-[20px] w-[20px]" />
      </button>
      <button className="bg-[#F2F2F2] rounded-[20px] text-[#000000] flex items-center justify-between  lg:text-[22px] font-[400] px-[20px] lg:w-[476px] lg:h-[82px] h-[60px] w-[308px] mb-[20px] text-mn">
      288473r81342323
      </button>
        <div className="relative">
          <label
            htmlFor="prefix"
            className="absolute z-[1]  top-[17px] right-[50px] lg:top-[20px] lg:right-[275px] bg-[#F5F5F5] text-[16px] font-[400] "
          >
            <img src={uploads} alt="" className="h-[29px] w-[29px] lg:h-[47px] lg:w-[47px]"/>
          </label>
          <input
            type="text"
            value={'IMG-3242-535.JPG'}
            className="px-[6px] text-[#494949]  border-[1.29px] border-[#000000] rounded-[23px]  pl-[30px] lg:w-[476px] lg:h-[82px] h-[60px] w-[308px] relative bg-inherit lg:text-[21px] font-[400] text-mn"
          />
        </div>
        <div className="relative mt-[25px]">
          <label
            htmlFor="prefix"
            className="absolute z-[1] top-[17px] right-[50px] lg:top-[20px] lg:right-[275px] bg-[#F5F5F5] text-[16px] font-[400] "
          >
            <img src={uploads} alt="" className="h-[29px] w-[29px] lg:h-[47px] lg:w-[47px]"/>
          </label>
          <input
            type="text"
            value={'IMG-3242-535.JPG'}
            className="px-[6px] text-[#494949]  border-[1.29px] border-[#000000] rounded-[23px] pl-[30px]  relative bg-inherit lg:text-[21px] font-[400] lg:w-[476px] lg:h-[82px] h-[60px] w-[308px] text-mn"
          />
        </div>
        <p className="text-[10px] lg:text-[16px] font-[400] text-[#000000] mt-[30px] mb-[15px]">All images should be in JPEG or PNG fotmat.</p>
      <button className="bg-[#28A9F1] text-[#ffffff]  rounded-[38px] flex items-center lg:text-[25px] h-[60px] w-[308px] font-[400] justify-center px-[20px] lg:w-[476px] lg:h-[82px] text-[16px] mb-[40px]">
        Verify
      </button>
    </div>
  </div>
  )
}

export default IdVerified