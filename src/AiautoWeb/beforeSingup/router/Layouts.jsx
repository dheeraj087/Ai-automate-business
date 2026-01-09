import React from 'react'
import { Footer, Navebar } from '../../mainandapp/allfile'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
<>
<Navebar />
<main>
    <Outlet />
</main>
<Footer />
</>
  )
}

export default Layouts
