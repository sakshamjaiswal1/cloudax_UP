import React from "react";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
import flag from "../../assets/flag.svg";

const FormTransaction = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="flex ml-20  items-end ">
        {" "}
        <img
          src={arrowLeft}
          alt=""
          class="flex-shrink-0 ml-20 h-6 w-6 rounded-full "
        />{" "}
      </div>
      <div className="flex justify-center">
        <div className="w-5/12 h-4/6 bg-white rounded-lg border border-black-400  dark:bg-black-800 dark:border-black-700">
          <form>
            <div className="bg-grey  ">
              <div className="p-5 pb-3 ">
                <div className="mt-4">
                  <label
                    id="listbox-label"
                    class="block  text-black-700 font-[400] text-[14px] "
                  >
                    Select Currency
                  </label>
                  <div className="mt-1 relative">
                    <button
                      type="button"
                      className="relative w-full bg-[#C0FF8E] border border-black-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default "
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      aria-labelledby="listbox-label"
                    >
                      <span className="flex ">
                        <img
                          src={flag}
                          alt=""
                          className="flex-shrink-0 h-6 w-6 rounded-full "
                        />
                        <span className="ml-3 block truncate text-[#393939] font-[500] text-[18px] ">
                          {" "}
                          Nigerian Naira (NGN){" "}
                        </span>{" "}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    id="listbox-label"
                    class="block text-[#393939] font-[400] text-[14px]"
                  >
                    Input Amount
                  </label>
                  <div class="mt-1 relative ">
                   <label htmlFor="ngn"className="bg-white border border-black-300 rounded-[10px] shadow-sm flex" >
                   <p className="py-[10px] px-[25px] text-[19px] font-[700] text-[#000000]" >NGN</p>
                   <input
                      type="text"
                      placeholder="    0.00"
                      className="relative w-full border-none placeholder-gray-400  pl-3 pr-10 py-2 text-left cursor-default "
                      id="ngn"
                    />
                   </label>
                    
                  </div>
                </div>

                <div className="mt-6 mb-6 relative justify-center ">
                  <label
                    id="listbox-label"
                    class="block text-[#393939] font-[400] text-[14px] pb-[8px]"
                  >
                    Fund with
                  </label>
                  <div className="border-[1px]  rounded-[16px] ">
                    <div className="p-[20px] ">
                      {" "}
                      <p className="text-[#393939] font-[500] text-[18px]">
                        P2P Express
                      </p>
                      <p className="text-[#393939] font-[400] text-[12px] pt-[5px]">
                        Fund your account with Naira from verified and <br />{" "}
                        trusted merchants here on Cloudax.
                      </p>
                    </div>
                  </div>
                  <div className="border-[1px] mt-[14px] rounded-[16px] ">
                    <div className="p-[20px] ">
                      <div className="flex justify-between">
                        <p className="text-[#393939]  font-[500] text-[18px]">
                          Card
                        </p>{" "}
                        <span className="text-[#393939] bg-[#D9D9D9] font-[500] border border-black-300  w-[80px] h-[25px] rounded-[20px] text-[10px]">
                          {" "}
                          <p className="pt-[5px] pb-[10px] pl-[12px]">
                            Unavailable
                          </p>
                        </span>
                      </div>
                      <p className="text-[#393939] font-[400] text-[12px] pt-[5px]">
                        Fund your account with Naira using a debit <br />
                        or credit card.
                      </p>
                    </div>
                  </div>
                  <div className="border-[1px] mt-[14px] rounded-[16px] ">
                    <div className="p-[20px] ">
                      <div className="flex justify-between">
                        <p className="text-[#393939]  font-[500] text-[18px]">
                          Bank Transfer
                        </p>{" "}
                        <span className="text-[#393939] bg-[#D9D9D9] font-[500] border border-black-300  w-[80px] h-[25px] rounded-[20px] text-[10px]">
                          {" "}
                          <p className="pt-[5px] pb-[10px] pl-[12px]">
                            Unavailable
                          </p>
                        </span>
                      </div>
                      <p className="text-[#393939] font-[400] text-[12px] pt-[5px]">
                        Fund your account with Naira directly from a <br /> bank
                        transfer.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 relative justify-center ml-3 pl-8">
                    <button
                      type="button"
                      placeholder="0123456789"
                      className="text-gray-400 p-3 w-11/12 justify-center   border border-black-500 rounded-[26px] bg-white shadow-sm pl-3  text-center"
                    >
                      Proceed
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

export default FormTransaction;
