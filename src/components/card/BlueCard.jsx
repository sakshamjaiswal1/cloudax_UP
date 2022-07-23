import React from 'react'
import net from '../../assets/net.svg'

const BlueCard = (props) => {
    return (
        <div className="w-full bg-theme rounded-md relative p-10">
            <img src={net} className="absolute w-5/12 top-0 right-0" alt="" />
            {props.children}

        </div>
    )
}

export default BlueCard