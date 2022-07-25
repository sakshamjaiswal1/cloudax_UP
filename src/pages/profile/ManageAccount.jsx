import React from "react";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
import visible from "../../assets/visible.svg";

const ManageAccount = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-[150px]">
        <img src={arrowLeft} alt="" className="h-[43px] w-[43px] mb-[15px]" />
        <p className="text-[#000000] text-[38px] font-[700] pb-[30px]">
          Account Settings
        </p>
      </div>
      <div className="bg-[#EFF1F7] flex mx-[80px] rounded-[13px] w-[1191px] h-[582px] mb-[128px]">
        <div className="flex">
          <div className=" mt-[18px] w-[540px] h-[217px] rounded-[14px] mx-[16px]">
            <p className=" pt-[32px] pl-[51px] text-[20px] font-[700] text-[#1E1E1E]">
            Manage Accounts
            </p>
            <p className="pl-[51px] pr-[79px] text-[13px] font-[400] text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit proin enim, accumsan aliquet congue. Ornare sollicitudin sit nunc viverra.
            </p>
         
          </div>
          <div className="w-[550px] h-[491px] bg-[#FFFFFF] flex flex-col mt-[27px] pt-[60px] justify-center rounded-[14px]">
           <p className="text-[#000000]/[0.5] mt-[10px] ml-[47px] mb-[12px] text-[12px] font-[400]">
               Saved Accounts
           </p>
            <div className="flex text-[#000000] ml-[49px] border-[1px] border-[#000000] rounded-[12px] h-[128px] w-[466px] relative">
            <div className="flex ml-[20px] mt-[24px] flex-col">
                <p className="text-[16px] font-[700] ">0589130348</p>
                <p className="text-[14px] font-[400] " >Guaranty Trust Bank</p>
                <p  className="text-[14px] font-[400] " >PETER PETERSON</p>
            </div>
            <button className="bg-[#EFF1F7] mt-[16px] ml-[201px] rounded-[11px] text-[9px] font-[400] h-[24px] w-[84px]  text-[#000000]">Delete</button>
            </div>
            <div className="flex mt-[11px] mb-[41px] text-[#000000] ml-[49px] border-[1px] border-[#000000] rounded-[12px] h-[128px] w-[466px] relative">
            <div className="flex ml-[20px] mt-[24px] flex-col">
                <p className="text-[16px] font-[700] ">0589130348</p>
                <p className="text-[14px] font-[400] " >Guaranty Trust Bank</p>
                <p  className="text-[14px] font-[400] " >PETER PETERSON</p>
            </div>
            <button className="bg-[#EFF1F7] mt-[16px] ml-[201px] rounded-[11px] text-[9px] font-[400] h-[24px] w-[84px]  text-[#000000]">Delete</button>
            </div>
          
       
            <button className="h-[48px] bg-[#28A9F1] text-[#FFFFFF] w-[290px]  ml-[114px] mt-[14px] mb-[30px] rounded-[21px]">
            Proceed
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
