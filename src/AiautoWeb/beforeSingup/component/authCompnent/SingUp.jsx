import React, { use, useRef, useState } from "react";
import { HiBackspace } from "react-icons/hi";
import SingupFrom from "./form";
const SingUp = ({ cut, cut2 }) => {
  let displayform = false
  
  if (localStorage.getItem("signupData")) {
      displayform=(JSON.parse(localStorage.getItem("signupData")).signup)
    
  }
    return (
        <div className={`
        absolute backdrop-blur-[20px] scale-z-50 z-60 w-[90%] md:w-[70%] lg:left-65 lg:w-[50%] md:left-30 rounded-2xl shadow_[10px_10px_60px_green]  left-5 top-5 flex text-xl font-bold ${displayform?"hidden":""}`}>
            <div className="w-full">
                <div className="w-full h-10 text-right relative">
                    <HiBackspace size={50} onClick={() => (cut(!cut2))} className=" cursor-pointer absolute right-2 active:scale-90" />
                </div>
                <div className="max-w-full flex flex-col justify-center items-center">
                    <h1 className="py-2">Welcome to <span className="bg-red-500 p-1 rounded-full text-black">MUELAX AI</span> </h1>
                    <h2 className="text-[10px] text-[#c1c1c1] ml-8">Centralize, your business operations with <span>MUELAX</span> AI automation.</h2>
                </div>
                <SingupFrom />
            </div>
        </div>
    )
}
export default SingUp
