import React from 'react'
import Header from '../../components/Header/Header'
import LargeCard from '../../components/card/LargeCard'
import arrowLeft from "../../assets/arrowLeft.svg";

const Payment = () => {
   
    
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
            <div>
                <LargeCard  >
                    <p className="text-2xl text-[#000000] font-[500] w-full text-center">Pay the Seller</p> <br />
                    <p className=" opacity-70 w-full text-center  text-[#000000]  font-[500] text-[15px]">Amount to be paid:</p>
                    <p className="text-[#000000] pl-[70px] ml-[80px] font-[500] text-[30px]">NGN 123,000</p>

                    <p className="w-full text-sm text-center opacity-70 mb-[13px]">Bank transfer details</p>
                    <hr />
                    <div className="flex px-16 justify-between my-3 items-center">
                        <p className="text-sm opacity-70">Name:</p>
                        <p className="text-gray-700  font-[500] text-[20px]">TOOCHUKWU OKORO</p>
                    </div>
               
                    <hr />
                    <div className="flex px-16 justify-between my-3 items-center">
                        <p className="text-sm opacity-70">Account Number:</p>
                        <p className="text-gray-700  font-[500] text-[20px]">2187402937</p>
                    </div>
                   
                    <hr />
                    <div className="flex px-16 justify-between my-3 items-center">
                        <p className="text-sm opacity-70">Bank Name:</p>
                        <p className="text-gray-700  font-[500] text-[20px]">KUDA MFB</p>
                    </div>
                    <hr />
                    
                    <button className="h-[48px] bg-[#28A9F1] w-[290px] text-[#FFFFFF] ml-[114px] mt-[34px] rounded-[21px]">
                    I have made payment
              </button>
                </LargeCard>
            </div>
        </>
    )
}

export default Payment