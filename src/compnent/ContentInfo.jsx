import { IoLocation } from "react-icons/io5";

function ContentInofo({icon,headding,info}) {
    return(
        <div className="w-[85%] m-auto cursor-pointer bg-[#292A2E] text-white flex items-center justify-center py-1">
            <div className=" w-15 m-4 backdrop-blur-2xl bg-[#15ff001c] shadow-[0_0_10px_#6bcb62] h-15 border flex items-center justify-center  border-[#c1c1c1] rounded-xl">
           {icon}
            </div>
            <div className="w-[85%]">
                <h3 className="text-white text-2xl font-['Oswald']">{headding}</h3>
                <h3 className="text-[#c1c1c1] text-[14px] capitalize font-['inter'] mr-4 wrap-break-word">{info}</h3>
            </div>
        </div>
    )
}
export default ContentInofo;