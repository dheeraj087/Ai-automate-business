import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full h-auto bg-[#09180e] text-white">
            <div className=" p-2 m-auto text-[11px] w-full flex border-b-2 border-gray-600 justify-between items-center">
                <div className="mb-20">logo</div>
                <div>
                    <li className="underline"><a href="#">Home</a></li>
                    <li className="underline"><a href="#">about us </a></li>
                    <li className="underline"><a href="#">contact</a></li>
                    <li className="underline"><a href="#">price </a></li>
                    <li className="underline"><a href="#">blgo</a></li>
                    <li className="underline ml-2"><a href="#"><FaFacebookF /></a></li>
                </div>
                <div>
                    <li className="underline ml-2"><a href="#">Home</a></li>
                    <li className="underline ml-2"><a href="#">about us </a></li>
                    <li className="underline ml-2"><a href="#">price </a></li>
                    <li className="underline ml-2"><a href="#">blgo</a></li>
                    <li className=" ml-2"><a href="#"><FaYoutube/></a></li>
                </div>
                <div>
                    <li className="underline ml-2"><a href="#">Home</a></li>
                    <li className="underline ml-2"><a href="#">about us </a></li>
                    <li className="underline ml-2"><a href="#">price </a></li>
                    <li className="underline ml-2"><a href="#">blgo</a></li>
                    <li className=" ml-2"><a href="#"><FaInstagram /></a></li>

                </div>
            </div>

            <p className="text-[11px] ">© 2024 AI Auto and dheeraj dwivedi. All rights reserved .</p>
        </footer>
    )
}
export default Footer;