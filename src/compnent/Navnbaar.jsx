import React, { useState } from "react";
import { HiBackspace, HiCube, HiDocumentText, HiMenu } from 'react-icons/hi'
const Navebar = () => {
    const [menu, setmenu] = useState(true)
    function heandleclick() {
        setmenu((!menu))
    }
    return (
        <nav className={`w-full relative border-b border-[#5f5f5f] h-16 backdrop-blur-[3px]  font-['inter','sans-serif'] flex items-center justify-between p-4 text-white `}>

            <div className={`bg-background flex grow  text-2xl font-bold text-[#4ca75e] font-['Oswald',"sans-serif"]`}>MUELAX AI</div>

            <button className=" cursor-pointer hover:scale-102 active:scale-98 active:bg-[#c1c1c1] hover:bg-[#ff0000] border text-white font-bold py-1 mr-5 px-3 rounded">Sing Up</button>

            <button onClick={heandleclick}>
                {menu ? <HiMenu size={30} className="cursor-pointer" /> : <HiBackspace size={30} className="cursor-pointer" />}
            </button>
            {!menu && (
                <div
                    className={`
      w-52 h-62 absolute right-0 top-16 border border-white/20 rounded-xl shadow-white bg-[#5678587d]  text-white p-4 
      ${menu ? "slide2" : "slide"}
    `}>
                    <div className="text-3xl mb-4 font-['inter','sans-serif'] uppercase text-right p-2">
                        <li onClick={heandleclick} className=" mb-4 ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">Home</a></li>
                        <li onClick={heandleclick} className=" mb-4 ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">about us </a></li>
                        <li onClick={heandleclick} className=" mb-4 ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">price </a></li>
                        <li onClick={heandleclick} className=" mb-4 ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#">blgo</a></li>

                    </div>
                </div>
            )}

        </nav>
    )
}
export default Navebar