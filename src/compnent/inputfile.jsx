import { useState } from "react"

function Inputfile() {
    function heandalechange(e) {
        console.log(e.target.files);
        
    }
    return (
        <><input type="file" onChange={(e) => heandalechange(e)} /></>
    )
}
export default Inputfile