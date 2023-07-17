import React from 'react'
import {motion} from "framer-motion"

const part = (props) => {
    const {image}=props;
   
  return (
    <motion.div
    initial={{scale:1 , backgroundImage:"none"}}
    whileHover={{scale:1.1 , backgroundImage:"linear-gradient(rgba(238, 238, 255,0) , rgba(238, 238, 255,1))"}}
    transition={{duration:"0.9" , type:"spring"}}
    id="part">
      
      <img id="partimage"src={image}></img>
      <div id="partprice">${props.price}</div>
      
      <div id="partname">{props.name}</div>
      
      <div id="partdetail">{props.detail}</div>
    
    </motion.div>
  )
}

export default part
