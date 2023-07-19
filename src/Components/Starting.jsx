import React from 'react'
import Header from "./Header"
import FrontPage from  "./Front_Page"
import Brand from "./Brand"
import Residencies from "./Residencies"
import Values from "./Values"
import Contact from "./Contact"
import Subscribe from "./Subscribe"
import Footer from "./Footer"


const Starting = () => {
  return (
    <div>

{/* <Header
name="Restaurant"
path="rest"
/> */}
<FrontPage/>
      <Brand/>
<Residencies/>
<Values/>
<Contact/>
<Subscribe/>
<Footer/>





    </div>
  )
}

export default Starting
