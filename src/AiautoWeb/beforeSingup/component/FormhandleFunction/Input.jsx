import { forwardRef } from "react";

const  Input= forwardRef(({label, type, placeholder},ref)=> {
  return (
    <div className="w-[90%] m-auto flex   flex-col  ">
        <label className="w ml-10" htmlFor={label}>{label}</label>
        <input id={label} type={type} ref={ref}
        placeholder={placeholder} required className="w-3/4 bg-[#292A2E] border m-auto border-gray-600 rounded-md p-2 mt-2 mb-5 text-white focus:outline-[#6bcb62] focus:border-blue-500"
        />
    
    </div>
  )
});
const Textarea = forwardRef(({label, placeholder},ref) => {
    
  return (
    <div className="w-[90%] m-auto flex flex-col  ">
        <label className="ml-10" htmlFor={label}>{label}</label>
        <textarea 
        ref={ref}
        placeholder={placeholder} className="w-3/4 bg-[#292A2E] border m-auto border-gray-600 rounded-md p-2 mt-2 mb-5 text-white focus:outline-[#6bcb62] focus:border-blue-500"
        />
    
    </div>
  )
});
export  {Input, Textarea};