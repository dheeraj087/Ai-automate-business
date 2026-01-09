import React, { useRef, useState } from 'react'
import useGemini from './Gemini';

function Aipage() {
    const [promt, setpromt] = useState("");
    const response = useGemini({ promt: promt })

    const ref = useRef("")
    function submit(e) {
        e.preventDefault();
        if (ref.current.value) {
            setpromt(ref.current.value.trim())
            console.log(ref.current.value.trim());
            ref.current.value = ""
        }
    }
    return (
        <div className=" bg-black h-[90vh] w-full relative md:-left-5 ">
            <div className='w-full h-[80vh] my-10 overflow-auto  scroll-smooth webkit-scrool'>
                {response ? (
                    // Render AI JSX/HTML output
                    <div
                        className=" w-full max-w-4xl flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: response }}
                    />
                ) : (
                    <p className="text-center text-gray-500 mt-50">
                        Loading AI response...
                    </p>
                )}
            </div>
            <div className=' w-full  m-auto absolute bottom-2'>
                <form onSubmit={(e) => submit(e)} className='border w-[95%] h-full m-auto flex items-center justify-between  border-[#c1c1c1] p-3'>
                    <input type="text" ref={ref} placeholder='enter your ai promt' className='outline-none w-[95%] h-full' />
                    <button type='submit' className='cursor-pointer '>{'>>'}</button>
                </form>
            </div>
        </div>
    )
}

export default Aipage
