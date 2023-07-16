import React from 'react'
import json from "../slider.json"
import Part from "./part.jsx"
const Slider = () => {

var rcontainer=document.getElementById("rscrollcontainer");


console.log(rcontainer);
const right=()=>{
rcontainer.scrollBy({
    left: -290,
    right: 0,
    // behavior: "smooth"

})
}

const left=()=>{
    rcontainer.scrollBy({
        left: 290,
        right: 0,
        // behavior: "smooth"   
    })
}

  return (
    <>

<div id="rright" onClick={right}><span id="sliderleft" class="material-symbols-outlined">
chevron_left
</span></div>
<div id="rleft" onClick={left}><span  id="sliderright" class="material-symbols-outlined">
chevron_right
</span></div>

     <div id="rscrollcontainer">
{json.map((ele,index)=>{
return(

    <Part
    key={index}
    name={ele.name}
    price={ele.price}
    detail={ele.detail}
    image={ele.image}
    
    />
)
})}

</div>
   </>
  )
}

export default Slider
