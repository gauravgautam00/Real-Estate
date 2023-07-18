import React from 'react'

import LeftPart from "./Leftpart"
import RightPart from "./Rightpart"

const style={

backgroundColor:"black",
// marginTop:"9rem",
// border:"2px solid blue",
height:"45rem",
width:"100%",
paddingTop:"0.1px",
}
const Front_Page = () => {
  return (
    <div style={style}>
      <div>
     <LeftPart/>
     <RightPart/>
     </div>



    </div>
  )
}

export default Front_Page
