import React from 'react'

import {Navbar} from "react-responsive-navbar-overlay"
function Header() {
   
  return (
    <div className='header'>
      


<Navbar
                 brand="MovieDB"
                 backgroundColor="#28282d"
                
                 
                links={[
                    {text: "Home", link:"/"},
                    {text: "Movies", link:"/movies"},
                    {text: "Search", link:"/search"}
                ]}
            />
    </div>
  )
}





export default Header