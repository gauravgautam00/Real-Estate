import React from 'react'

const FAQPart = (props) => {

// console.log(props);

  return (
    <div onClick={()=>props.onCLick(props.index)} id="FAQPartcontainer">
        <div id="FAQIcon">
        <span style={{fontSize:"1rem" ,color: "#4066ff"  , marginTop:"10px" , marginLeft: "10px"}} className="material-icons">
{props.icon}
</span>
</div>
      <div onClick={()=>props.onCLick(props.index)} id="FAQParttitle">
      {props.heading}
      </div>
      <div id="FAQIcondown">
      <span style={{fontSize:"2rem" ,color: "#4066ff"  , marginTop:"2px" , marginLeft: "2px"}} className="material-icons">
arrow_drop_down
</span>
</div>
      <div id="FAQPartdesc" style={props.isTrue ? {}:{height: "0px" , overflow: "hidden" , padding:"0rem" , transition:"overflow 1s"}} >
       {props.detail}  </div>

    </div>
  )
}

export default FAQPart

