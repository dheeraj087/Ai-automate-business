import React from 'react'
import AfterlogNav from './navbar/AfterlogNav'
import CompneyOwnDashbord from './ownerDashbord/CompneyOwnDashbord'
import Bottomnav from './navbar/Bottomnav'
const AfterlogApp = () => {
    return (
        <div className="h-screen relative bg-linear-to-br 
from-[#0F1316] 
via-[#141A1F] 
to-[#0A0E12]
shadow-[inset_50px_10px_40px_rgba(0,0,0,0.4),inset_-50px_10px_40px_rgba(0,0,0,0.4)]
 text-[#8BD3B0]"
>
            <AfterlogNav />
            <CompneyOwnDashbord />

        </div>
    )
}

export default AfterlogApp
