import React, { useState } from 'react'

const CardExchange = (props) => {
  const [cardBG, setCardBG] = useState("bg-[#f5f5f5]")
  const [btnBG, setBtnBG] = useState("bg-theme");

  const handleClick = () => {
    if(cardBG === "bg-[#f5f5f5]") {
      setCardBG("bg-theme");
      setBtnBG("bg-white");
    } else if(cardBG === "bg-theme"){
      setCardBG("bg-[#f5f5f5]");
      setBtnBG("bg-theme");
    }
  }

  return (
    <div onClick={handleClick} className={`w-full my-2 ${cardBG} rounded-[20px] flex justify-between items-center p-4`}>
        <div  >
           <p  className={`font-[200] text-[16px] ${btnBG === "bg-theme"? "text-black": "text-white"}  `} > {props.children} </p>
             <p className={`font-[200] text-[10px] ${btnBG === "bg-theme"? "text-black": "text-white"}  `} > {props.data}</p>
        </div>
        
        <button className={`p-2 rounded-[20px] ${btnBG === "bg-theme"? "text-white": "text-black"} flex justify-center items-center text-center w-36 ${btnBG}`}>Top Up</button>
    </div>
  )
}

export default CardExchange