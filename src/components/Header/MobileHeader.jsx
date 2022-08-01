import React from 'react'
import profile from '../../assets/profile.svg'
import bell from '../../assets/bell.svg'
const MobileHeader = () => {
  return (
    <div className='flex items-center mt-[51px] mb-[32px]' >
        <img src={profile} alt="" className='h-[35px] w-[35px] flex-[1_1_0]' />
        <div className='text-[#0A0A0A] flex-[4_4_0]' >
            <p className='text-[12px] font-[400]' >Hello</p>
            <p  className='text-[18px] font-[500]'>Investor Seed</p>

        </div>
        <img src={bell} alt=""  className='h-[18px] w-[18px] flex-[1_1_0]' />
    </div>
  )
}

export default MobileHeader