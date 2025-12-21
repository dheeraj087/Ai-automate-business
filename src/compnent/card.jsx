const Card = ({ data }) => {
  return (
    <div className="border w-[90%] m-auto mt-10 shadow-[0px_0px_10px_#c4ff01]  hover:scale-3d hover:scale-105 border-[#c4ff01] rounded-2xl " >
        <img className="w-full rounded-2xl " src={data.memberimg} alt="team meamber" />
        <h3 className="text-4xl text-[#c4ff01] font-['Oswald','sans-serif']">{data.membername}</h3>
        <h3 className="text-3xl text-[#ffffff] font-['Oswald','sans-serif']">{data.memberrole}</h3>
    </div>);
}

export default Card;        