import React from "react";
import logo from "../../assets/logo.png";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Mobile = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center ">
    <div className="lg:flex-[3_3_0]">
      <img src={logo} className="lg:inline-block hidden h-max w-[100%]" alt="" />
    </div>

    <div className="lg:flex-[4_4_0] flex flex-col pl-[30px]  lg:pl-[100px] pt-[90px]">
    <AiOutlineArrowLeft className="text-[#000000] text-[26px] lg:text-[30px] mb-[24px]" />
      <p className="text-[#000000] font-[700] text-mti lg:text-[39.02px] leading-[51px]">
        Enter Your Phone Number
      </p  >
      <p className="text-[#000000]">Type in your phone number to complete setting </p>
      <p className="text-[#000000]" >up your account.</p>
      <div className="mt-[50px] flex ">
      <div className="relative">
            <label
              htmlFor="prefix"
              className="absolute z-[1] top-[-10px] left-[15px] bg-[#F5F5F5]  lg:text-[16px] text-[13px] font-[400] px-[10px]"
            >
              Prefix
            </label>
         
            <select name="" className="select-wrapper px-[6px]  border-[1.29px] border-[#000000] rounded-[23px] w-[90px]  lg:w-[137px] pl-[30px] h-[59px] lg:h-[92px] relative bg-inherit text-mn lg:text-[28px] font-[400] select-wrapper" id="">
              <option value="+1">+1</option>
            </select>
          </div>
        <div className="relative mx-[19px]">
          <label
            htmlFor="prefix"
            
            className="absolute z-[1] top-[-10px] left-[15px] bg-[#F5F5F5] text-[12px] lg:text-[16px] font-[400] px-[10px] "
            
          >
            Mobile Number
          </label>
          <input
            type="text"
            placeholder="1238908732"
            className="  border-[1.29px] border-[#000000] rounded-[23px] lg:w-[332px] lg:h-[92px] h-[59px] w-[180px] relative bg-inherit  text-[#6F6F6F] font-[400] text-[28px] px-[20px]"
          />
        </div>
      </div>
    
      <button className="bg-[#28A9F1] rounded-[38px] text-[#F9F9FB]  lg:w-[489px] h-[60px] w-[308px] lg:h-[96px] text-btn lg:text-[25px] font-[400] mt-[43px] mb-[30px]" >Receive OTP</button>
    
    </div>
  </div>
  )
}

export default Mobile