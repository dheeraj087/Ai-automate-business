const Card = ({ data }) => {
  return (
    <div className={`border w-[90%] h-110  m-auto mt-10 ${data?.css} hover:scale-3d hover:scale-105 border-[#c4ff01] rounded-2xl `} >
        <img className="w-full rounded-2xl h-90 " src={data.memberimg} alt="team meamber" />
        <h3 className="text-3xl text-[#ffffff] font-['Oswald','sans-serif']">{data.membername}</h3>
        <h3 className="text-xl text-[#d3d3d3] font-['Oswald','sans-serif']">{data.memberrole}</h3>
    </div>);
}

export default Card;        