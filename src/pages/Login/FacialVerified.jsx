import React from "react";
import logo from "../../assets/logo.svg";
import face from "../../assets/face.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

const FacialVerified = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center">
        <div className="flex-[3_3_0] hidden lg:inline-block">
        <img src={logo} className="h-max w-[100%]" alt="" />
      </div>

  
      <div className="flex-[4_4_0] flex flex-col  pl-[40px] lg:pl-[100px] pt-[35px] lg:pt-[69px] ">
      <AiOutlineArrowLeft className="text-[#000000] text-[26px] lg:text-[30px] mb-[24px]" />
      <p className="text-[#000000] mb-[20px] font-[700] lg:text-[39.02px] leading-[51px] text-[24px]">
          Facial Verification
        </p>

        <label
          htmlFor=""
          className="text-[#000000] font-[400] pr-[70px] text-mn lg:text-[21px] py-[30px]"
        >
          We need to be sure it’s you, kindly take a clear picture of your face.
        </label>
        <div className="flex lg:flex-row flex-col justify-between">
          <img src={face} alt="" className=" h-[184px] w-[184px] lg:h-[267px] lg:w-[267px] lg:ml-[0px] ml-[50px]" />
          <div className="h-[123px] bg-[#F2F2F2] w-[290px] text-[12px] lg:text-[13px] font-[400] text-[#363636] rounded-[17px] pt-[30px] pb-[36px] pl-[30px] lg:ml-[0px] ml-[20px]">
              <p>Tips for a good selfie:</p>
              <ul className="list-disc ml-[20px]" >
                  <li>Have good lighting</li>
                  <li>Maintain a straight face</li>
              </ul>
          </div>
        </div>
        <button className="bg-[#28A9F1] rounded-[38px] text-[#FFFFFF] flex items-center justify-center px-[20px] h-[60px] w-[308px] lg:w-[476px] lg:h-[82px]  mt-[70px] mb-[20px] font-[400]  text-mbtn  lg:text-[25px]">
          Upload Image
        </button>
      </div>
    </div>
  )
}

export default FacialVerified