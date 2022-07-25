import React from "react";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
import visible from "../../assets/visible.svg";

const VerifyVbm = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="px-[150px]">
        <img src={arrowLeft} alt="" className="h-[43px] w-[43px] mb-[15px]" />
      </div>
   
        <div className="w-[631px] h-[589px] bg-[#FFFFFF] flex flex-col pt-[43px] border-[1.3px] mb-[200px] border-[#C2C2C2]  rounded-[14px] mx-[400px]">
          <div className="flex flex-col ml-[33px] relative">
            <label
              htmlFor=""
              className="font-[500] pb-[10px] text-[#393939] text-[12px]"
            >
              Bank
            </label>
           <select name="" id=""className="bg-[#FFFFFF] border-[#9E9E9E] text-[19px] font-[400] text-[#000000] border-solid border-[1px] rounded-[14px] h-[61px] w-[544px] px-[20px] py-[10px]" >
               <option value="Guaranty Trust Bank">
               Guaranty Trust Bank
               </option>
           </select>
         
          </div>
          <div className="flex flex-col  ml-[33px] relative mt-[20px]">
          <label
              htmlFor=""
              className="font-[500] pb-[10px] text-[#393939] text-[12px]"
            >
              Account Number
            </label>
            <input
              type="text"
              className=" border-[#9E9E9E] text-[19px] font-[400] text-[#000000] border-solid border-[1px] rounded-[14px] h-[61px] w-[544px] px-[20px] py-[10px]"
              placeholder="****"
            />
          
          </div>
          <div className="flex flex-col  ml-[33px] relative mt-[20px]">
          <label
              htmlFor=""
              className="font-[500] pb-[10px] text-[#393939] text-[12px]"
            >
              Enter BVN
            </label>
            <input
              type="text"
              className=" border-[#9E9E9E] text-[19px] font-[400] text-[#000000] border-solid border-[0.9px] rounded-[14px] h-[61px] w-[544px] px-[20px] py-[10px]"
              placeholder="****"
            />
           
          </div>
          <button className="h-[84px] text-[#FFFFFF] text-[25px] font-[400] bg-[#28A9F1] w-[486px] ml-[62px] mt-[54px] rounded-[38px]">
            Proceed
          </button>
        </div>
   
    </div>
  );
};

export default VerifyVbm;
