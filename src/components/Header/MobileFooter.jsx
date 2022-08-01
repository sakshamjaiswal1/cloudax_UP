import React from 'react'
import home from '../../assets/home.svg'
import setting from '../../assets/setting.svg'

const MobileFooter = () => {
  return (
    <div className='flex px-[43px] gap-x-[38px] py-[28px]' >
        <div className=' flex flex-col items-center'>
            <img src={home} alt="" className='h-[23px] w-[23px] flex ' />
            <p className='text-[#28A9F1] text-[8px] font-[500]' >Home</p>
        </div>
        <div  className=' flex flex-col items-center' >
            <img src={setting} alt="" className='h-[23px] w-[23px]' />
            <p className='text-[#000000] text-[8px] font-[500]' >Explore</p>
        
        </div>
        <div  className=' flex flex-col items-center' >
            <img src={setting} alt="" className='h-[23px] w-[23px]' />
            <p className='text-[#000000] text-[8px] font-[500]' >Wallets</p>
        
        </div>
        <div className=' flex flex-col items-center' >
            <img src={setting} alt="" className='h-[23px] w-[23px]' />
            <p className='text-[#000000] text-[8px] font-[500]' >Savings</p>
        
        </div>
        <div  className=' flex flex-col items-center' >
            <img src={setting} alt="" className='h-[23px] w-[23px]' />
            <p className='text-[#000000] text-[8px] font-[500]' >Accounts</p>
        
        </div>
    </div>
  )
}

export default MobileFooter