import React from "react";
import CardExchange from "../../components/card/CardExchange";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
const ConfirmFormWithModal = () => {
  const [showModal, setShowModal] = React.useState(true);
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
      <div className="flex justify-center">
        <div class=" w-4/12 h-5/6 bg-white rounded-lg border border-black-400  dark:bg-black-800 dark:border-black-700">
          <div className="p-7 pb-0">
            <div>
              {" "}
              <p className="font-[400] text-[12px]">Select a P2P Merchant</p>
            </div>
            <div>
              <CardExchange
                children="OTC Exchange"
                data="324 Completed Trades"
              />
              <CardExchange
                children="Seed Investments"
                data="298 Completed Trades"
              />
              <CardExchange
                children="Kingz Exchange"
                data="276 Completed Trades"
              />
              <CardExchange
                children="Agba Logan Int’l"
                data="104 Completed Trades"
              />
              <CardExchange
                children="Agba Logan Int’l"
                data="104 Completed Trades"
              />
            </div>
            <div class="mt-3 relative justify-center ml-3 pl-8 pb-2">
              <button
                type="button"
                placeholder="0123456789"
                onClick={() => setShowModal(true)}
                class="text-white p-4 w-11/12 justify-center  border border-gray-300 rounded-3xl bg-[#28A9F1] shadow-sm pl-3  text-center  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      <div className="flex  w-full items-center min-h-screen ">
                        <div className="relative w-3/12 max-w-lg p-4 mx-auto bg-white rounded-2xl shadow-lg">
                          <div className="mt-3 mb-[10px] pr-[14px] sm:flex">
                            <div className="mt-2 text-center sm:ml-4 ">
                              <h4 className="font-[500] ml-2 text-[10px]  text-gray-800">
                                Enter Transaction Pin
                              </h4>
                              <div class="mt-1 ml-6 pt-3 relative">
                                <input
                                  type="text"
                                  placeholder="3732"
                                  class="relative w-11/12 text-center justify-between placeholder-gray-500 bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-2  cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-bg-[#28A9F1] sm:text-sm"
                                />
                              </div>

                              <div className="items-center w-full justify-center gap-2 mt-4 sm:flex pl-5 rounded-lg ">
                                <button
                                 className=" bg-[#28A9F1] text-[#F9F9FB] p-3 w-11/12 justify-center   border border-black-500 rounded-[26px] shadow-sm pl-3  text-center"
                                  onClick={() => setShowModal(false)}
                                >
                                  Proceed
                                </button>
                              </div>
                            </div>
                          </div>
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
  );
};

export default ConfirmFormWithModal;
