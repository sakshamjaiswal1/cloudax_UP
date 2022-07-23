import React, { useState } from 'react'
import backArrow from '../../assets/backArrow.svg'
import NGN from '../../assets/NGN.svg'
import LargeCard from '../../components/card/LargeCard'
import SimpleCard from '../../components/card/SimpleCard'

const FormTransaction = () => {
    const [bg, setBg] = useState("");
    const handleClick = () => {
        if(bg ===" #28A9F1"){
            setBg("")
        } else {
            setBg("#28A9F1")
        }
    }
  return (
    <div className="px-48 pb-16">
        <img src={backArrow} alt="" className="my-4" />
        <LargeCard>
            Select currency <br />
            <select className=" bg-green-200 mb-4 p-3 rounded-lg flex justify-center items-center w-full focus:outline-none" name="" id="">
                <option value="NGN" className="flex gap-3"><img src={NGN} alt="" />  Nigerian Naira (NGN)</option>
            </select>
            Input Amount
            <div className="flex w-full p-3 mb-4 border-gray-300 border-2 rounded-lg">
                <select name="" className="border-0 appearance-none outline-none flex justify-center items-center bg-transparent" id="">
                    <option value="">NGN</option>
                    <option value="">NGN</option>
                    <option value="">NGN</option>
                    <option value="">NGN</option>
                    <option value="">NGN</option>
                    <option value="">NGN</option>
                </select>
                <input type="text" className="pl-4 border-0 outline-none focus:outline-none" placeholder="0.00" />
            </div>
            Fund with
            <SimpleCard>
                <p className="font-bold">P2P Express</p>
                <p>
                Fund your account with Naira from verified and trusted merchants here on Cloudax.
                </p>
            </SimpleCard>
            <SimpleCard unavailable={true}>
                <p className="font-bold">P2P Express</p>
                <p>
                Fund your account with Naira from verified and trusted merchants here on Cloudax.
                </p>
            </SimpleCard>
            <SimpleCard unavailable={true}>
                <p className="font-bold">P2P Express</p>
                <p>
                Fund your account with Naira from verified and trusted merchants here on Cloudax.
                </p>
            </SimpleCard>
            <br />
            <br />
            <button onClick={handleClick} style={{background: bg}} className="w-8/12 rounded-[40px] p-3 m-auto flex justify-center items-center text-center text-gray-400 border-2 border-gray-300">
                Proceed
            </button>
        </LargeCard>
    </div>
  )
}

export default FormTransaction