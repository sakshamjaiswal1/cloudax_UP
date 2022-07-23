import React from 'react'
import cloudLogo from '../../assets/cloudLogo.svg'
import bell from '../../assets/bell.svg'
import profile from '../../assets/profile.svg'
const Header = () => {
  return (
    <nav className=''>
        <ul className='flex h-[90px] bg-[##F5F5F5;] items-center'>
            <li className='pl-[161px] pr-[80px]'>
                <img src={cloudLogo}  className='w-[211px] h-[27px]' alt="" />
            </li>
            <li className='pr-[57px]' >Wallet</li>
            <li className='pr-[57px]' >Saving</li>
            <li className='pr-[57px]' >Explore</li>
            <li className='' >Settings</li>
            <li className='pl-[320px]' >
                <img src={bell} className='h-[28px] w-[28px]' alt="" />
            </li>
            <li className='pl-[59px] pr-[100px]' ><img src={profile} className='h-[55px] w-[55px]' alt="" /></li>
        </ul>
    </nav>
  )
}

export default Header