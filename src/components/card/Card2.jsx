import React from 'react'

const Card2 = (props) => {
    
    return (
        <div className={`bg-white flex w-full p-2 gap-2 ${props.mt}`}>
            <div className=" bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center">
                <img src={props.img} alt="" />

            </div>
            <div className="w-full flex flex-col justify-center">
                <p className="m-0">{props.top}</p>
                {props.bottom && 
                <p className="m-0 opacity-90 text-sm">{props.bottom}</p>
                } 
                
            </div>
        </div>
    )
}

export default Card2