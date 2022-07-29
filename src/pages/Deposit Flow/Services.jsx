import React, { useState } from 'react'
import CardExchange from '../../components/card/CardExchange'
import LargeCard from '../../components/card/LargeCard'
import Header from '../../components/Header/Header'
import arrowLeft from "../../assets/arrowLeft.svg";

const Services = () => {
    const [bg, setBg] = useState("");
    const handleClick = () => {
        if (bg === " #28A9F1") {
            setBg("none")
        } else {
            setBg("#28A9F1")
        }
    }
    return (
        <>
        <Header />
            <div className="flex ml-20  items-end ">
        {" "}
        <img
          src={arrowLeft}
          alt=""
          class="flex-shrink-0 ml-20 h-6 w-6 rounded-full "
        />{" "}
      </div>
        <div className="px-48 pb-16">
            
            
            <LargeCard>
                <p className="text-[#3F3F3F] text-[14px] pb-[8px] ">
                Select a P2P Merchant
                </p>
                <div className="pb-[4px]" ><CardExchange >
                    <p className='text-[#3F3F3F]  font-[500] text-[22px]'>OTC Exchange</p>
                    <p className='text-[#3F3F3F]  font-[500] text-[13px]' >324 Completed Trades</p>
                </CardExchange></div>
                <div className="pb-[4px]" ><CardExchange className="mt-[10px]" >
                    <p className='text-[#3F3F3F]  font-[500] text-[22px]'>Seed Investment</p>
                    <p className='text-[#3F3F3F]  font-[500] text-[13px]' >298 Completed Trades</p>
                </CardExchange></div>
               <div className="pb-[4px]"> <CardExchange>
                    <p className='text-[#3F3F3F]  font-[500] text-[22px]'>Kingsz Exchange</p>
                    <p className='text-[#3F3F3F]  font-[500] text-[13px]' >276 Completed Trades</p>
                </CardExchange></div>
                <div className="pb-[4px]"><CardExchange>
                    <p className='text-[#3F3F3F]  font-[500] text-[22px]'>Agba Logan Int'l</p>
                    <p className='text-[#3F3F3F]  font-[500] text-[13px]'>104 Completed Trades</p>
                </CardExchange></div>
               <div className="pb-[4px]"> <CardExchange>
                    <p className='text-[#3F3F3F]  font-[500] text-[22px]'>Agba Logan Int'l</p>
                    <p className='text-[#3F3F3F]  font-[500] text-[13px]'>104 Completed Trades</p>
                </CardExchange></div>
                <button onClick={handleClick} style={{ background: bg }} className="h-[48px] bg-[#28A9F1] w-[290px] text-[#FFFFFF] ml-[100px] mt-[34px] rounded-[21px]">
                Confirm
                </button>
            </LargeCard>
        </div>
        </>
    )
}

export default Services