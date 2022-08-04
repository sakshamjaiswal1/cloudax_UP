import React from "react";
import Header from "../../components/Header/Header";
import arrowLeft from "../../assets/arrowLeft.svg";
import bitcoinLetter from "../../assets/bitcoinLetter.svg";

const BitSellCoin = () => {
  return (
    <>
      <Header />
      <div className="flex ml-20  items-end ">
  
        <img
          src={arrowLeft}
          alt=""
          className="flex-shrink-0 ml-20 h-6 w-6 rounded-full "
        />
      </div>
      <div className="flex justify-center">
        <div>
          
          <div>
            <p>How much Bitcoin would you like to sell?</p>
          </div>
          <div className="border border-slate-300 rounded-[25px]">
            
            <div>
              
              <button className="rounded-[25px] text-white  bg-[#28A9F1]">
                
                <span>
                  
                  <img src={bitcoinLetter} alt="" />
                </span>
                <span>Bitcoin</span>
              </button>
            </div>
            <div> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BitSellCoin;
