import React from "react";
import Ellipse from "../../assets/Ellipse.svg";
import Vector from "../../assets/Vector.svg";
import Header from "../../components/Header/Header";

const Form = () => {
  return (
    <> <Header/>
    <div className="flex justify-center">
      <div class="w-4/12 h-5/6 bg-white rounded-lg border border-black-400  dark:bg-black-800 dark:border-black-700" >
      <form  >
        <div className="bg-grey  ">
          <div className="p-5 pb-3 " >
            <div className="mt-6">
              <label
                id="listbox-label"
                class="block text-sm font-medium text-gray-700 font-sans"
              >
                Bank
              </label>
              <div class="mt-1 relative">
                <button
                  type="button"
                  class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                >
                  <span class="flex items-center">
                    <img
                      src={Ellipse}
                      alt=""
                      class="flex-shrink-0 h-6 w-6 rounded-full"
                    />
                    <span class="ml-3 block truncate  "> Select Bank </span>{" "}
                    <span class=" relative ml-5 pl-3 text-end">
                     
                      <img class="relative  pl-3 text-end" src={Vector} alt="" />
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-6" >
              <label
                id="listbox-label"
                class="block text-sm font-medium text-gray-700  font-sans"
              >
                Account Number
              </label>
              <div class="mt-1 relative">
                <input
                  type="text"
                  placeholder="0123456789"
                  class="relative w-full bg-white placeholder-gray-800 border border-gray-300 rounded-xl shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6" >
              <label
                id="listbox-label"
                class="block text-sm font-medium text-gray-700  font-sans"
              >
                Enter BVN
              </label>
              <div class="mt-1 relative">
                <input
                  type="text"
                  placeholder="0123456789"
                  class="relative w-full placeholder-gray-800 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6 mb-6 relative justify-center ml-2 pl-0">
             
              <div class="mt-3 relative justify-center ml-3 pl-8">
                <button
                  type="button"
                  placeholder="0123456789"
                  class=" text-slate-400 p-4 w-11/12 justify-center bg-white border border-gray-300 rounded-3xl shadow-sm pl-3  text-center  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
