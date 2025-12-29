import React, { useRef, useState } from "react";
import { HiBackspace, HiMenu, useQueryHook, SingupButton, usenavHideShow } from "../someImports/naveImports";
import Navlinks from "./Navlinks";
import Navlinklist from "./NavlinkList";
import Inputfile from "./inputfile";
const Navebar = ({ }) => {
    let data = localStorage.getItem("signupData")
    const [user, setuser] = useState(JSON.parse(data) || {})
    const [menu, setmenu] = useState(true)
    const isMobile = useQueryHook({ query: '(max-width: 700px)' })
    let ref = useRef(null)
    const [imgcome, setimgcome] = useState(true)
    const [imgcom, setimgcom] = useState("")
    usenavHideShow(ref)


    function heandleclickimg() {
        setimgcome(!imgcome)
    }
    function heandleclick() {
        setmenu((!menu))
    }
    return (
        <nav ref={ref} className={`w-full sticky top-0 border-b z-20 transition-top duration-1000 border-[#5f5f5f]  h-16 bg-[#0000007d] font-['inter','sans-serif'] flex items-center justify-between p-4 text-white `}>
            <div className={`bg-background flex grow  text-2xl font-bold text-[#4ca75e] font-['Oswald',"sans-serif"]`}>MUELAX AI</div>


            {isMobile ?
                <div className="flex justify-center items-center">
                    {user?.signup ?
                        ((<div onClick={heandleclickimg} className={`bg-red-500 w-10 uppercase font-bold text-2xl cursor-pointer h-10 text-center flex items-center justify-center rounded-full`}>
                            {(user?.name.charAt())}
                        </div>)) :
                        <SingupButton text="Sing Up" />
                    }

                    <button onClick={heandleclick}>
                        {menu ? <HiMenu size={30} className="cursor-pointer" /> : <HiBackspace size={30} className="cursor-pointer" />}
                    </button>
                    {!menu && (
                        <Navlinks menu={menu} heandleclick={heandleclick} />
                    )}
                </div> :
                <div className="text-2xl font-['inter','sans-serif'] uppercase text-right p-2 flex justify-center items-center">
                    <Navlinklist heandleclick={heandleclick} />
                    {user?.signup ?
                        ((<div onClick={heandleclickimg} title="profile" className={`bg-red-500 w-10 uppercase font-bold text-2xl cursor-pointer h-10 text-center flex items-center justify-center rounded-full`}>
                            {(user?.name.charAt())}
                        </div>)) :
                        <SingupButton text="Sing Up" />
                    }
                </div>
            }
        </nav>
    )
}
export default Navebar