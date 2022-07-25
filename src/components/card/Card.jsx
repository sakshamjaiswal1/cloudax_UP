import React from 'react'

const Card = (props) => {
    let background;
    if(props.left === "Tether"){
        background= "#00A857";
    } else if(props.left === "Bitcoin"){
        background = "#FF9900"
    } else if (props.left === "Ethereum"){
        background = "#9260FE";
    } else if (props.left === "Cloudax"){
        background = "#02A9F1";
    }
    return (
        <div className="w-full my-10 flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
                <img style={{background: background}} src={props.img} alt="" className="w-10 object-contain h-10 rounded-full" />
                <div>
                {props.left}
                <div className="text-xs">
                    {props.leftBottom}
                </div>
                </div>
               
            </div>
            <div>
                <p>{props.rightTop}</p>
                <p className="text-green-600 text-sm">{props.rightBottom}</p>
            </div>
        </div>
    )
}

export default Card