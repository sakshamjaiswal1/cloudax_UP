import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import LargeCard from '../../components/card/LargeCard'
import backArrow from '../../assets/backArrow.svg'
import PaymentModal from '../../components/Modals/PaymentModal'

const Payment = () => {
    const [display, setDisplay] = useState("none");
    const handleClick = () => {
        setDisplay("flex");
    }
    const closeHandler = () => {
        setDisplay("none");
    }
    
    return (
        <>
            <Header />
            <PaymentModal closeHandler={closeHandler} display={display}/>
            <img src={backArrow} alt="" />
            <div>
                <LargeCard>
                    <p className="text-2xl w-full text-center">Pay the Seller</p> <br />
                    <p className="text-sm opacity-70 w-full text-center">Amount to be paid:</p>
                    <p className="text-5xl text-center w-full font-bold my-5">NGN 123212</p>

                    <p className="w-full text-sm text-center opacity-70">Bank transfer details:</p>
                    <hr />
                    <div className="flex px-16 justify-between my-3 items-center">
                        <p className="text-sm opacity-70">Name:</p>
                        <p className="text-4xl">RANDOM NAME</p>
                    </div>
                    <hr />
                    <hr />
                    <div className="flex px-16 justify-between my-3 items-center">
                        <p className="text-sm opacity-70">Account Number:</p>
                        <p className="text-4xl">RANDOM Number</p>
                    </div>
                    <hr />
                    <hr />
                    <div className="flex px-16 justify-between my-3 items-center">
                        <p className="text-sm opacity-70">Bank Name:</p>
                        <p className="text-4xl">RANDOM NAME</p>
                    </div>
                    <hr />
                    <br />
                    <br />
                    <button onClick={handleClick} className="w-8/12 rounded-[40px] bg-theme p-5 m-auto flex justify-center items-center text-center text-white">
                        I have made payment
                    </button>
                </LargeCard>
            </div>
        </>
    )
}

export default Payment