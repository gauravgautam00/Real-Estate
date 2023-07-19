import React from 'react'
import Header from './Header'
import LeftPart from "./Leftpart"
import RightPart from "./Rightpart"

const style={

backgroundColor:"black",
// marginTop:"9rem",
// border:"2px solid blue",

paddingTop:"0.1px",
}
const Front_Page = () => {
  return (
    <>
  
    <div id="frontpagee"style={style}>
      <div>
      <Header
name="Restaurant"
path="rest"
/>
     <LeftPart/>
     <RightPart/>
     </div>



    </div>
    </>
  )
}

export default Front_Page
