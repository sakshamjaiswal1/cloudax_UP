import React, { useState } from 'react'
import backArrow from '../../assets/backArrow.svg'
import CardExchange from '../../components/card/CardExchange'
import LargeCard from '../../components/card/LargeCard'
import Header from '../../components/Header/Header'

const Services = () => {
    const [bg, setBg] = useState("");
    const handleClick = () => {
        if (bg === " #28A9F1") {
            setBg("none")
        } else {
            setBg("#28A9F1")
        }
    }
    return (
        <>
        <Header/>
        <div className="px-48 pb-16">
            
            <img src={backArrow} alt="" className="my-4" />
            <LargeCard>
                <p className="text-sm opacity-80">
                    Select a p2p merchant
                </p>
                <CardExchange>
                    <p className='text-2xl'>OTC Exchange</p>
                    <p>999 Completed Trades</p>
                </CardExchange>
                <CardExchange>
                    <p className='text-2xl'>Seed Investment</p>
                    <p>999 Completed Trades</p>
                </CardExchange>
                <CardExchange>
                    <p className='text-2xl'>Kingsz Exchange</p>
                    <p>999 Completed Trades</p>
                </CardExchange>
                <CardExchange>
                    <p className='text-2xl'>Agba Logan Int'l</p>
                    <p>999 Completed Trades</p>
                </CardExchange>
                <CardExchange>
                    <p className='text-2xl'>Agba Logan Int'l</p>
                    <p>999 Completed Trades</p>
                </CardExchange>
                <button onClick={handleClick} style={{ background: bg }} className="w-8/12 rounded-[40px] p-3 m-auto flex justify-center items-center text-center text-gray-400 border-2 border-gray-300">
                    Proceed
                </button>
            </LargeCard>
        </div>
        </>
    )
}

export default Services