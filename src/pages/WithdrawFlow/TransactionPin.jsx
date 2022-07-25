import React from 'react'
import CardExchange from '../../components/card/CardExchange'
import Header from '../../components/Header/Header'
import arrowLeft from "../../assets/arrowLeft.svg";
const TransactionPin = () => {
    const [showModal, setShowModal] = React.useState(true);
  return (
    <><Header/>
    <div className="flex ml-20  items-end " > <img
                      src={arrowLeft}                      alt=""
                      class="flex-shrink-0 ml-20 h-6 w-6 rounded-full "
                    /> </div>
    <div className="flex justify-center">

<div class=" w-4/12 h-6/6 bg-white rounded-lg border border-black-400  dark:bg-black-800 dark:border-black-700" >
<div className='p-7 pb-0' >
<div> <p className='font-[100] text-[12px]'>Select a P2P Merchant</p></div>
<div >
<CardExchange children="OTC Exchange" data="324 Completed Trades"/>
<CardExchange children="Seed Investments" data="298 Completed Trades"/>
<CardExchange children="Kingz Exchange" data="276 Completed Trades"/>
<CardExchange children="Agba Logan Int’l" data="104 Completed Trades"/>
<CardExchange children="Agba Logan Int’l" data="104 Completed Trades"/>
</div>
<div class="mt-5 relative justify-center ml-3 pl-8 pb-2" >
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  
                  class=" text-slate-400 p-3 w-11/12 justify-center bg-white border border-black-400 rounded-3xl shadow-sm pl-3  text-center  focus:outline-none focus:ring-1 focus:ring-[#28A9F1] focus:border-indigo-500 sm:text-sm"
                >
                 Proceed
                </button>
                {showModal ? (
                      <>
                        <div className="flex justify-center ">
                          <div className="fixed w-full inset-0 z-10 overflow-y-auto">
                            <div
                              className="fixed inset-0 w-full h-full bg-black opacity-40"
                              onClick={() => setShowModal(false)}
                            ></div>
                            <div className="flex justify-center  w-full items-center min-h-screen ">
                              <div className="relative w-26 text-[9px]  flex justify-center bg-white rounded-2xl shadow-lg">
                                {" "}
                                <div className="flex justify-center flex-col h-[180px] w-[370px] ">
                                  {" "}
                                  
                                   <div className='flex justify-center items-center mr-5 flex-col'  ><p  className='text-black  font-[500] text-[12px] pt-4 pb-0 ml-10'  >You need to set-up a transaction pin </p><p  className='  text-black font-[500] text-[12px]  pb-0 ml-10'>to proceed.</p></div>
                                   <div className='flex justify-center items-center  pt-5' ><button
                  type="button"
                  className="text-gray-400 p-3 w-11/12 justify-center   border border-black-500 rounded-[26px] bg-white shadow-sm pl-3  text-center"
                >
                 Set Up Transaction Pin
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

</div>
    </div>
    </>
  )
}

export default TransactionPin