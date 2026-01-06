import React, { useRef } from 'react'

function Aipage({ setPromt }) {
    const ref=useRef("")
    function submit(e) {
        e.preventDefault();
        setPromt(ref.current.value.trim())
        console.log(ref.current.value.trim());
        ref.current.value=""
    }
    return (
        <div className=' w-[90%] m-auto '>
            <form onSubmit={(e)=>submit(e)} className='border w-[95%] h-full m-auto flex items-center justify-between  border-[#c1c1c1] p-3'>
                <input type="text" ref={ref} placeholder='enter your ai promt' className='outline-none w-[95%] h-full' />
                <button type='submit' className='cursor-pointer '>{'>>'}</button>
            </form>
        </div>
    )
}

export default Aipage
