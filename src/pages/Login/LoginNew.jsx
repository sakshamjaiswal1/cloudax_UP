import React from "react";
import logo from "../../assets/logo.png";
import visible from '../../assets/visible.svg'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './select.css'

const LoginNew = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center items-center">
      <div className="flex-[3_3_0]">
        <img src={logo} className="h-max w-[100%]" alt="" />
      </div>

      <div className="flex-[4_4_0] flex flex-col  pl-[100px] ">
      <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
        <p className="text-[#000000] mb-[20px] font-[700] text-[39.02px] leading-[51px]">
          Login to Cloudax
        </p>
        <div className="flex flex-col relative">
      <label htmlFor="" className="text-[#393939] font-[400] text-[21px] py-[10px]">E-mail Address or Phone Number</label>
      <input
        type="text"
        className="px-[6px]  pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] w-[486px] h-[85px] relative bg-inherit  text-[#6F6F6F] text-[24px] font-[400]"
      />
   
      </div>
        <div className="flex flex-col relative">
      <label htmlFor="" className="text-[#393939]  font-[400] text-[21px] py-[10px]">Password</label>
      <input
        type="text"
        className="px-[6px]  pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] w-[486px] h-[85px] relative bg-inherit  text-[#6F6F6F] text-[24px] font-[400]"
      />
      <img src={visible} className="h-[22px] w-[30px] relative bottom-[55px] left-[430px]" alt="" />
      </div>
        <button className="bg-[#28A9F1] rounded-[38px] text-[#F9F9FB] w-[489px] h-[96px] mt-[43px] mb-[30px] text-[25px] font-[400]" >Login</button>
        <p className="text-[#393939] text-[21px] font-[400] pl-[70px]">Don't you have a account? <a href=""className="text-[#28A9F1] underline" > Signup</a></p>
      </div>
    </div>
  );
};

export default LoginNew;
