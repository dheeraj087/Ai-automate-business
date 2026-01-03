import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Navlinklist from "../navbar/NavlinkList";

function Footer() {
    return (
        <footer className="w-full  bg-[#09180e] text-white">
            <div className=" p-2 m-auto  w-full flex md:text-2xl lg:text-4xl border-b-2 border-gray-600 justify-between items-center">
                <div className="md:mb-60 mb-25 w-1/12"><div className={`bg-background text-nowrap flex grow text-textPrimary text-[11px] md:text-2xl font-bold text-[#4ca75e] font-['Oswald',"sans-serif"]`}>MUELAX AI</div></div>
                <div className=" mr-2 w-1/4 border-black">
                    <div>
                        <Navlinklist underline={true} />
                        <li className="underline ml-2 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1]  md:p-2"><a href="#"><FaFacebookF /></a></li></div>
                </div>
                <div className="">
                    <Navlinklist underline={true} />
                    <li className=" ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#"><FaYoutube /></a></li>
                </div>
                <div>
                    <Navlinklist underline={true} />
                    <li className=" md:p-3 list-none ml-2  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] "><a href="#"><FaInstagram /></a></li>

                </div>
            </div>

            <p className=" md:text-center text-[11px] md:text-[16px] ">© 2024 AI Auto and dheeraj dwivedi. All rights reserved .</p>
        </footer>
    )
}
export default Footer;