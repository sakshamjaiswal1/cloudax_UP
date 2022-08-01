import React from "react";
import arrowLeft from "../../assets/arrowLeft.svg";
import avtarimg from "../../assets/avtarimg.svg";
import Header from "../../components/Header/Header";
const Form1WithModal = () => {
  const [showModal, setShowModal] = React.useState(true);
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
        <div class=" w-4/12 h-5/6 bg-white rounded-lg border border-black-400  dark:bg-black-800 dark:border-black-700">
          <form>
            <div className="bg-grey  ">
              <div className="p-5 pb-3 ">
                <div className="mt-4">
                  <label
                    id="listbox-label"
                    class="text-black-700 font-[400] text-[14px] "
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
                          src={avtarimg}
                          alt=""
                          class="flex-shrink-0 h-6 w-6 rounded-full"
                        />
                        <span class="ml-3 block truncate text-black-700 font-[400] text-[14px]   ">
                          {" "}
                          Guaranty Trust Bank{" "}
                        </span>{" "}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    id="listbox-label"
                    class=" text-black-700 font-[400] text-[14px] "
                  >
                    Account Number
                  </label>
                  <div class="mt-1 relative">
                    <input
                      type="text"
                      placeholder="0123456789"
                      class="relative w-full bg-white border placeholder-gray-800 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    id="listbox-label"
                    class="text-black-700 font-[400] text-[14px] "
                  >
                    Enter BVN
                  </label>
                  <div class="mt-1 relative">
                    <input
                      type="text"
                      placeholder="93471253182"
                      class="relative w-full bg-white border placeholder-gray-800 border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-6 mb-6 relative justify-center ml-2 pl-0">
                  <div class="mt-3 relative justify-center ml-3 pl-8">
                    <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      class="text-white p-4 w-11/12 justify-center   font-[400] text-[14px]  border border-gray-300 rounded-3xl bg-[#28A9F1] shadow-sm pl-3  text-center  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      Verify BVN
                    </button>
                    {showModal ? (
                      <>
                        <div className="flex justify-center ">
                          <div className="fixed w-full inset-0 z-10 overflow-y-auto">
                            <div
                              className="fixed inset-0 w-full h-full bg-black opacity-40"
                              onClick={() => setShowModal(false)}
                            ></div>
                            <div className="flex mt-[0px] justify-center  w-full  items-center min-h-screen ">
                              <div className="relative w-26 text-[9px]  flex justify-center bg-white rounded-2xl shadow-lg">
                                {" "}
                                <div className="flex justify-center flex-col h-[160px]  w-[420px] ">
                                  {" "}
                                  <div className="flex justify-center items-center mr-5 flex-col">
                                    <p className="text-black  font-[500] text-[12px] pt-4 pb-0 ml-10">
                                      Your BVN is being verified.{" "}
                                    </p>
                                    <p className="  text-black font-[500] text-[12px]  pb-0 ml-10">
                                      You will be notified as soon as it is
                                      approved.
                                    </p>
                                  </div>
                                  <div className="flex justify-center items-center  pt-5 pb-4">
                                    <button
                                      type="button"
                                      className="text-white  bg-[#28A9F1] text-[13px]  p-3 w-[230px] justify-center   border border-black-500 rounded-[26px]  shadow-sm pl-3  text-center"
                                    >
                                      Return to Homepage
                                    </button>
                                  </div>
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
  );
};

export default Form1WithModal;
