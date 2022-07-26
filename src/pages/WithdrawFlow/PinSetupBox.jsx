import React from 'react'
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
import Withdrawal from "../../assets/Withdrawal.svg";

function PinSetupBox() {
    const [showModal, setShowModal] = React.useState(true);
  return (
    <>
    <Header />
    <div className="flex ml-20  items-end ">
      {" "}
      <img
        src={arrowLeft}
        alt=""
        class="flex-shrink-0 ml-20 h-6 w-8 rounded-full "
      />{" "}
    </div>
    <div className="flex justify-center">
        
        
        <div class=" w-4/12 h-5/6 bg-white rounded-lg border border-black-400  dark:bg-black-800 dark:border-black-700" >
        <form  >
          <div className="bg-grey  ">
            <div className="p-5 pb-3 " >
              
              <div className="mt-6" >
                <label
                  id="listbox-label"
                  class="block text-sm  text-gray-700  font-[400] text-[12px]"
                >
                  Enter Transaction Pin
                </label>
                <div class="mt-1 relative">
                  <input
                    type="text"
                    placeholder="1234"
                    class="relative w-full  bg-white border border-gray-300 rounded-xl shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6" >
                <label
                  id="listbox-label"
                  class="block text-sm  text-gray-700  font-[400] text-[12px]"
                >
                  Confirm Transaction Pin
                </label>
                <div class="mt-1 relative">
                  <input
                    type="text"
                    placeholder="1234"
                    class="relative w-full  bg-white border border-gray-300 rounded-xl shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6 mb-6 relative justify-center ml-2 pl-0">
               
                <div class="mt-3 relative justify-center ml-1 pl-8">
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    class="text-gray-400 p-3 w-11/12 justify-center   border border-black-500 rounded-3xl bg-white shadow-sm pl-3  text-center  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    Confirm
                  </button>
                  {showModal ? (
                      <>
                        <div className="flex justify-center ">
                          <div className="fixed w-full inset-0 z-10 overflow-y-auto">
                            <div
                              className="fixed inset-0 w-full h-full bg-black opacity-40"
                              onClick={() => setShowModal(false)}
                            ></div>
                            <div className="flex justify-center   w-full items-center min-h-screen ">
                              <div className="relative w-34 text-[9px] pr-[7px] flex justify-center bg-white rounded-2xl shadow-lg">
                                {" "}
                                <div className="flex justify-center flex-col pl-8 h-[240px] w-[270px] ">
                                  {" "}
                                  <span className="pl-[10px]"><img
                                    className=" h-[100px] ml-11 w-[100px]  "
                                    src={Withdrawal}
                                    alt=""
                                  /></span>
                                   <p  className='text-black font-[500] text-[12px] pt-4 pb-0 ml-10'  >Pin SetUp Succesfully</p>
                                   <div className='pt-4' ><button
                  type="button"
                  
                  className="text-[#FFFFFF] text-[13px] p-3 w-11/12 justify-center   border border-black-500 rounded-[26px] bg-[#28A9F1] shadow-sm pl-3  text-center"
                >
                 Return to Withdrawal
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
        </form>
        </div>
      </div>
  </>
  )
}

export default PinSetupBox