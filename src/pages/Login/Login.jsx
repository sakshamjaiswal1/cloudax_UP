import React from "react";
import logo from "../../assets/logo.png";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Login = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center items-center">
      <div className="flex-[3_3_0]">
        <img src={logo} className="h-max w-[100%]" alt="" />
      </div>

      <div className="flex-[4_4_0] flex flex-col  pl-[100px] pt-[90px]">
      <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
        <p className="text-[#000000] font-[700] text-[39.02px] leading-[51px]">
          Login to Cloudax
        </p>
        <div className="mt-[50px] flex ">
          <div className="relative">
            <label
              htmlFor="prefix"
              className="absolute z-[1] top-[-10px] left-[15px] bg-[#F5F5F5] text-[16px] font-[400] px-[10px]"
            >
              Prefix
            </label>
            <input
              type="text"
              value={'+1'}
              className="px-[6px]  border-[1.29px] border-[#000000] rounded-[23px] w-[137px] pl-[30px] h-[92px] relative bg-inherit text-[28px] font-[400]"
            />
          </div>
          <div className="relative mx-[19px]">
            <label
              htmlFor="prefix"
              
              className="absolute z-[1] top-[-10px] left-[15px] bg-[#F5F5F5] text-[16px] font-[400] px-[10px]"
            >
              Mobile Number
            </label>
            <input
              type="text"
             
              className="px-[6px]  border-[1.29px] border-[#000000] rounded-[23px] w-[332px] h-[92px] relative bg-inherit"
            />
          </div>
        </div>
        <label htmlFor="" className="text-[#393939] text-[21px] py-[10px]">Password</label>
        <input
          type="text"
          className="px-[6px]  border-[1.29px] border-[#000000] rounded-[38px] w-[489px] h-[92px] relative bg-inherit"
        />
        <button className="bg-[#28A9F1] rounded-[38px] text-[#F9F9FB] w-[489px] h-[96px] mt-[43px] mb-[30px]" >Login</button>
        <p className="text-[#393939] text-[21px] font-[400] pl-[70px]">Dont you have a account <a href=""className="text-[#28A9F1] underline" > Signup</a></p>
      </div>
    </div>
  );
};

export default Login;
