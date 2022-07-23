import React, { useState } from 'react'

const SimpleCard = (props) => {
    const [bg, setBg] = useState("");
    const handleClick = () => {
        if(bg ===" #28A9F1"){
            setBg("")
        } else {
            setBg("#28A9F1")
        }
    }
  return (
    <section onClick={handleClick} style={{ background: bg}} className="w-full p-5 my-3 relative border-gray-300 border-2 rounded-lg">
        {props.children}
        {props.unavailable &&  <button className="text-sm font-semibold absolute top-1 right-1 bg-gray-400 flex justify-center items-center text-center rounded-lg p-1">Unavailable</button> }
        
    </section>
  )
}

export default SimpleCard