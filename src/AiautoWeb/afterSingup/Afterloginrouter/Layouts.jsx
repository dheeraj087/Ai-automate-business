import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import AfterlogNav from '../navbar/AfterlogNav'
import Bottomnav from '../navbar/Bottomnav'
import SideBar from '../navbar/SideBar'
import useQueryHook from '../../beforeSingup/OwnHookResponsive/QueryHook'
function Layouts() {
  const [cut, setcut] = useState(false)
  const isMobile = useQueryHook({ query: "(max-width:700px)" })
  return (
    <>
      <div className=" flex w-full  relative bg-linear-to-br 
           from-[#0F1316] 
           via-[#141A1F] 
           to-[#0A0E12]
           shadow-[inset_50px_10px_40px_rgba(0,0,0,0.4),inset_-50px_10px_40px_rgba(0,0,0,0.4)]
            text-[#8BD3B0]">
        <div className={`fixed top-0 `}>
          <SideBar seTcut={setcut} />
        </div>
        <div className={`w-full md:ml-20 ${cut &&
          "md:ml-40"} `}>
          <AfterlogNav />
          <Outlet />
          <Bottomnav />
        </div>
      </div>
    </>
  )
}

export default Layouts
