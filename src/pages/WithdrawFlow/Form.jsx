import React from "react";
import Ellipse from "../../assets/Ellipse.svg";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";

const Form = () => {
  return (
    <> <Header/>
    <div className="flex ml-20  items-end " > <img
                      src={arrowLeft}                      alt=""
                      class="flex-shrink-0 ml-20 h-6 w-6 rounded-full "
                    /> </div>
    <div className="flex justify-center">
      <div class="w-4/12 h-5/6 bg-white rounded-lg border border-black-400  dark:bg-black-800 dark:border-black-700" >
      <form  >
        <div className="bg-grey  ">
          <div className="p-5 pb-3 " >
            <div className="mt-4">
              <label
                id="listbox-label"
                class="block  text-black-700 font-[400] text-[14px] "
              >
                Bank
              </label>
              <div class="mt-1 relative">
                <button
                  type="button"
                  class="relative w-full bg-white border border-black-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                >
                  <span class="flex ">
                    <img
                      src={Ellipse}
                      alt=""
                      class="flex-shrink-0 h-6 w-6 rounded-full "
                    />
                    <span class="ml-3 block truncate text-black-700 font-[500] text-[14px] "> Select Bank </span>{" "}
                   
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-6" >
              <label
                id="listbox-label"
                class="block text-black-700 font-[500] text-[14px]"
              >
                Account Number
              </label>
              <div class="mt-1 relative">
                <input
                  type="text"
                  placeholder="0123456789"
                  class="relative w-full placeholder-gray-400 bg-white border border-black-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6" >
              <label
                id="listbox-label"
                class="block text-black-700 font-[500] text-[14px]"
              >
                Enter BVN
              </label>
              <div class="mt-1 relative">
                <input
                  type="text"
                  placeholder="0123456789"
                  class="relative w-full placeholder-gray-400 bg-white border border-black-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6 mb-6 relative justify-center ml-2 pl-0">
             
              <div class="mt-3 relative justify-center ml-3 pl-8">
                <button
                  type="button"
                  placeholder="0123456789"
                  className="text-gray-400 p-3 w-11/12 justify-center   border border-black-500 rounded-[26px] bg-white shadow-sm pl-3  text-center"
                >
                  Verify BVN
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
    </>
  );
};

export default Form;
