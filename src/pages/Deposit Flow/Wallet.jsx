import React from 'react'
import backArrow from '../../assets/backArrow.svg'
import BlueCard from '../../components/card/BlueCard'
import NGN from '../../assets/NGN.svg'
import eye from '../../assets/eye.svg'
import arrowDown from '../../assets/arrowDown.svg'
import arrowUp from '../../assets/arrowUp.svg'
import Card from '../../components/card/Card'
import Card2 from '../../components/card/Card2'
import greenArrowDown from '../../assets/greenArrowDown.svg'
import greenArrowUp from '../../assets/greenArrowUp.svg'

const Wallet = () => {
  return (
    <div className="px-48">
        <section className="w-full my-4 text-3xl font-bold flex items-center">
            <img src={backArrow} alt="back" />
            Naira Wallet
        </section>
        <main className="flex">
            <div className="w-1/2 p-4">
                <BlueCard>
                    <img src={NGN} className="h-12 w-12 border-2 border-white rounded-full object-fill" alt="" />
                    <p className="text-white flex my-3 gap-2">
                        Naira wallet balance <img src={eye} alt="eye" />
                    </p>
                    <p className="my-2 text-white text-6xl font-bold">
                        $999999
                    </p>
                    <p className="text-white flex my-3 gap-2">
                        +44% (0.00%)
                    </p>

                    <div className="flex">
                            <button className="my-4 w-28 mx-2  rounded-sm p-2 flex items-center justify-center gap-3 border-0 bg-white outline-none">
                                <img src={arrowDown} alt="" /> Deposit
                            </button>
                            <button className="my-4 w-28 mx-2 p-2 rounded-sm  flex items-center justify-center gap-3 border-0 bg-white outline-none">
                                <img src={arrowUp} alt="" /> Withdraw
                            </button>
                        </div>
                </BlueCard>
            </div>
            <div className="w-1/2 p-4">
               <div className="w-full p-4 bg-[#F5F5F5]">
                <div className="flex justify-between">
                    <p>Transaction History</p>
                    <p className="opacity-70">View All</p>
                </div>
                <Card2 img={greenArrowDown} top={"Deposited 111.11BTC"} mt={"my-3"} />
                <Card2 img={greenArrowUp} top={"Withdrew 111.11BTC"} mt={"my-3"} />
                <Card2 img={greenArrowDown} top={"Deposited 111.11BTC"} mt={"my-3"} />
                <Card2 img={greenArrowDown} top={"Deposited 111.11BTC"} mt={"my-3"} />
                <Card2 img={greenArrowUp} top={"Withdrew 111.11BTC"} mt={"my-3"} />
               </div>
            </div>
        </main>
    </div>
  )
}

export default Wallet