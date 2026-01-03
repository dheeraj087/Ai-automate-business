import React from 'react'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { SiAutocannon, SiGoogleanalytics, SiLoopback } from 'react-icons/si'
import { FaTasks } from "react-icons/fa";
import { SiAndroidauto } from "react-icons/si";
import Features  from './Features';
const WebInfo = () => {
    return (
        <>
            <Features data={{
                fetureText: "Features",
                icons: [
                    <SiAutocannon className="text-4xl text-[#ffffff] mx-auto" />,
                    <IoAnalyticsOutline className="text-4xl text-[#ffffff] mx-auto" />,
                    <SiGoogleanalytics className="text-4xl text-[#ffffff] mb-2 -mt-2 mx-auto" />,
                    <SiLoopback className="text-4xl text-[#ffffff] mx-auto" />,
                ],
                css3: "flex-row items-center justify-center",
                feature1: {
                    title: "Automated Workflows",
                    css: "mt-4",
                    description: "Automate attendance,Workflows, and tasks seamlessly with AI- driven automation."
                },
                feature2: {
                    title: "Predictive Analytics",
                    description: "Predict future trends and behaviors using advanced AI algorithms."
                },
                feature3: {
                    title: "Secured Data Storage",
                    description: "Securely store and manage sensitive data with enterprise-grade encryption."
                }
            }} />

            <Features data={{
                fetureText: "Trusted by Industry Leaders",
                lastcsss: "mb-4",
                icons: [
                    <SiAndroidauto className="text-4xl text-[#ffffff] mx-auto" />,
                    <SiAutocannon className="text-4xl text-[#ffffff] mx-auto" />,
                    "",
                    <FaTasks className="text-4xl text-[#ffffff] mx-auto" />,
                ],
                css3: "flex items-center justify-center",

                feature1: {
                    title: "Scan Or LogIn",
                    css2: "text-nowrap text-[#c1c1c1] font-thin text-[12px]",
                },
                feature2: {
                    title: "AI Automation",
                    css2: "text-[#c1c1c1] font-thin text-[12px]",

                },
                feature3: {
                    css2: "text-[#c1c1c1] font-thin text-[12px]",
                    title: "Complete Tasks",
                },
                feature4: {
                    css2: "text-[#c1c1c1] font-thin text-[12px]",
                    title: "Get Reports",
                }
            }} />
        </>
    )
}

export default WebInfo
