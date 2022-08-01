import React from "react";
import phoneEye from  '../../assets/phoneEye.svg'
import deposit from  '../../assets/deposit.svg'
import withdraw from  '../../assets/withdraw.svg'
import send from  '../../assets/send.svg'
import receive from  '../../assets/receive.png'


 
const MobileBalanceCard = () => {
  return (
    <div className="" >
      <div className="h-[149px] w-[351px] bg-[#28A9F1] rounded-[15px] pl-[20px] pt-[20px] mx-auto text-[##0A0A0A]  flex flex-col items-start ">
          <p className="text-[11px] font-[400] flex items-center gap-x-[10px]" >Portfolio Balance <img src={phoneEye} alt="" className="h-[9px] w-[9px]" /></p>
          <p className="text-[32px] font-[400]" >$ 0.00</p>
          <p className="text-[11px] font-[500]" >+$0 (0.00%)</p>
      </div>
      <div className="bg-[#ffffff] h-[97px] w-[308px] rounded-[15px] relative z-10 -top-[30px] mx-auto shadow-md flex text-[#0A0A0A]  font-[400] text-[13px] py-[15px] px-[26px] justify-around " >
            <div className="flex flex-col items-center" >
                <img src={deposit} alt="" className="h-[46px] w-[46px]" />
                <p> Deposit</p>
            </div  >
            <div className="flex flex-col items-center" >
                <img src={withdraw} alt="" className="h-[46px] w-[46px]" />
                <p> Withdraw</p>
            </div>
            <div className="flex flex-col items-center" >
                <img src={send} alt="" className="h-[46px] w-[46px]" />
                <p> Send</p>
            </div>
            <div className="flex flex-col items-center" >
                <img src={receive} alt="" className="h-[46px] w-[46px]" />
                <p> Receive</p>
            </div>
      </div>
    </div>
  );
};

export default MobileBalanceCard;
