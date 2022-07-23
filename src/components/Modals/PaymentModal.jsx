import React from 'react'

const PaymentModal = (props) => {
    const handleClick = (e) => {
        e.stopPropagation();
    }
  return (
    <div onClick={props.closeHandler} style={{background: "#0000003a", display:props.display}} className="fixed top-0 z-[9999] w-screen h-screen justify-center items-center">
        <div className="bg-white z-[9999] p-5 w-1/3 m-auto rounded-lg">
            <p>Your account will be credited as soon as the transfer is received.</p>
            <button onClick={handleClick} className="w-8/12 rounded-[40px] bg-theme p-5 m-auto flex justify-center items-center text-center text-white">
                Return to Homepage
            </button>
        </div>
    </div>
  )
}

export default PaymentModal