import React, { useRef, useState } from "react";
import { HiBackspace, HiMenu, useQueryHook, SingupButton, usenavHideShow } from "../../someImports/naveImports";
import Navlinks from "./Navlinks";
import Navlinklist from "./NavlinkList";
const Navebar = ({ }) => {
    const [menu, setmenu] = useState(true)
    const isMobile = useQueryHook({ query: '(max-width: 700px)' })
    let ref = useRef(null)

    usenavHideShow(ref)

    function heandleclick() {
        setmenu((!menu))
    }

    return (
        <nav ref={ref} className={`w-full sticky top-0 border-b z-20 transition-top duration-1000 border-[#5f5f5f]  h-16 bg-[#0000007d] font-['inter','sans-serif'] flex items-center justify-between p-4 text-white `}>
            <div className={`bg-background flex grow select-none text-2xl font-bold text-[#4ca75e] font-['Oswald',"sans-serif"]`}>MUELAX AI</div>

            {isMobile

                ?

                (<div className="flex justify-center items-center">
                    <SingupButton text="Sing Up" />

                    <button onClick={heandleclick}>
                        {menu ? <HiMenu size={30} className="cursor-pointer" /> : <HiBackspace size={30} className="cursor-pointer" />}
                    </button>
                    {!menu && (
                        <Navlinks menu={menu} heandleclick={heandleclick} />
                    )}
                </div>)

                :

                (<div className="text-2xl font-['inter','sans-serif'] uppercase text-right p-2 flex justify-center items-center">
                    <Navlinklist  />

                    <SingupButton text="Sing Up" />
                </div>)
            }
        </nav>
    )
}
export default Navebar