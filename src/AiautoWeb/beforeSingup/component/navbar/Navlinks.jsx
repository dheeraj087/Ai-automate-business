import Navlinklist from "./NavlinkList"

function Navlinks({ menu, heandleclick }) {
    return (<>
        <div
            className={` w-52 h-62 absolute right-0 top-16 border text-nowrap border-white/20 rounded-xl shadow-white bg-[#5678587d]  text-white p-4 ${menu ? "slide2" : "slide"}`}>
            <div className="text-3xl mb-4 font-['inter','sans-serif'] uppercase text-right p-2">
                <Navlinklist heandleclick={heandleclick}/>
            </div>
        </div>
    </>)
}

export default Navlinks