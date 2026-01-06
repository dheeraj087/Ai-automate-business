import React, { useState } from 'react'
import AfterlogNav from '../navbar/AfterlogNav'
import Ownerinfo from './Ownerinfo'
import SideBar from '../navbar/SideBar'
import Employ from '../employcomp/employ'
// import useGemini from '../ai api/Gemini'
// import Aipage from '../ai api/Aipage'
import Bottomnav from '../navbar/Bottomnav'

function CompneyOwnDashbord() {

    // const [promt, setpromt] = useState("");
    // const response = useGemini({ promt: promt })
    return (

        <>
            <div className='w-full flex mt-14 text-white'>
                <SideBar />

                <div className='w-[90%]'>
                    {/* <Aipage setPromt={setpromt} /> */}
                    <Ownerinfo />
                    <Employ />

                </div>

                
            </div>
            {/* <div className=" min-h-screen p-4 bg-black">
                    {response ? (
                        // Render AI JSX/HTML output
                        <div
                            className="bg-black text-black max-w-4xl mx-autorounded-lg p-6 shadow-md"
                            dangerouslySetInnerHTML={{ __html: response }}
                        ></div>
                    ) : (
                        <p className="text-center text-gray-500 mt-10">
                            Loading AI response...
                        </p>
                    )}
                </div> */}
        </>
    )
}

export default CompneyOwnDashbord
