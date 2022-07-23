import React from "react";
import logo from "../../assets/logo.svg";
import face from "../../assets/face.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

const FacialVerified = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center">
      <div className="flex-[3_3_0]">
        <img src={logo} className="h-max w-[100%]" alt="" />
      </div>

      <div className="flex-[4_4_0] flex flex-col  pl-[100px] pt-[40px]">
        <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
        <p className="text-[#000000] font-[700] text-[39.02px] leading-[51px]">
          Facial Verification
        </p>

        <label
          htmlFor=""
          className="text-[#393939] pr-[70px] text-[21px] py-[30px]"
        >
          We need to be sure it’s you, kindly take a clear picture of your face.
        </label>
        <div className="flex justify-between">
          <img src={face} alt="" className="h-[267px] w-[267px]" />
          <div className="h-[123px] bg-[#F2F2F2] w-[290px] text-[13px] font-[400] text-[#363636] rounded-[17px]">
              <p>Tips for a good selfie:</p>
              <ul className="list-disc ml-[20px]" >
                  <li>Have good lighting</li>
                  <li>Maintain a straight face</li>
              </ul>
          </div>
        </div>
        <button className="bg-[#28A9F1] rounded-[20px] text-[#000000] flex items-center justify-center px-[20px] w-[476px] h-[82px]  mt-[70px] mb-[20px]">
          Upload Image
        </button>
      </div>
    </div>
  )
}

export default FacialVerified