import react from "react";
import { useRef } from "react";
import { Input, Textarea } from "./Input";
import Linetext from "./Linetext";
import ContantInfo from "./ContentInfo";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contant() {
    const [values, setValues] = react.useState({
        name: "",
        email: "",
        message: ""
    });
    let ref = useRef([null])
    const heandale = (e) => {
        e.preventDefault();
        setValues({
            name: ref.current[0]?.value,
            email: ref.current[1]?.value,
            message: ref.current[2]?.value
        })
        console.log(ref.current[0]?.value);
        console.log(ref.current[1]?.value);
        console.log(ref.current[2]?.value);

    }
    return (
        <>
            <div>
                <div className="w-full m-auto bg-[#292A2E] text-white py-10 text-center ">
                    <Linetext text="Contact Us" />
                    <h2 className="font-['Oswald'] mt">Get in touch with our team for any inquiries</h2>
                </div>
                <form onSubmit={(e) => heandale(e)} className="w-full bg-[#292A2E] text-white flex flex-col items-center justify-center py-10"

                >
                    <Input
                        ref={(el) => (ref.current[0] = el)}
                        label={"Name"}
                        type={"text"}
                        placeholder={"Enter your name"}
                    />
                    <Input
                        ref={(el) => (ref.current[1] = el)}
                        label={"email"}
                        type={"email"}
                        placeholder={"Enter your email"}
                    />
                    <Textarea
                        ref={(el) => (ref.current[2] = el)}
                        label={"Message"}
                        placeholder={"Enter your message"}
                    />
                    <button type="submit" className="w-3/4 bg-[#6bcb62] text-white py-2 rounded-md mt-5"
                    >Submit</button>

                </form>
                <div className="w-full bg-[#292A2E] text-white flex flex-col md:flex-row items-center justify-center py-10 gap-5">
                    <ContantInfo
                        icon={<IoLocation size={40} className="text-4xl text-[#6bcb62] mx-auto" />}
                        headding={"ADDRES"}
                        info={"neharu,nagar,rewa,india"} />
                    <ContantInfo
                        icon={<MdEmail size={40} className="text-4xl text-[#6bcb62] mx-auto" />}
                        headding={"EMAIL"}
                        info={"dwivedidheeraj087@gmail.com"} />
                    <ContantInfo
                        icon={<FaPhoneAlt size={40} className="text-4xl text-[#6bcb62] mx-auto" />}
                        headding={"PHONE NO"}
                        info={"91-6393014836"} />
                </div>
            </div>
        </>
    )
}

export default Contant;