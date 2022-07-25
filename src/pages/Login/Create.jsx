import React from 'react'
import logo from "../../assets/logo.png";
import visible from '../../assets/visible.svg'
import {AiOutlineArrowLeft} from 'react-icons/ai'
const Create = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center">
    <div className="flex-[3_3_0]">
      <img src={logo} className="h-[1000px] w-[100%]" alt="" />
    </div>

    <div className="flex-[4_4_0] flex flex-col  pl-[100px] pt-[90px]">
    <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
      <p className="text-[#000000] font-[700] text-[39.02px] leading-[51px]">
        Create your account
      </p>
      <label htmlFor="" className="text-[#393939] text-[21px] py-[10px]">Your First Name</label>
      <input
        type="text"
        className="px-[6px] pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] w-[486px] h-[85px] relative bg-inherit text-[#6F6F6F] text-[24px] font-[400]" placeholder='e.g. Peter'
      /> <label htmlFor="" className="text-[#393939] text-[21px] py-[10px] font-[400]">Your Last Name</label>
      <input
        type="text"
        className="px-[6px]  pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] w-[486px] h-[85px] relative bg-inherit  text-[#6F6F6F] text-[24px] font-[400]"
        placeholder='e.g. Peterson'
      />
       <label htmlFor="" className="text-[#393939] text-[21px] py-[10px]">Email</label>
      <input
        type="text"
        className="px-[6px]  pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] w-[486px] h-[85px] relative bg-inherit  text-[#6F6F6F] text-[24px] font-[400]"
        placeholder='someone@email.com'
      />
      <div className="flex flex-col relative">
      <label htmlFor="" className="text-[#393939] text-[21px] py-[10px]">Password</label>
      <input
        type="text"
        className="px-[6px]  pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] w-[486px] h-[85px] relative bg-inherit  text-[#6F6F6F] text-[24px] font-[400]"
      />
      <img src={visible} className="h-[22px] w-[30px] relative bottom-[55px] left-[430px]" alt="" />
      </div>
      
      <button className="bg-[#28A9F1] rounded-[38px] text-[#F9F9FB] w-[484px] h-[83px] mt-[43px] mb-[30px]" >Continue</button>
      <p className="text-[#393939] text-[21px] font-[400] pl-[70px]">Already have a account <a href="text"className="text-[#28A9F1] underline" > Login</a></p>
    </div>
  </div>
  )
}

export default Create