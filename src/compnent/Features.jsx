import { react } from "react";
import { SiAutocannon, SiGoogleanalytics, SiLoopback } from "react-icons/si";
import { IoAnalyticsOutline } from "react-icons/io5";
function Features({ data }) {
    return (
        <>
            <div className="w-full h-auto m-auto  text-white mt-20 ">

                <div className="w-full flex items-center justify-between gap-4 my-5 ">

                    <div className="line rounded-3xl bg-linear-to-r from-black-500 backdrop-blur-[20px] to-[#c1c1c18d] h-1 w-[35%] "></div>

                    <h1 className="text-nowrap">{data?.fetureText}</h1>

                    <div className="line rounded-3xl w-[35%] h-1  bg-linear-to-r from-[#c1c1c196] to-black-500"></div>

                </div>

                <div className="flex w-full h-auto items-center justify-around mb-20
                ">
                    <div className="w-full lg:ml-35 flex justify-center ">
                        <div className="wrap-break-word mt-5 w-[30%] text-center">
                            <div className={` border bg-[#2b903e1e] backdrop-blur-[2px] shadow-[3px_2px_10px_rgba(186,167,94,0.5)] hover:shadow-[3px_2px_10px_#dbdbdb] hover:scale-102 w-20 h-18 flex  items-center rounded-2xl `} >
                                {data?.icons[0]}
                            </div>

                            <div>
                                <h3 className={`md:w-[50%] wrap-break-word mt-5 ml-1 text-left text-[#dbdbdb] font-['inter','sans-serif'] font-semibold ${data?.feature1?.css2}`}>
                                    {data?.feature1?.title}
                                </h3>
                                <p className="text-[12px] md:w-[50%] text-left font-thin text-[#c1c1c1]  " >{data?.feature1?.description}</p>
                            </div>
                        </div>

                        <div className="wrap-break-word  mt-4 w-[30%] text-center">
                            <div className={`border w-20 h-18 hover:shadow-[3px_2px_10px_#dbdbdb] hover:scale-102 ${data?.css3} rounded-2xl bg-[#2b903e1e] backdrop-blur-[2px] shadow-[3px_2px_10px_rgba(186,167,94,0.5)]`} >
                                {data?.icons?.[1]}
                                {data?.icons?.[2]}
                            </div>
                            <div>
                                <h3 className={`wrap-break-word md:w-[50%] mt-4 text-left text-[#d3d3d3] font-['inter','sans-serif'] font-semibold ${data?.feature2?.css2} `}>
                                    {data?.feature2?.title}
                                </h3>
                                <p className=" wrap-break-word text-[12px] md:w-[50%] text-left font-thin text-[#c1c1c1]  " >{data?.feature2?.description}</p>
                            </div>
                        </div>
                        <div className="wrap-break-word mt-4 w-[30%] text-center">
                            <div className="border w-20 h-18 flex hover:shadow-[3px_2px_10px_#dbdbdb] hover:scale-102 items-center rounded-2xl bg-[#2b903e1e] backdrop-blur-[2px] shadow-[3px_2px_10px_rgba(186,167,94,0.5)]" >
                                {data?.icons?.[3]}
                            </div>
                            <div>
                                <h3 className={`wrap-break-word mt-4 md:w-[50%]  text-left text-[#d3d3d3] font-['inter','sans-serif'] font-semibold ${data?.feature3?.css2} `}>
                                    {data?.feature3?.title}
                                </h3>
                                <p className=" wrap-break-word text-[12px] md:w-[50%] text-left font-thin text-[#cfcfcf]  " >{data?.feature3?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Features;