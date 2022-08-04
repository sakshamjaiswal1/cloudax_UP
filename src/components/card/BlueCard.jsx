import React from 'react'
import net from '../../assets/net.svg'

const BlueCard = (props) => {
    return (
        <div className="w-max bg-theme rounded-[13px] relative p-10">
            <img src={net} className="absolute w-[170px]  top-0 right-0" alt="" />
            {props.children}

        </div>
    )
}

export default BlueCard