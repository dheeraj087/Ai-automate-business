import React from 'react'
import { Routes,Route } from "react-router-dom";
import Layouts from "./Layouts"
import CompneyOwnDashbord from '../ownerDashbord/CompneyOwnDashbord';
import Aipage from '../ai api/Aipage';
function Routs() {
  return (

    <Routes>
        <Route path='/' element={<Layouts />}>
       <Route index element={<CompneyOwnDashbord />}/>
       <Route path='/ai_assitent' element={ <Aipage />}/>

        </Route>
    </Routes>

  )
}

export default Routs
