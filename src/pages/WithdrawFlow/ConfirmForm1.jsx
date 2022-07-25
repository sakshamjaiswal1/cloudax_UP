import React from 'react'

import Header from '../../components/Header/Header'
import arrowLeft from "../../assets/arrowLeft.svg";
const ConfirmFrom1 = () => {
  return (
    <> <Header/>
    <div className="flex ml-20  items-end " > <img
                      src={arrowLeft}                      alt=""
                      class="flex-shrink-0 ml-20 h-6 w-6 rounded-full "
                    /> </div>
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
                  placeholder="3732"
                  class="relative w-full  placeholder-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  placeholder="3732"
                  class="relative w-full  placeholder-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6 mb-6 relative justify-center ml-2 pl-0">
             
              <div class="mt-3 relative justify-center ml-3 pl-8">
                <button
                  type="button"
                  
                  className="text-gray-400 p-3 w-11/12 justify-center   border border-black-500 rounded-[26px] bg-white shadow-sm pl-3  text-center"

                >
                  Confirm
                </button>
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

export default ConfirmFrom1