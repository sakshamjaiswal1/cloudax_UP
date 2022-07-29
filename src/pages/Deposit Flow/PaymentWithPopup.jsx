import React from 'react'
import Header from '../../components/Header/Header'
import arrowLeft from "../../assets/arrowLeft.svg";

const PaymentWithPopup = () => {
    const [showModal, setShowModal] = React.useState(true);
    
    return (
        <>
            <Header />
            <div className="flex ml-20  items-end ">
              <img
          src={arrowLeft}
          alt=""
          class="flex-shrink-0 ml-20 h-6 w-6 rounded-full "
        />{" "}
      </div>
            <div>
                <div className='m-auto w-5/12 border-[#C2C2C2] p-6 border-[1px]  rounded-[15px]' >
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
                    
                    <button   onClick={() => setShowModal(true)} className="h-[48px] bg-[#28A9F1] w-[290px] text-[#FFFFFF] ml-[114px] mt-[34px] rounded-[21px]">
                    I have made payment
              </button>
              {showModal ? (
                      <>
                        <div className="flex justify-center ">
                          <div className="fixed w-full h-[100%] inset-0 z-10 overflow-y-auto">
                            <div
                              className="fixed inset-0 w-full h-full bg-black opacity-40"
                              onClick={() => setShowModal(false)}
                            ></div>
                            <div className="flex justify-center h-[100%] w-full items-center min-h-screen ">
                              <div className="relative w-[30%] text-[9px]  flex justify-center bg-white rounded-2xl shadow-lg">
                                {" "}
                                <div className="flex justify-center flex-col h-[180px] w-[370px] ">
                                  {" "}
                                  
                                   <div className='flex justify-center items-center mr-5 flex-col pt-0'  ><p  className='text-black  font-[500] text-[12px]   ml-10'  >Your account will be credited in a few </p><p  className='  text-black font-[500] text-[12px]  pb-0 ml-10'>minutes, as soon as the transfer is received.</p></div>
                                   <div className='flex justify-center items-center  pt-5' ><button
                  type="button"
                  className="text-[#FFFFFF] p-3 w-7/12 justify-center  bg-[#28A9F1] border border-black-500 rounded-[26px]  shadow-sm pl-3  text-center"
                >
                 Return to Homepage
                </button></div>
                                </div>{" "}
                               
                              </div>

        
                            </div>
                
                          </div>
                        </div>
                      </>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default PaymentWithPopup