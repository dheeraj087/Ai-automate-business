import { react } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { leptop } from "./image";
import SingupButton from "./authCompnent/Loginbutton";

function Herosection() {
    return (
        <div className="w-full  lg:flex flex-col  lg:w-[80%] lg:m-auto text-white">

            <div className="lg:w-full  lg:m-auto  lg:flex lg:flex-col lg:justify-center items-center
            ">
                <h1 className="text-2xl lg:text-5xl  text-[#c6c6c6] p-3 m-2 font-['inter','sans-serif'] mb-4">Welcome to AI Automated business.</h1>

                <h3 className="text-xl text-[#d2d0d0] lg:text-2xl pl-3 font-['inter'] font-thin -mt-4 ml-2">Centralize, your business operations with AI automation.</h3>

                <div className="">
                    <SingupButton text={"Start free trial"} css={"border cursor-pointer hover:scale-102 active:scale-98 active:bg-[#c1c1c1] not-first: border-[#5a5a5a] bg-[#cd2f2f] text-white shadow-[inset_3px_4px_10px_black] font-bold  p-2 mt-7 ml-4 rounded"} />
                    <SingupButton text={"Get Started"} css={"border cursor-pointer hover:scale-102 active:scale-98 active:bg-[#c1c1c1] not-first: border-[#5a5a5a] bg-[#468950] text-white shadow-[inset_3px_4px_10px_black] font-bold  p-2 mt-7 ml-4 rounded"} />
                </div>

                <p className="mt-4 ml-4 lg:text-2xl text-thin text-[#b0afaf]"> <HiBadgeCheck className="inline text-xl lg:text-2xl -ml-2 text-[#468950]" /> 14'Day  Free Trial. no Credit card required</p>
            </div>

            <img src={leptop} alt="leptop" className="mt-7   h-auto" />
        </div>
    );
}
export default Herosection;