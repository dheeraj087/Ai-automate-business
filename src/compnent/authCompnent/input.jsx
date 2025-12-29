import React, { forwardRef, useRef } from 'react'

const Input = forwardRef(({ type, placeholder, onChange, name }, ref) => {
  return (
    <input 
    className='w-[80%] font-normal shadow-[0px_0px_10px_#345240] bo border-2 border-[#345240] p-2 py-2 m-2 rounded-md text-[14px]' 
    type={type} 
    onChange={onChange} 
    name={name} 
    ref={ref} 
    placeholder={placeholder} 
    required 
    />
  )
})


export default Input
