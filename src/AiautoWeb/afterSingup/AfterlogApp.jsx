import React from 'react'
import AfterlogNav from './navbar/AfterlogNav'
import SideBar from './navbar/SideBar'
import CompneyOwnDashbord from './ownerDashbord/CompneyOwnDashbord'
import Bottomnav from './navbar/Bottomnav'
const AfterlogApp = () => {
    return (
    <div className="min-h-screen bg-linear-to-br from-[#18212b] via-[#282914] to-[#050909]">
<div className="relative bg-noise backdrop-blur-xs min-h-screen drop-shadow-2xl">
            <AfterlogNav />
            <CompneyOwnDashbord />
            <Bottomnav />
            </div>
        </div>
    )
}

export default AfterlogApp
