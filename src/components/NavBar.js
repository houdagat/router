import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    < div className ='nav-bar' >

        <h3>
            <Link to ='Home'>
             Home 
             </Link>
             </h3>

        <h3> 
            <Link to ='Listuser'>
            List User 
            </Link>
            </h3>
    </div>
  )
}

export default NavBar