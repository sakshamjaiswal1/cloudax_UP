import React from 'react'
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
const OTPBox = () => {
  return (
    <>
    <Header/>
    <div className="flex ml-20  items-end " > <img
                      src={arrowLeft}                      alt=""
                      class="flex-shrink-0 ml-20 h-6 w-8 rounded-full "
                    /> </div>
    <div className="flex justify-center ">
                   <div className="fixed w-full  inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            
                        ></div>
                        <div className="flex   w-full items-center min-h-screen ">
                            <div className="relative pb-7 w-3/12 max-w-lg p-4 mx-auto bg-white rounded-2xl shadow-lg">
                                <div className="mt-3 sm:flex">
                                    
                                    <div className="mt-2 text-center sm:ml-4 ">
                                        <h4 className="font-[500] ml-2 text-[10px]  text-gray-800">
                                        Enter the 6-digit OTP sent to your phone number.
                                        </h4>
                                        <div class="mt-1 ml-6 pt-3 relative">
                <input
                  type="text"
                  placeholder=""
                  class="relative w-11/12 border-current text-center justify-between placeholder-gray-500 bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-2  cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-bg-[#28A9F1] sm:text-sm"
                />
              </div>
              <div className="pt-2">
              <p className="font-[500] ml-2 text-[10px]  text-gray-800">
              Didn’t get the code? <span className=' text-[#28A9F1] underline ' >Resend OTP</span>
                                        </p>
              </div>

                                       
                                        <div className="items-center w-full justify-center gap-2 mt-4 sm:flex pl-5 rounded-lg ">
                                            <button
                                                className="w-full mt-2 p-2 flex-1 text-white font-[200] text-[12px] bg-[#28A9F1] rounded-2xl outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                               
                                            >
                                               Confirm Withdrawal
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
    </>
  )
}

export default OTPBox