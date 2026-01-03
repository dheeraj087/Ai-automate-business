import React, { useEffect, useState } from "react";
const Ownerinfo = () => {
    const ownerData = JSON.parse(localStorage.getItem("signupData"));
    const date = new Date();
    const [arr, setarr] = useState(date.toDateString().split(" "))
    const [time, settime] = useState(new Date())

    useEffect(() => {
        const time2 = setInterval(() => {
            settime(new Date())
        },2000)
        return () => clearInterval(time2)
    }, [time])

    return (
        <div className="text-white flex text-nowrap font-sans ml-5 mt-3 w-[90%]">
            <div className="mt-4">
                <h1 className="text-[#f0f0f0]"><span className="text-[#609C7A]">Owner </span> Dashbord</h1>
                <h2 className="capitalize text-[#c1c1c1]">welcom back ,{ownerData.name}</h2>
            </div>
            <h1 className="text-xs -ml-9 text-[#c1c1c1] ">{arr[0]}, {arr[1]} {arr[2]},{arr[3]}-{time.toLocaleTimeString("en")} </h1>
        </div>
    )
}
export default Ownerinfo 