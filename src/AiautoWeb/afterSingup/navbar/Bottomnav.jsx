import React from 'react'
import { TiClipboard } from "react-icons/ti";
import { BiBarChartAlt } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuTableCellsSplit } from "react-icons/lu";
import { HiMiniUserGroup } from "react-icons/hi2";
import useQueryHook from '../../beforeSingup/OwnHookResponsive/QueryHook';
function Bottomnav() {
  const isMobile = useQueryHook({ query: '(max-width:700px)' })

  let arrbnav = [
    <FaHome size={30} className='text-[#abaaaa] mt-2' />,
    <IoPeopleSharp size={30} className='text-[#abaaaa] mt-2' />,
    <TiClipboard size={30} className='text-[#abaaaa] mt-2' />,
    <BiBarChartAlt size={30} className='text-[#abaaaa] mt-2' />,
    <CiSettings size={30} className='text-[#abaaaa] mt-2' />
  ]
  return (
    <>
      {isMobile && <div className='w-full sticky bottom-0 z-50 flex justify-evenly  left-0  text-white h-13 border-t-[#c1c1c1] bg-linear-to-tr to-[#111821] via-[#080c10] from-[#10161f]' >
        {
          arrbnav.map((icon, index) => {
            return (
              <div key={index} className='w-full ml-3 cursor-pointer'>
                {icon}
              </div>
            )
          })
        }
      </div>}
    </>
  )
}
export default Bottomnav