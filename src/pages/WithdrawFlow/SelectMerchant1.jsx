import React from 'react'
import CardExchange from '../../components/card/CardExchange'
import Header from '../../components/Header/Header'
import arrowLeft from "../../assets/arrowLeft.svg";
const SelectMerchant1 = () => {
  return (
    <><Header/>
    <div className="flex ml-20  items-end " > <img
                      src={arrowLeft}                      alt=""
                      class="flex-shrink-0 ml-20 h-6 w-6 rounded-full "
                    /> </div>
    <div className="flex justify-center">

<div class=" w-4/12 h-5/6 bg-white rounded-lg border border-black-400  dark:bg-black-800 dark:border-black-700" >
<div className='p-7 pb-0' >
<div> <p className='font-[400] text-[12px]'>Select a P2P Merchant</p></div>
<div >
  <span className='bg-[#28A9F1]  dark:bg-black-800' >
<CardExchange  children="OTC Exchange" data="324 Completed Trades"/>
</span>
<CardExchange children="Seed Investments" data="298 Completed Trades"/>
<CardExchange children="Kingz Exchange" data="276 Completed Trades"/>
<CardExchange children="Agba Logan Int’l" data="104 Completed Trades"/>
<CardExchange children="Agba Logan Int’l" data="104 Completed Trades"/>
</div>
<div class="mt-5 relative justify-center ml-3 pl-8 pb-2" >
                <button
                  type="button"
                  placeholder="0123456789"
                  class="text-white p-3 w-11/12 justify-center  border border-gray-300 rounded-3xl bg-[#28A9F1] shadow-sm pl-3  text-center  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                 Confirm
                </button>
              </div>
</div>

</div>
    </div>
    </>
  )
}

export default SelectMerchant1