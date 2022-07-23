import React from "react";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
import SuccessModal from "../../components/Modals/SuccessModal";

const AccountSuccess = () => {
  return (
    <>
    <div className="flex flex-col">
      <Header />
      <div className="px-[150px]">
        <img src={arrowLeft} alt="" className="h-[43px] w-[43px] mb-[15px]" />
        <p className="text-[#000000] text-[38px] font-[700] pb-[30px]">
          Account Settings
        </p>
      </div>
      <div className="bg-[#EFF1F7] flex mx-[150px] rounded-[13px] w-[1191px] h-[812px]">
        <div className="flex">
          <div className=" mt-[18px] w-[540px] h-[217px] rounded-[14px] mx-[16px]">
            <p className=" pt-[32px] pl-[51px] text-[20px] font-[700] text-[#1E1E1E]">
            Enter OTP
            </p>
            <p className="pl-[51px] pr-[79px] text-[13px] font-[400] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              proin enim, accumsan aliquet congue. Ornare sollicitudin sit nunc
              viverra.
            </p>
      
          </div>
          <div className="w-[550px] h-[253px] bg-[#FFFFFF] flex flex-col mt-[27px] pt-[60px] ">
            <div className="flex flex-col ml-[49px] relative">
              <label
                htmlFor=""
                className="font-[500] pb-[10px] text-[#000000]/[0.5] text-[12px]"
              >
             0123456
              </label>
              <input
                type="text"
                className=" border-[#9E9E9E] text-[18px] font-[400] text-[#1E1E1E] border-solid border-[0.9px] rounded-[6px] h-[44px] w-[429px] px-[20px] py-[10px]"
                placeholder="**********"
              />
             
            </div>
         
          
            <button className="h-[48px] bg-[#28A9F1] w-[290px] text-[#FFFFFF] ml-[114px] mt-[34px] rounded-[21px]">
            Proceed
              </button>
          </div>
        </div>
      </div>
    </div>
<SuccessModal display={true}/>
    </>
  );
};

export default AccountSuccess;
