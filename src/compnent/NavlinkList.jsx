function Navlinklist({ heandleclick ,underline=false}) {
    let lists = [
        { name: "home", path: "#" },
        { name: "about us", path: "#" },
        { name: "price", path: "#" },
        { name: "blgo", path: "#" },
        { name: "blgo", path: "#" },
    ]
    return (
        <>
            {lists.map((list, index) => {
                return (
                    <li onClick={heandleclick} key={index} className={`ml-2 md:p-3 list-none  cursor-pointer hover:scale-102 active:scale-98 active:text-[#c1c1c1] ${underline ? 'underline':""}`}><a href={list.path}>{list.name}</a></li>
                )
            })}
        </>
    )
}

export default Navlinklist