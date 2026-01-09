import React from 'react'
import { Router,Routes,Route } from "react-router-dom";
import HomePage from '../pages/Homepage';
import { AboutUs, Contant, PricingPage } from '../../mainandapp/allfile';
import { BiLayout } from 'react-icons/bi';
import Layouts from './Layouts';
import SingUp from '../component/authCompnent/SingUp';
function Routs() {
  return (

    <Routes>
        <Route path='/' element={<Layouts />}>
        <Route index  element={<HomePage />}/>
        <Route path='/contant' element={<Contant />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/Pricing' element={<PricingPage />}/>
        <Route path='/Blog' element={<HomePage />}/>
        <Route path='/SingUp' element={<SingUp />}/>

        </Route>
    </Routes>

  )
}

export default Routs
