function Textorline ({text}) {
    return(<>
      <div className="w-full flex items-center justify-between gap-4 my-5 ">

                            <div className="line rounded-3xl bg-linear-to-r from-black-500 backdrop-blur-[20px] to-[#c1c1c18d] h-1 w-[35%] "></div>

                            <h1 className="text-nowrap text-2xl text-white uppercase font-['Oswald','san-serif'] ">{text}</h1>

                            <div className="line rounded-3xl w-[35%] h-1  bg-linear-to-r from-[#c1c1c196] to-black-500"></div>

                        </div>
    </>)
}
export default Textorline;