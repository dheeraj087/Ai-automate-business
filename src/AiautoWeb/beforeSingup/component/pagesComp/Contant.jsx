import react from "react";
import { useRef } from "react";
import { Input, Textarea } from "../FormhandleFunction/Input";
import Linetext from "./Linetext";
import ContantInfo from "./ContentInfo";
import { IoLocation } from "react-icons/io5";
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
        // console.log(ref.current[0]?.value);
        // console.log(ref.current[1]?.value);
        // console.log(ref.current[2]?.value);

    }
    const infodata = [
        {
            icon: <IoLocation size={40} className="text-4xl text-[#6bcb62] mx-auto" />,
            headding: "ADDRES",
            href: "https://www.google.com/maps?q=24.536271173635754,81.30369704809908",
            info: "neharu,nagar,rewa,india"
        },
        {
            icon: <FaPhoneAlt size={40} className="  text-4xl text-[#6bcb62] mx-auto" />,
            headding: "EMAIL",
            href: "mailto:dwivedidheeraj@gmail.com?subject=Inquiry%20for%20some%20bussion%20deatil&body=Hello%20Team",
            info: "dwivedidheeraj087@gmail.com"
        },
        {
            icon: <FaPhoneAlt size={40} className="  text-4xl text-[#6bcb62] mx-auto" />,
            headding: "PHONE NO",
            href: "tel:+916393014836",
            info: "91-6393014836"
        }
    ]
    return (
        <>
            <div>
                <div className="w-full m-auto bg-[#292A2E] text-white py-10 text-center ">
                    <Linetext text="Contact Us" />
                    <h2 className="font-['Oswald'] mt">Get in touch with our team for any inquiries</h2>
                </div>
                <div className="w-full flex justify-center bg-[#292A2E] flex-col md:flex-row">
                    <form onSubmit={(e) => heandale(e)} className="w-full md:ml-30 bg-[#292A2E] md:border-r-2 border-black text-white flex flex-col items-center justify-center py-10"

                    >
                        <Input
                            ref={(el) => (ref.current[0] = el)}
                            label={"Name"}
                            type={"text"}
                            placeholder={"Enter your name"}
                        />
                        <Input
                            ref={(el) => (ref.current[1] = el)}
                            label={"Email"}
                            type={"email"}
                            placeholder={"Enter your email"}
                        />
                        <Textarea
                            ref={(el) => (ref.current[2] = el)}
                            label={"Message"}
                            placeholder={"Enter your message"}
                        />
                        <button type="submit" className="  cursor-pointer hover:scale-102 active:scale-98 active:bg-[#c1c1c1] hover:bg-[#ff0000] w-3/4 bg-[#6bcb62] text-white py-2 rounded-md mt-5"
                        >Submit</button>

                    </form>
                    <div className="w-full bg-[#292A2E] text-white md:ml-20 flex flex-col items-center justify-center py-10 gap-5">
                        {infodata.map((data, index) => {
                            return (
                                <ContantInfo key={index}
                                    icon={data.icon}
                                    headding={data.headding}
                                    href={data.href}
                                    info={data.info} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contant;