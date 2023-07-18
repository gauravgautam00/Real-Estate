import React  from 'react'
import {NavLink} from "react-router-dom"
import Header from './Header';



const Restaurant = () => {
  console.log(10);
  
  return (

    
    <div>
      <Header
      name="Home"
      path="/"
      />
      {/* <button ><NavLink to="/" >Home</NavLink> </button> */}
      <h1>This is just a cheking page for the react-router dom . simply i am just playing with the SPA<br/> You can click on Home button above to get back</h1>
    </div>
  )
}

export default Restaurant
