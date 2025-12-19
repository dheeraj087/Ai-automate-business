import { react } from "react";
import { HiBadgeCheck } from "react-icons/hi";

function Herosection() {
    return (
        <div className="w-full text-white">

            <h1 className="text-2xl text-[#c6c6c6] p-3 m-2 font-['inter','sans-serif'] mb-4">Welcome to AI Automated business.</h1>

            <h3 className="text-xl text-[#d2d0d0] pl-3 font-['inter'] font-thin -mt-4 ml-2">Centralize, your business operations with AI automation.</h3>

            <button className="border border-[#5a5a5a] bg-[#468950] text-white shadow-[inset_3px_4px_10px_black] font-bold  p-2 mt-7 ml-4 rounded">Start free trial</button>
            
            <button className="border border-[#5a5a5a] bg-[#468950] text-white shadow-[inset_3px_4px_10px_black] font-bold  p-2 mt-7 ml-4 rounded">Get started</button>
            
            <p className="mt-4 ml-4 text-thin text-[#b0afaf]"> <HiBadgeCheck className="inline text-xl -ml-2 text-[#468950]" /> 14'Day  Free Trial. no Credit card required</p>
            
            <img src="leptop2.webp" alt="leptop" className="mt-7   h-auto" />
        </div>
    );
}
export default Herosection;