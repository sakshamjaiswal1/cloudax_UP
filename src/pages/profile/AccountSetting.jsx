import React from "react";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
import profile from "../../assets/profile.svg";

const AccountSetting = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-[150px]">
        <img src={arrowLeft} alt="" className="h-[43px] w-[43px] mb-[15px]" />
        <p className="text-[#000000] text-[38px] font-[700] pb-[30px]">
          Account Settings
        </p>
      </div>
      <div className="bg-[#EFF1F7] flex mx-[150px] rounded-[13px] w-[1191px] h-[812px]">
        <div className="flex flex-col">
          <div className="bg-[#FFFFFF] w-[741px] h-[288px] rounded-[14px] m-[16px]">
            <div className="flex pl-[50px] pt-[30px]">
              <p className="text-[#1E1E1E] text-[20px] font-[700]">
                Profile Details
              </p>
              <button className="h-[48px] w-[150px] border-[#000000] border-solid border-[0.5px] ml-[323px] rounded-[21px]">
                Log Out
              </button>
            </div>
            <div className="flex pl-[50px] my-[25px] ">
              <img src={profile} alt="" className="h-[74px] w-[74px]" />
              <p className="text-[#1E1E1E] text-[22px] pl-[22px] pt-[20px] font-[500]">
                Peter Peterson
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col ml-[49px]">
                <label htmlFor="" className="font-[500] text-[12px]">
                  Phone Number
                </label>
                <input
                  type="text"
                  className=" border-[#9E9E9E] border-solid border-[0.9px] rounded-[6px] h-[44px] w-[254px] px-[60px]"
                  placeholder="08123456789"
                />
              </div>
              <div className="flex flex-col ml-[16px]">
                <label htmlFor="" className="font-[500]  text-[12px]">
                  Email
                </label>
                <input
                  type="text"
                  className=" border-[#9E9E9E] border-solid border-[0.9px] rounded-[6px] h-[44px] w-[254px] px-[60px]"
                  placeholder="peterpeterson@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className="w-[738px] h-[217px] bg-[#FFFFFF] rounded-[14px] mx-[16px]">
            <p className=" pt-[32px] pl-[51px] text-[20px] font-[700] text-[#1E1E1E]">Two Factor Authentication</p>
            <p className="pl-[51px] pr-[79px] text-[13px] font-[400] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium neque, mauris eros, etiam sit tellus luctus eu enim. Lacus eu porttitor et vel viverra nisl. Sed ipsum tincidunt maecenas.</p>
            <button className="h-[48px] w-[290px] border-[#000000] border-solid border-[0.5px] ml-[51px] mt-[14px] rounded-[21px]">
                Log Out
              </button>
          </div>
          <div className=" mt-[18px] w-[738px] h-[217px] bg-[#FFFFFF] rounded-[14px] mx-[16px]">
            <p className=" pt-[32px] pl-[51px] text-[20px] font-[700] text-[#1E1E1E]">Withdrawal Accounts</p>
            <p className="pl-[51px] pr-[79px] text-[13px] font-[400] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium neque, mauris eros, etiam sit tellus luctus eu enim. Lacus eu porttitor et vel viverra nisl. Sed ipsum tincidunt maecenas.</p>
            <button className="h-[48px] w-[290px] border-[#000000] border-solid border-[0.5px] ml-[51px] mt-[14px] rounded-[21px]">
                Manage Accounts
              </button>
          </div>
        </div>
        <div className="flex flex-col">
        <div className=" mt-[18px] w-[386px] h-[217px] bg-[#FFFFFF] rounded-[14px] mx-[16px]">
            <p className=" pt-[32px] pl-[51px] text-[20px] font-[700] text-[#1E1E1E]">Login Password</p>
            <p className="pl-[51px] pr-[79px] text-[13px] font-[400] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra molestie velit.</p>
            <button className="h-[48px] w-[290px] border-[#000000] border-solid border-[0.5px] ml-[51px] mt-[14px] rounded-[21px]">
            Change Password
              </button>
          </div>
          <div className=" mt-[18px] w-[386px] h-[217px] bg-[#FFFFFF] rounded-[14px] mx-[16px]">
            <p className=" pt-[32px] pl-[51px] text-[20px] font-[700] text-[#1E1E1E]">Transaction Pin</p>
            <p className="pl-[51px] pr-[79px] text-[13px] font-[400] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra molestie velit.</p>
            <button className="h-[48px] w-[290px] border-[#000000] border-solid border-[0.5px] ml-[51px] mt-[14px] rounded-[21px]">
            Change Pin
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
