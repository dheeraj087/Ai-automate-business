import React from 'react'
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiCheckMark } from "react-icons/gi";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
function Empcomp({empdata,textdata,icon}) {
    console.log();
    
    return (
        <div className='w-[95%] relative m-auto mb-3 bg-linear-to-r mt-2 to-[#16252f5f] to-80% via-5% rounded-sm from-[#29502762] border border-[#4e586377]'>
            <div className='w-[95%] flex m-auto justify-between drop-shadow-2xl rounded-2xl '>
                <div className='flex text-xl'>
                   {icon} {empdata}
                </div>
                <div className='border shadow-[0px_0px_10px_green] backdrop-blur-xs w-16 h-8 p-1 mt-1 flex justify-center items-center' >
                {textdata?.icontext} {textdata?.addnew}
                </div>
            </div>
            <div className='w-[97%] flex font-normal justify-between m-auto '>
                <div className=''>
                    {textdata?.heading}
                </div>
                <div className='text-[#afb200] text-xs mt-1'>
                  {textdata?.rigthicon}  {textdata?.addNewEmp}   { textdata?.righttext}
                </div>
            </div>
        </div>
    )
}

export default Empcomp
