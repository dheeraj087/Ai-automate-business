import React from "react";
import { HiMenu } from 'react-icons/hi'
const Navebar = () => {
    return (
        <nav className={`w-full font-iter  border-b border-[#5f5f5f] h-16  backdrop-blur-[3px] flex items-center justify-between p-4 text-white `}>

            <div className={`bg-background flex grow text-textPrimary text-2xl font-bold text-[#4ca75e] font-['Oswald',"sans-serif"]`}>MUELAX AI</div>

            <button className="bg-primary hover:bg-[#5cf393] border text-white font-bold py-1 mr-5 px-3 rounded">Sing Up</button>

            <div>
                <HiMenu size={30} className="cursor-pointer" />
            </div>

        </nav>
    )
}
export default Navebar