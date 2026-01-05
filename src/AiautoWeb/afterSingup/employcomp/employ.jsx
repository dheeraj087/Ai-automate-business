import React from 'react'
import Empcomp from './Empcomp';
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiCheckMark } from "react-icons/gi";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
function Employ() {

  const Empdata = {
    totalemp: 145,
    tudaysPrasent: 122,
    addNewEmp: 5
  }
  let absent =Empdata.totalemp - Empdata.tudaysPrasent;
  return (
    <div className='w-[95%] ml-4 mt-4  text-white bg-[#000000]/30% border shadow shadow-white border-[#4b4b4b] border-b-green-500  '>
      <h3 className={`font-['Oswald',"san-serif"] text-xl ml-4 text-[#c1c1c1]`}>Total Employess :- {145}</h3>
      <Empcomp empdata={Empdata.totalemp} textdata={
        {
          heading: "Total Employess",
          icontext: '👤+',
          righttext: "  this month",
          rigthicon: "^  ",
          addnew: Empdata.addNewEmp
        }
      } icon={<HiMiniUserGroup size={25} className='text-[#c1c1c1] text-sm mr-2' />} />
      <Empcomp empdata={Empdata.tudaysPrasent} textdata={
        {
          heading: "Present todeys",
          icontext: <GiCheckMark size={25} className='text-[#00ff62] text-sm mr-2' />,

        }
      } icon={<GiCheckMark size={20} className='text-[#00ff04] text-sm mr-2' />} />
      <Empcomp empdata={absent} textdata={
        {
          heading: "Absent todeys",
          icontext: <TbAlertTriangleFilled size={22} className='text-[#ff0000] text-sm mr-2' />,
         
        }
      } icon={<TbAlertTriangleFilled size={25} className='text-[#ff4000] text-sm mr-2' />} />
    </div>
  )
}

export default Employ
