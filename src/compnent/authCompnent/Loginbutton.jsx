import { useState } from "react";
import SingUp from "./SingUp";

const SingupButton = ({ text, css }) => {
    const [clicked, setclicked] = useState(false);
    function clickHandle() {
        setclicked(!clicked);
    }
    return (
        <>
            <button onClick={clickHandle} className={` ${css ? css : "cursor-pointer hover:scale-102 active:scale-98 active:bg-[#c1c1c1] hover:bg-[#ff0000] border text-white font-bold py-1 mr-5 px-3 rounded"}`}>{text}</button>
            {
                clicked &&
                <SingUp cut={setclicked} cut2={clicked} />
            }
        </>
    )
}
export default SingupButton