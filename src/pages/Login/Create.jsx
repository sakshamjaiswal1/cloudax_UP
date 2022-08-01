import React from 'react'
import logo from "../../assets/logo.png";
import visible from '../../assets/visible.svg'
import {AiOutlineArrowLeft} from 'react-icons/ai'
const Create = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center">
    <div className="lg:flex-[3_3_0]">
      <img src={logo} className="lg:inline-block hidden h-[1000px] w-[100%]" alt="" />
    </div>

    <div className="lg:flex-[4_4_0] flex flex-col  pl-[30px] lg:pl-[100px] pt-[90px]">
    <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
      <p className="text-[#000000] font-[700] text-mti lg:text-[39.02px] leading-[51px]">
        Create your account
      </p>
      <label htmlFor="" className="text-[#393939] text-mn  pt-[20px] lg:text-[21px] py-[10px]">Your First Name</label>
      <input
        type="text"
        className="px-[6px] pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] h-[59px] w-[305px] lg:w-[486px] lg:h-[85px] relative bg-inherit text-[#6F6F6F] text-mn lg:text-[24px] font-[400]" placeholder='e.g. Peter'
      /> <label htmlFor="" className="text-[#393939] text-mn pt-[20px] lg:text-[21px] py-[10px] font-[400]">Your Last Name</label>
      <input
        type="text"
        className="px-[6px]  pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] lg:w-[486px] lg:h-[85px] relative bg-inherit  text-[#6F6F6F] lg:text-[24px] font-[400] h-[59px] w-[305px] text-mn"
        placeholder='e.g. Peterson'
      />
       <label htmlFor="" className="text-[#393939] text-mn pt-[20px] lg:text-[21px] py-[10px]">Email</label>
      <input
        type="email"
        className="px-[6px]  pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] lg:w-[486px] lg:h-[85px] h-[59px] w-[305px] relative bg-inherit  text-[#6F6F6F] lg:text-[24px]  text-ms font-[400]"
        placeholder='someone@email.com'
      />
     <div className="flex flex-col relative pt-[20px]">
      <label htmlFor="" className="text-[#393939]  font-[400] text-[16px] lg:text-[21px] py-[10px]">Password</label>
      <input
        type="password"
        placeholder='******'
        className="px-[6px]  pl-[30px] border-[1.29px] border-[#000000] rounded-[38px] h-[59px] w-[305px] lg:w-[486px] lg:h-[85px] relative bg-inherit  text-[#6F6F6F] text-[24px] font-[400]"
      />
      <img src={visible} className="lg:h-[22px] h-[16px] w-[22px] lg:w-[30px] relative bottom-[39px] lg:bottom-[55px] lg:left-[430px]  left-[260px]" alt="" />
      </div>
      
      <button className="bg-[#28A9F1] rounded-[38px] text-[#F9F9FB]  lg:w-[489px] lg:h-[96px] h-[60px] w-[308px] mt-[43px] mb-[30px] text-[16px] lg:text-[25px] font-[400]" >Continue</button>
      <p className="text-[#393939] pt-[0px] text-[16px] lg:text-[21px] font-[400] pl-[30px] lg:pl-[70px]">Already have an account? <a href="text"className="text-[#28A9F1] underline" >Login</a></p>
    </div>
  </div>
  )
}

export default Create