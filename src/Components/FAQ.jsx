import React, { useState } from 'react'
import Accordian from "./accordi.jsx"
import FAQPart from './FAQPart'

const isTrue=true;



const FAQ = () => {

const [state,setState]=useState([{
  ff:true,
  ss:false,
  tt:false
}]);

  const[first,second,third]=Accordian;
  


const funky=(index)=>{
  console.log(index);
setState(()=>{
  return [
    {
      ff:(index===1?true:false),
      ss:(index===2?true:false),
      tt:(index===3?true:false)
    }
  ]
}
)
}
console.log(state);

// console.log(first.index,second.index,third.index);

  return (
    <div id="FAQcontainer">
      
<FAQPart
index={first.index}
icon={first.icon}
heading={first.heading}
detail={first.detail}
isTrue={state[0].ff}
onCLick={funky}




/>
<FAQPart
index={second.index}
icon={second.icon}
heading={second.heading}
detail={second.detail}
isTrue={state[0].ss}
onCLick={funky}

/>
<FAQPart
index={third.index}
icon={third.icon}
heading={third.heading}
detail={third.detail}
isTrue={state[0].tt}
onCLick={funky}

/>


    </div>
  )
}

export default FAQ
