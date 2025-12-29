import Features from './Features';
import { SiActivision, SiTransmission, SiWorkplace } from 'react-icons/si';
import { IoAnalyticsOutline } from 'react-icons/io5';
import Textorline from './Linetext';
import Card from './card';
import { adarsh, dheeraj, deeapk } from './image';

export default function AboutUs() {
    let carddata = [
        {
            membername: "Dheeraj Dwivedi",
            memberrole: "Ceo & Founder",
            memberimg: dheeraj
        },
        {
            membername: "Adarsh",
            memberrole: "meneger",
            memberimg: adarsh,
            css: "shadow-[0px_0px_10px_#c4ff01]"
        },
        {
            membername: "Deepak Dwivedi",
            memberrole: "2nd meneger",
            memberimg: deeapk
        },
    ]
    return (
        <>
            <section className=" relative about-us w-full m-auto border bg-[url('/logoaboutus.webp')] bg-no-repeat bg-center bg-cover  bg-[#292A2E] text-white py-5 border-[#092811] rounded-lg mt-10 ">
                <div className="absolute w-full opacity-60 h-full top-0 left-0 bg-black rounded-lg z-1"></div>
                <div className=" relative z-10   w-full  mx-auto flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl font-bold underline text-yellow-400 font-['inter','sans-serif'] mt-40 ">About Us</h1>
                </div>
            </section>
            <section>
                <div className="w-full bg-[#292A2E]  mx-auto flex flex-col items-center justify-center text-center px-4 ">
                    <Features data={{
                        fetureText: "ABOUT US",
                        icons: [
                            <SiTransmission className="text-4xl text-[#ffffff] mx-auto" />,
                            <IoAnalyticsOutline className="text-4xl text-[#ffffff] mx-auto" />,
                            <SiActivision className="text-7xl text-[#ffffff] -mt-6 mx-auto" />,
                            <SiWorkplace className="text-4xl text-[#ffffff] mx-auto" />,
                        ],
                        css3: "flex-row items-center justify-center",
                        feature1: {
                            title: "OUR MISSION",
                            css: "mt-4 mr-5 ",
                            description: "our work is automate your bussion and give you more porducvity and margin some more."
                        },
                        feature2: {
                            title: "OUR VISION",
                            description: "our work is automate your bussion and give you more porducvity and margin."
                        },
                        feature3: {
                            title: "OUR WORK",
                            description: "our work is automate your bussion and give you more porducvity and margin."
                        }
                    }} />

                    <div className="w-full  mx-auto flex flex-col items-center justify-center text-center px-4 pb-20 ">
                        <Textorline text={"our story"} />
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mt-8 mb-8">
                            Founded with a vision to revolutionize business automation, our journey began with a simple belief: every business deserves the power of intelligent automation. We started as a small team of passionate developers and entrepreneurs, determined to make automation accessible to businesses of all sizes. Through years of dedication, innovation, and countless success stories, we've grown into a trusted partner for companies looking to streamline operations, boost productivity, and unlock new growth opportunities. Today, we continue to push the boundaries of what's possible in business automation, empowering our clients to focus on what truly matters while we handle the complexity.</p>
                    </div>
                    <Textorline text={"our team"} />

                    <div className='w-full flex flex-col md:flex-row' >
                        {carddata.map((card, index) => {
                            return ((index !== 2) ? <div key={index} className="w-full mx-auto flex flex-col px-7 md:px-0 ">
                                <Card data={{
                                    membername: card.membername,
                                    memberrole: card.memberrole,
                                    memberimg: card.memberimg,
                                }} />
                            </div> : (<div className="w-full mx-auto flex flex-col px-7 md:px-0 " key={index}>
                                <Card data={{
                                    membername: card.membername,
                                    memberrole: card.memberrole,
                                    memberimg: card.memberimg,
                                    css: card.css
                                }} />
                            </div>))
                        })}
                    </div>
                </div>

            </section>


        </>
    );
}
