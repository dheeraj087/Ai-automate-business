import React, { useState } from 'react'
import useQueryHook from '../../beforeSingup/OwnHookResponsive/QueryHook'
import { HiAcademicCap, HiBackspace, HiMenu } from 'react-icons/hi'
import { TiClipboard } from "react-icons/ti";
import { BiBarChartAlt } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaCriticalRole } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FaArrowsRotate, FaCircleArrowLeft } from "react-icons/fa6";
import { LuTableCellsSplit } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
function SideBar({ seTcut }) {
  const isMobile = useQueryHook({ query: "(max-width:700px)" })
  const [cut, setcut] = useState(false)
  return (
    !isMobile && <>
      <aside className={`w-15  top-13 border-r border-[#5F5F5F] text-nowrap transition-width text-white duration-200 ${cut &&
        "w-40"} font-['Oswald',"sans-serif"] relative h-[91vh] bg-[#1A1C20]`}>
        {
          !cut
            ?
            (<HiMenu size={30} className='text-[#b3b3b3] cursor-pointer ml-3 mt-2' onClick={() => { (setcut(!cut)); seTcut(!cut) }} />)
            :
            (<HiBackspace className='text-[#b3b3b3] cursor-pointer ml-3 mt-2' onClick={() => { (setcut(!cut)); seTcut(!cut) }} size={30} />)
        }

        {
          !cut

            ?

            (<div className='flex  h-[89%] text-xl font-["Oswald"] flex-col mt-4 gap-9 ml-4'>
             <NavLink to={"/"} className={(isactive)=>(isactive ? "underline text-2xl text-red-500":"")}>
               <FaHome  className={`cursor-pointer`} />
             </NavLink>
              <IoPeopleSharp size={20} className={`cursor-pointer`} />
              <BiBarChartAlt size={20} className={`cursor-pointer`} />
              <TiClipboard size={20} className={`cursor-pointer`} />
              <LuTableCellsSplit size={20} className={`cursor-pointer`} />
              <NavLink to={"/ai_assitent"} className={(isactive)=>(isactive ? "underline text-2xl text-red-500":"")}>
               <FaCriticalRole size={20} className={`font-['Oswald',"sans-serif"] cursor-pointer `} title='ai asistent' />
             </NavLink>
              <CiSettings size={20} className="grow -mb-10 cursor-pointer " />
            </div>)

            :

            (<div className='flex h-[89%] text-xl font-["Oswald"] flex-col mt-2 gap-9 ml-4'>
              <NavLink to={"/"} className={(isactive)=>(isactive ? "underline text-2xl text-red-500 w-full cursor-pointer":"cursor-pointer w-full") }>
             <div className='flex w-full gap-2  items-center'>
                <FaHome  className={``} />
                <span className=''>Home</span>
              </div>
             </NavLink>
              <div className='flex w-full gap-2  items-center cursor-pointer'>
                <IoPeopleSharp size={20} className={``} />
                <span className=''>Employess</span>
              </div>
              <div className='flex w-full gap-2  items-center cursor-pointer'>
                <BiBarChartAlt size={20} className={``} />
                <span className=''>Analyties</span>
              </div>
              <div className='flex w-full gap-2  items-center cursor-pointer'>
                <TiClipboard size={20} className={``} />
                <span className=''>Atendance</span>
              </div>
              <div className='flex w-full gap-2  items-center cursor-pointer'>
                <FaArrowsRotate size={20} className={``} />
                <span className=''>Ai automate</span>
              </div>
              <div className='flex w-full gap-2  items-center cursor-pointer'>
                <FaCriticalRole size={20} className={``} />
                <span className=''>Department</span>
              </div>
              <div className='flex h-3 cursor-pointer w-full gap-2 grow mt-20 items-center'>
                <FaArrowsRotate size={20} />
                <span className=''>setting</span>
              </div>
            </div>)
        }
      </aside>
    </>
  )
}

export default SideBar
