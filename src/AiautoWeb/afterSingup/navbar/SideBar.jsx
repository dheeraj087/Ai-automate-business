import React, { useState } from 'react'
import useQueryHook from '../../beforeSingup/OwnHookResponsive/QueryHook'
import { HiAcademicCap, HiBackspace, HiMenu } from 'react-icons/hi'
import {  FaHighlighter, FaHome } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'

function SideBar() {
  const isMobile = useQueryHook({ query: "(max-width:700px)" })
  const [cut, setcut] = useState(false)
  return (
      !isMobile && <>
      <aside className={`w-10 sticky left-0 top-0 border-r border-[#5F5F5F] transition-width text-white duration-500 ${!cut ? "" : "w-30"} font-['Oswald',"sans-serif"] relative h-[90vh] bg-[#1A1C20]`}>
      {!cut ? <HiMenu size={30} className='text-[#b3b3b3]' onClick={() => setcut(!cut)} /> : <HiBackspace className='text-[#b3b3b3]' onClick={() => setcut(!cut)} size={30} />}
      {!cut ?
        <div className='flex h-[89%] flex-col mt-4 gap-6 ml-2'>
          <FaHome size={20} className={``} />
          <HiAcademicCap size={20} />
          <FaHighlighter size={20} />
          <FaHighlighter size={20} />
          <FaHighlighter size={20} />
          <FaHighlighter size={20} />
          <FaHighlighter size={20} className={`font-['Oswald',"sans-serif"]`} />
          <IoSettings size={20} className="grow mt-15" />
        </div> : <div className='flex h-[89%] flex-col mt-4 gap-6 ml-2'>
          <div className='flex w-full gap-2  items-center'>
            <FaHome size={20} className={``} />
            <span className=''>Home</span>
          </div>
          <div className='flex w-full gap-2  items-center'>
            <FaHome size={20} className={``} />
            <span className=''>Home</span>
          </div>
          <div className='flex w-full gap-2  items-center'>
            <FaHome size={20} className={``} />
            <span className=''>Home</span>
          </div>
          <div className='flex w-full gap-2  items-center'>
            <FaHome size={20} className={``} />
            <span className=''>Home</span>
          </div>
          <div className='flex w-full gap-2  items-center'>
            <FaHome size={20} className={``} />
            <span className=''>Home</span>
          </div>
          <div className='flex w-full gap-2  items-center'>
            <FaHome size={20} className={``} />
            <span className=''>Home</span>
          </div>
          <div className='flex h-3   w-full gap-2 grow mt-20 items-center'>
            <IoSettings size={20} />
            <span className=''>setting</span>
          </div>
        </div>
      }
    </aside>
      </> 
  )
}

export default SideBar
