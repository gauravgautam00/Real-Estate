import React from 'react'
import Feature_of_leftpart from "./feature_of_leftpart"
import {motion} from "framer-motion"


const isLeft=true;
const dif=true;
const Leftpart = () => {


  return (
    <>
    
    <div id="left_part">
      <div id="circlee"></div>
      <motion.div
      
      initial={{y: "2rem",opacity:0}}
      animate={{y:"0rem" , opacity:1}}
      transition= {{duration:"2"}} 
      
      id="title">

        Discover<br /> Most Suitable<br/> Property
      </motion.div>

      <div id="para">

        Find a variety of properties that suit you very easily<br/>
        Forget all difficulties in finding a residence for you
      </div>

      <div id="search">
      <ion-icon id="location_icon" name="pin"></ion-icon>
<input id="input" type="text"></input>
<button id="leftpart_input_searchbutton"> Search</button>
      </div>

<Feature_of_leftpart

number="9,000"
title="Premium Product"
id="2"
/>
<Feature_of_leftpart

number="2,000"
title="Happy Customer"
left={isLeft}
/>
<Feature_of_leftpart

number="28"
title="Awards Winning"
left={isLeft}
dif={dif}
/>

    
    </div>
    </>
  )
}

export default Leftpart
