import React, { useRef, useState } from 'react'
import useQueryHook from '../../beforeSingup/OwnHookResponsive/QueryHook.jsx'
import { HiMenu, HiOutlineIdentification, HiSearch } from 'react-icons/hi';
import Inputfile from '../../beforeSingup/component/setprofile/profileimage.jsx';
const AfterlogNav = () => {
  let data = localStorage.getItem("signupData")
  const [user, setuser] = useState(JSON.parse(data) || {})
  let ref = useRef(null)
  const [imgcome, setimgcome] = useState(false)
  let dataProImg = false;
  if (localStorage.getItem("profileImage")) {
    dataProImg = JSON.parse(localStorage.getItem("profileImage"))
  }
  const [changeprofile, setchangeprofile] = useState(false)

  function heandleclickimg() {
    setchangeprofile(!changeprofile)
  }

  const isMobile = useQueryHook({ query: '(max-width: 700px)' })
  return (
    <nav className={`w-full fixed top-0 border-b z-20 transition-top duration-1000 border-[#5f5f5f]  h-[10vh] bg-[#25282B] font-['inter','sans-serif'] flex items-center justify-between  text-white `}>
      {changeprofile && <div className="absolute md:right-0 z-40 top-20"><Inputfile changee={changeprofile} setimgcome={setimgcome} setchange={setchangeprofile} /></div>}
      {isMobile ?
        <div className='w-full flex items-center justify-between m-3'>
          <div className={`bg-background grow select-none text-xl font-bold text-[#4ca75e] font-['Oswald',"sans-serif"]`}>MUELAX AI</div>
          <HiSearch size={30} className='mr-2 cursor-pointer' />
          <HiOutlineIdentification size={30} className='mr-2 cursor-pointer' />
          {user?.signup ?
            ((<button onClick={heandleclickimg} className={`bg-red-500 shadow-amber-500 shadow-2xl w-7 relative uppercase font-bold text-2xl cursor-pointer h-7 text-center flex items-center justify-center rounded-full`}>
              {dataProImg ? <img src={dataProImg} className="bg-center absolute top-0 left-0 w-full h-full rounded-full" alt="profile img" /> : (user?.name.charAt())}
            </button>)) : ""
          }
        </div>
        : <>
          <div className='ml-5 gap-5 flex'>
            <div className={`bg-background flex select-none text-xl font-bold text-[#4ca75e] font-['Oswald',"sans-serif"]`}>MUELAX AI</div>
            <div>Overview</div>
            <div>Team</div>
            <div>Project</div>
            <div>Analyties</div>
          </div>
          <div className='mr-5 gap-5 flex'>
            <HiSearch size={30} className='mr-2 cursor-pointer' />
            <HiOutlineIdentification size={30} className='mr-2 cursor-pointer' />
            {user?.signup ?
              ((<button onClick={heandleclickimg} className={`bg-red-500 shadow-amber-500 shadow-2xl mr-4 w-7 relative uppercase font-bold text-2xl cursor-pointer h-7 text-center flex items-center justify-center rounded-full`}>
                {dataProImg ? <img src={dataProImg} className="bg-center absolute top-0 left-0 w-full h-full rounded-full" alt="profile img" /> : (user?.name.charAt())}
              </button>)) : ""
            }
          </div>
        </>

      }
    </nav>

  )
}

export default AfterlogNav
