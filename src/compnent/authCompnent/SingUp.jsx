import React, { useRef } from "react";
import { HiBackspace } from "react-icons/hi";
import Input from "./input";
const SingUp = ({ cut, cut2 }) => {
    let ref = useRef([])
    function heandale(e) {
        e.preventDefault();
        ref.current.map((input, index) =>(input.value=""))
    }
    return (
        <div className="
        absolute backdrop-blur-[20px] scale-z-50 z-60 w-[90%] md:w-[70%] lg:left-65 lg:w-[50%] md:left-30 rounded-2xl shadow_[10px_10px_60px_green]  left-5 top-5 flex text-xl font-bold">
            <div className="w-full">
                <div className="w-full h-10 text-right relative">
                    <HiBackspace size={50} onClick={() => (cut(!cut2))} className=" cursor-pointer absolute right-2 active:scale-90" />
                </div>
                <div className="max-w-full flex flex-col justify-center items-center">
                    <h1 className="py-2">Welcome to <span className="bg-red-500 p-1 rounded-full text-black">MUELAX AI</span> </h1>
                    <h2 className="text-[10px] text-[#c1c1c1] ml-8">Centralize, your business operations with <span>MUELAX</span> AI automation.</h2>
                </div>

                <form onSubmit={(e) => heandale(e)} className="w-full mb-12 text-xl  text-white flex flex-col items-center justify-center "
                >
                    <Input
                        ref={(el) => (ref.current[0] = el)}
                        type={"text"}
                        placeholder={"Enter your name *"}
                    />
                    <Input
                        ref={(el) => (ref.current[1] = el)}
                        type={"text"}
                        placeholder={"compnney name *"}
                    />
                    <Input
                        ref={(el) => (ref.current[2] = el)}
                        type={"email"}
                        placeholder={"work email *"}
                    />
                    <Input
                        ref={(el) => (ref.current[3] = el)}
                        type={"password"}
                        placeholder={"Enter your password *"}
                    />
                    <Input
                        ref={(el) => (ref.current[4] = el)}
                        type={"password"}
                        placeholder={"conform password *"}
                    />
                    <Input
                        ref={(el) => (ref.current[6] = el)}
                        type={"number"}
                        placeholder={"Enter your phone number *"}
                    />
                    <button type="submit" className="  cursor-pointer hover:scale-102 active:scale-98 active:bg-[#c1c1c1] hover:bg-[#ff0000] w-3/4 bg-[#6bcb62] text-white py-2 rounded-md mt-5"
                    >Sing Up</button>
                </form>

            </div>
        </div>
    )
}
export default SingUp