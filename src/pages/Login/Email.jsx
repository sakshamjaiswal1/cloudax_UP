import React from "react";
import logo from "../../assets/logo.svg";
import email from "../../assets/email.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Email = () => {
  return (
    <div>
      <div className="flex lg:bg-[#F5F5F5] ip:bg-[white] justify-center">
        <div className="flex-[3_3_0] hidden lg:inline-block">
          <img src={logo} className="h-max w-[100%]" alt="" />
        </div>

        <div className="flex-[4_4_0] flex flex-col  pl-[40px] lg:pl-[100px] pt-[35px] lg:pt-[69px] ">
          <AiOutlineArrowLeft className="text-[#000000] text-[26px] lg:text-[30px] mb-[24px]" />
          <p className="text-[#000000] font-[700] text-mti lg:text-[39.02px] leading-[51px]">
            Verify Your E-mail
          </p>

          <label
            htmlFor=""
            className="text-[#000000] pr-[30px] text-mn lg:text-[21px] py-[30px]"
          >
            We sent an e-mail containing a verification link to
            someone@email.com. Please click the link to complete your
            registration.
          </label>
          <div className="flex justify-center">
            <img
              src={email}
              className="h-[94px] w-[94px] mr-[50px] lg:w-[188px] lg:h-[194px] lg:mr-[265px]"
              alt=""
            />
          </div>

          <button className="bg-[#28A9F1] rounded-[38px] text-[#F9F9FB]  lg:w-[489px] lg:h-[96px] h-[60px] w-[308px] mt-[43px] mb-[30px] text-[16px] lg:text-[25px] font-[400]">
            Go to E-mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
