import { use, useRef, useState } from "react"
import { FcAddImage } from "react-icons/fc";
function Inputfile({setchange, setimgcome }) {
    const displayFromref = useRef("")
    const [img, setimg] = useState(false);
    const [imgprev, setimgprev] = useState(false);
    function heandalechange(e) {
        setimgprev(URL.createObjectURL(e.target.files[0]))
        const imag = new FileReader();
        imag.readAsDataURL(e.target.files[0]);
        imag.onload = () => {
            setimg(imag.result);
        }
    }
    function heandleSumbet(e) {
        e.preventDefault();
        if (imgprev) {
            localStorage.setItem("profileImage", JSON.stringify(img))
            displayFromref.current.className = "invisible hidden"
            setchange(false)
        }
        if (localStorage.getItem("profileImage")) {
            setimgcome(JSON.parse(localStorage.getItem("profileImage")))
            
        }

    }
    return (

        <>
            <div ref={displayFromref} className="w-100 none  relative bg-amber-50">
                <div className="border absolute top-0  p-2 m-4 rounded bg-black w-70 h-70  text-white cursor-pointer">
                    <form onSubmit={(e) => heandleSumbet(e)}>
                        {imgprev ? <img src={imgprev} alt="preview img" /> : (<>
                            <FcAddImage size={200} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            <input
                                type="file"
                                accept="image/*"
                                placeholder="dheeraj"
                                capture onChange={(e) => heandalechange(e)}
                                className="w-full h-full opacity-0 absolute bg-cover top-0 left-0 cursor-pointer z-50"
                            />
                        </>)}

                        {imgprev ? (<><button type="button" onClick={(e) => (setimgprev(false))} className="w-30 rounded-sm broder-1 bottom-3 right-2 bg-red-600 border-rose-400 absolute z-50 cursor-pointer"> choose another </button>
                            <button type="submit" className="w-30 cursor-pointer rounded-sm broder-1 bottom-3 bg-red-600 border-rose-400 absolute z-50 "> save profile </button>
                        </>) : ""}
                    </form>
                </div>
            </div>
        </>
    )
}
export default Inputfile;