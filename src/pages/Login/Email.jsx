import React from "react";
import logo from "../../assets/logo.svg";
import email from '../../assets/email.svg'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Email = () => {
  return (
    <div>
<div className="flex bg-[#F5F5F5] justify-center">
    <div className="flex-[3_3_0]">
      <img src={logo} className="h-max w-[100%]" alt="" />
    </div>

    <div className="flex-[4_4_0] flex flex-col  pl-[100px] pt-[90px]">
    <AiOutlineArrowLeft className="text-[#000000] text-[30px] mb-[24px]" />
      <p className="text-[#000000] font-[700] text-[39.02px] leading-[51px]">
        Verify Your Email
      </p>
   
      <label htmlFor="" className="text-[#393939] pr-[30px] text-[21px] py-[30px]">We sent an e-mail containing a verification link to someone@email.com. Please click the link to complete your registration.</label>
      <div className="flex justify-center">
      <img src={email} className='w-[182px] h-[72px] mr-[300px]' alt="" />
      </div>
      
      <button className="bg-[#28A9F1] rounded-[38px] text-[#F9F9FB] w-[476px] h-[82px] mt-[43px] mb-[30px]" >Go to Email</button>
     
    </div>
  </div>

    </div>
  )
}

export default Email