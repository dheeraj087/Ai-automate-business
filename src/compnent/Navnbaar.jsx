import React, { useEffect, useRef, useState } from "react";
import { HiBackspace, HiCube, HiDocumentText, HiMenu } from 'react-icons/hi'
import useQueryHook from "../OwnHook responsive/QueryHook";
import SingupButton from "./authCompnent/Loginbutton";
const Navebar = ({ hi }) => {
    const [menu, setmenu] = useState(true)
    const isMobile = useQueryHook({ query: '(max-width: 700px)' })
    let lastScrollY = 0;
    let ref = useRef(null)
    useEffect(() => {
        const heandleclick = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {

                ref.current.className = "w-full sticky -top-20 border-b z-50 transition-top duration-1000 border-[#5f5f5f] bg-[#0000007d] h-16 backdrop-blur-4xl font-['inter','sans-serif'] flex items-center justify-between p-4 text-white "
            } else {
                ref.current.className = "w-full sticky top-0 border-b z-50 transition-top duration-1000 border-[#5f5f5f] bg-[#0000007d] h-16 backdrop-blur-4xl font-['inter','sans-serif'] flex items-center justify-between p-4 text-white "
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", heandleclick);

        return () => window.removeEventListener("scroll", heandleclick);
    }, []);

    function heandleclick() {
        setmenu((!menu))
    }
    return (
        <nav ref={ref} className={`w-full sticky top-0 border-b z-20 transition-top duration-1000 border-[#5f5f5f]  h-16 bg-[#0000007d] font-['inter','sans-serif'] flex items-center justify-between p-4 text-white `}>

            <div className={`bg-background flex grow  text-2xl font-bold text-[#4ca75e] font-['Oswald',"sans-serif"]`}>MUELAX AI</div>


            {isMobile ? <div className="flex justify-center items-center">
                <SingupButton text="Sing Up" />

                <button onClick={heandleclick}>
                    {menu ? <HiMenu size={30} className="cursor-pointer" /> : <HiBackspace size={30} className="cursor-pointer" />}
                </button>
                {!menu && (
                    <div
                        className={` w-52 h-62 absolute right-0 top-16 border text-nowrap border-white/20 rounded-xl shadow-white bg-[#5678587d]  text-white p-4 ${menu ? "slide2" : "slide"}`}>

                        <div className="text-3xl mb-4 font-['inter','sans-serif'] uppercase text-right p-2">
                            <li onClick={heandleclick} className=" mb-4 ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">Home</a></li>
                            <li onClick={heandleclick} className=" mb-4 ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">about us </a></li>
                            <li onClick={heandleclick} className=" mb-4 ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">price </a></li>
                            <li onClick={heandleclick} className=" mb-4 ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">blgo</a></li>
                        </div>
                    </div>
                )}
            </div> :
                <div className="text-2xl font-['inter','sans-serif'] uppercase text-right p-2 flex justify-center items-center">
                    <li onClick={heandleclick} className="  ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">Home</a></li>
                    <li onClick={heandleclick} className="  ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">about us </a></li>
                    <li onClick={heandleclick} className="  ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">price </a></li>
                    <li onClick={heandleclick} className="  ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">blgo</a></li>
                    <li onClick={heandleclick} className="  ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">blgo</a></li>
                    <SingupButton text="Sing Up" />



                </div>}

        </nav>
    )
}
export default Navebar