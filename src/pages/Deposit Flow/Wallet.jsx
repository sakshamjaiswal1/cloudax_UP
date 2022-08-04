import React from 'react'
import backArrow from '../../assets/backArrow.svg'
import BlueCard from '../../components/card/BlueCard'
import NGN from '../../assets/NGN.svg'
import eye from '../../assets/eye.svg'
import arrowDown from '../../assets/arrowDown.svg'
import arrowUp from '../../assets/arrowUp.svg'
import Card2 from '../../components/card/Card2'
import greenArrowDown from '../../assets/greenArrowDown.svg'
import arrowUpRed from '../../assets/arrowUpRed.svg'

const Wallet = () => {
  return (
    <div className="px-48">
        <section className="w-full my-4 text-3xl font-bold flex items-center">
            <img src={backArrow}  alt="back" />
            Naira Wallet
        </section>
        <main className="flex">
            <div className="w-[90%] p-2">
                <BlueCard>
                    <img src={NGN} className="h-12 w-12 border-2 border-white rounded-full object-fill" alt="" />
                    <p className="text-white flex my-1 gap-1">
                        Naira wallet balance <img   src={eye} alt="eye" />
                    </p>
                    <p className="my-2 text-white text-[44px] font-bold">
                    $675,634.00
                    </p>
                    <p className="text-white flex my-3 gap-2">
                        +44% (0.00%)
                    </p>

                    <div className="flex">
                            <button className="my-4 w-28 mx-2  text-[14px] rounded-[5px] p-2 flex items-center justify-center gap-3 border-0 bg-white outline-none">
                                <img src={arrowDown}  alt="" /> Deposit
                            </button>
                            <button className="my-4 w-28 mx-2 text-[14px] rounded-[5px]  flex items-center justify-center gap-3 border-0 bg-white outline-none">
                                <img src={arrowUp} alt="" /> Withdraw
                            </button>
                        </div>
                </BlueCard>
            </div>
            <div className="w-[590px] h-[424px] p-4 ">
               <div className="w-full p-4 bg-[#F5F5F5] rounded-[13px] px-[10px] pt-[30px]">
                <div className="flex justify-between">
                    <p>Transaction History</p>
                    <p className="opacity-70">View All</p>
                </div>
                <Card2 img={greenArrowDown} top={"Deposited 111.11BTC"} mt={"my-3"} />
                <Card2 img={arrowUpRed} top={"Withdrew 111.11BTC"} mt={"my-3"} />
                <Card2 img={greenArrowDown} top={"Deposited 111.11BTC"} mt={"my-3"} />
                <Card2 img={greenArrowDown} top={"Deposited 111.11BTC"} mt={"my-3"} />
          
               </div>
            </div>
        </main>
    </div>
  )
}

export default Wallet