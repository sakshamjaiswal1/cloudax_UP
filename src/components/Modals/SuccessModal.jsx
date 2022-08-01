import React from 'react'
import successalert from '../../assets/successalert.svg'

const SuccessModal = ({display}) => {
  return (
    <div  style={{background: "#0000003a", display:display}} className="fixed top-0 z-[9999] flex w-screen h-screen justify-center items-center">
    <div className="bg-white z-[9999] flex flex-col items-center justify-center p-5 w-[274px] h-[274px] m-auto rounded-[44px]">
       <img src={successalert} alt="" />
       <p className='text-[#000000] font-[400] text-[20px] pt-[10px]'>Updated Successfully</p>
    </div>
</div>
  )
}

export default SuccessModal