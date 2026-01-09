import { NavLink } from "react-router-dom"

function Navlinklist({ heandleclick, underline = false }) {
    let lists = [
        { name: "home", path: "/" },
        { name: "about us", path: "/AboutUs" },
        { name: "price", path: "/Pricing" },
        { name: "contant", path: "/contant" },
        { name: "blgo", path: "/Blog" },
    ]
    return (
        <>
            {lists.map((list, index) => {
                return (
                    <NavLink  key={index} to={list.path} className={(acti)=>(acti.isActive ?"underline text-white":"")}>
                        <li onClick={heandleclick} className={`ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] ${underline ? 'underline' : ""}`}>{list.name}</li>
                    </NavLink>
                )
            })}
        </>
    )
}

export default Navlinklist