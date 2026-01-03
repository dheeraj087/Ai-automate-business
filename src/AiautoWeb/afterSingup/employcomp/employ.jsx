import React from 'react'
import Empcomp from './Empcomp';

function Employ() {
    const empdata =144; 

  return (
    <div className='w-[95%] ml-4 mt-4 text-white bg-[#000000]'>
        <h3 className={`font-['Oswald',"san-serif"] text-xl ml-4 text-[#c1c1c1]`}>Total Employess :- {144}</h3>
        <Empcomp />
    </div>
  )
}

export default Employ
