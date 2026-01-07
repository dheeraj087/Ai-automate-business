import React, { useState } from 'react'
import AfterlogNav from '../navbar/AfterlogNav'
import Ownerinfo from './Ownerinfo'
import SideBar from '../navbar/SideBar'
import Employ from '../employcomp/employ'
import useGemini from '../ai api/Gemini'
import Aipage from '../ai api/Aipage'
import Bottomnav from '../navbar/Bottomnav'

function CompneyOwnDashbord() {


    return (
        <>
            <div className='w-full flex mt-14 text-white'>
                <div className='w-[90%]'>
                    <Ownerinfo />
                    <Employ />
                </div>
            </div>
            <Aipage />
        </>
    )
}

export default CompneyOwnDashbord
