import { useRef, useState } from "react"
import heandale from "../handleFunction/heandale"
import Input from "./input"

/**
 * SingupFrom component that renders a user registration form.
 * 
 * @component
 * @param {Object} props - Component props
 * @returns {JSX.Element} A form element containing input fields for user registration
 * 
 * @description
 * Displays a signup form with the following fields:
 * - Full name
 * - Company name
 * - Work email
 * - Password
 * - Confirm password
 * - Phone number
 * 
 * The component manages form validity state and uses refs to access input values.
 * Form submission is handled by the `heandale` function which receives event, refs, and validity setter.
 * 
 * @example
 * <SingupFrom />
 */

function SingupFrom({ }) {
    const [validity, setvalidity] = useState({})
    let ref = useRef([])
    return (
        <form onSubmit={(e) => heandale({ e, ref, setvalidity })} className="w-full mb-12 text-xl  text-white flex flex-col items-center justify-center "
        >
            <Input
                ref={(el) => (ref.current[0] = el)}
                name={"name"}
                type={"text"}
                placeholder={"Enter your name *"} />
            <p className={`text-[#c1c1c1] text-[12px] mb-2 w-[80%] text-left ${validity?.company ? 'text-red-500' : ''}`}>{validity?.company || ""}</p>
            <Input
                ref={(el) => (ref.current[1] = el)}
                name={"compnney name"}
                type={"text"}
                placeholder={"compnney name *"} />
            <p className={`text-[#c1c1c1] text-[12px] mb-2 w-[80%] text-left ${validity?.company ? 'text-red-500' : ''}`}>{validity?.company || ""}</p>
            <Input
                ref={(el) => (ref.current[2] = el)}
                type={"email"}
                name={"work email"}
                placeholder={"work email *"} />
            <p className={`text-[#c1c1c1] text-[12px] mb-2 w-[80%] text-left ${validity?.email ? 'text-red-500' : ''}`}>{validity?.email || ""}</p>

            <Input
                ref={(el) => (ref.current[3] = el)}
                name={"password"}
                type={"password"}
                placeholder={"Enter your password *"} />
            <Input
                ref={(el) => (ref.current[4] = el)}
                name={"conform password"}
                type={"password"}
                placeholder={"conform password *"} />
            <p className={`text-[#c1c1c1] text-[12px] mb-2 w-[80%] text-left ${validity?.password ? 'text-red-500' : ''}`}>{validity?.password || "* Must be at list 8 characters"}</p>
            <Input
                ref={(el) => (ref.current[5] = el)}
                name={"number"}
                type={"tel"}
                placeholder={"Enter your phone number *"} />
            <p className={`text-[#c1c1c1] text-[12px] mb-2 w-[80%] text-left ${validity?.phone ? 'text-red-500' : ''}`}>{validity?.phone || ""}</p>

            <p className="text-[#c1c1c1] text-[12px] mb-2 mt-2 w-[80%] text-center font-normal">By signing up, you agree to our <span className="font-bold text-[13px]">Terms of Service</span> and  <span className="font-bold text-[13px]">Privacy Policy.</span></p>
            <button type="submit" className="  cursor-pointer hover:scale-102 active:scale-98 active:bg-[#c1c1c1] hover:bg-[#ff0000] w-3/4 bg-[#6bcb62] text-white py-2 rounded-md mt-5"
            >Sing Up</button>
            <p className="text-[#c1c1c1] text-[15px] mb-2 mt-2 w-[80%] text-center">Already have an account? <a href="#" className="text-[#ff1515] text-xl m-1">LOG IN</a></p>
        </form>
    )
}
export default SingupFrom