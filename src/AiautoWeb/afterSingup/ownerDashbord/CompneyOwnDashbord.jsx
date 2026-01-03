import React from 'react'
import AfterlogNav from '../navbar/AfterlogNav'
import Ownerinfo from './Ownerinfo'
import SideBar from '../navbar/SideBar'
import Employ from '../employcomp/employ'

function CompneyOwnDashbord() {
    return (

        <div className='w-full flex text-white'>
            <SideBar />
            <div className='w-[90%]'>
                <Ownerinfo />
                <Employ />
            </div>
        </div>
    )
}

export default CompneyOwnDashbord
