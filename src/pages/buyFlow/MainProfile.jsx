import React from 'react'
import net from '../../assets/net.svg'
import eye from '../../assets/eye.svg'
import arrowDown from '../../assets/arrowDown.svg'
import arrowUp from '../../assets/arrowUp.svg'
import greenArrowDown from '../../assets/greenArrowDown.svg'
import greenArrowUp from '../../assets/greenArrowUp.svg'
import creditCard from '../../assets/creditCard.svg'
import moneyWithdraw from '../../assets/moneyWithdraw.svg'
import NGN from '../../assets/NGN.svg'
import Card from '../../components/card/Card'
import tether from '../../assets/tether.svg'
import bitcoin from '../../assets/bitcoin.svg'
import ethereum from '../../assets/ethereum.svg'
import cloudax from '../../assets/cloudax.svg'
import Card2 from '../../components/card/Card2'
import net2 from '../../assets/net2.svg'
import logoCloud from '../../assets/logoCloud.svg'
import Header from '../../components/Header/Header'
const MainProfile = () => {
  return (
    <div className="flex flex-col">
    <Header/>
<div className="px-48 flex justify-between">
    <div className=" w-1/2 p-5">
        <div className="w-full bg-theme rounded-md relative p-10">
            <img src={net}  className="absolute w-5/12 top-0 right-0" alt="" />
            <p className="text-white flex gap-5 items-center">Portfolio Balance <img src={eye} alt="" /></p>

            <h1 className="text-white font-extrabold my-2 text-6xl">$0.00</h1>
            <p className="text-white">+ $0 (0.00%)</p>

            <div className="flex">
                <button className="my-4 w-28 mx-2  rounded-sm p-2 flex items-center justify-center gap-3 border-0 bg-white outline-none">
                    <img src={arrowDown} alt="" /> Send
                </button>
                <button className="my-4 w-28 mx-2 p-2 rounded-sm  flex items-center justify-center gap-3 border-0 bg-white outline-none">
                    <img src={arrowUp} alt="" /> Receive
                </button>
            </div>

        </div>

        <div className="mt-3 py-2 px-14 w-full">
            <div className="flex justify-between w-full">
                <p>Recent Transactions</p>
                <p className="opacity-80">View All</p>
            </div>
            <Card2 img={greenArrowDown} top={"Received 111.11BTC"} bottom={"From xxxxxxxxxxxxxxxxx"}/>
            <Card2 img={greenArrowUp} top={"Sent 111.11BTC"} bottom={"From xxxxxxxxxxxxxxxxx"}/>
            <Card2 img={greenArrowDown} top={"Received 111.11BTC"} bottom={"From xxxxxxxxxxxxxxxxx"}/>
            
        </div>

        <div className="w-full py-10 flex justify-center">
            <button className="border-2 border-black p-2 bg-transparent flex justify-center text-center text-sm w-64 rounded-3xl">
                View Transactions
            </button>
        </div>
    </div>
    <div className=" w-1/2 p-5">
        <div className="w-full mt-12 flex justify-between items-center">
            <p>Wallet</p>
            <div className="flex gap-2">
                <button className="bg-theme rounded-sm text-sm p-2 gap-2 w-20 flex justify-center items-center text-white">
                  <img src={creditCard} alt="" />  Buy
                </button>
                <button className="bg-theme rounded-sm text-sm p-2 gap-2 w-20 flex justify-center items-center text-white">
                    <img src={moneyWithdraw} alt="" />
                    Sell
                </button>
            </div>
        </div>
        <Card img={NGN} left={"NGN"} rightTop={"NGN 231000"}/>
        <Card img={tether} leftBottom={"$1.022"} rightBottom={"+$1 (0.00%)"} left={"Tether"} rightTop={"$44444"}/>
        <Card img={bitcoin} leftBottom={"$1.022"} rightBottom={"+$1 (0.00%)"} left={"Bitcoin"} rightTop={"$44444"}/>
        <Card img={ethereum} leftBottom={"$1.022"} rightBottom={"+$1 (0.00%)"} left={"Ethereum"} rightTop={"$44444"}/>
        <Card img={cloudax} leftBottom={"$1.022"} rightBottom={"+$1 (0.00%)"} left={"Cloudax"} rightTop={"$44444"}/>

        <div className="mt-20 w-full bg-theme rounded-md p-10 relative">
            <p className="text-2xl text-white font-bold">
                Send and receive crypto <br />
                in minutes.
            </p>
            <div className="my-4">
                <img src={logoCloud} alt="" />
            </div>
            <img src={net2} className="absolute right-0 bottom-0" alt="" />
        </div>
    </div>
</div>
</div>
  )
}

export default MainProfile