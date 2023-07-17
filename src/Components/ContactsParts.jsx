import React from 'react'
import {motion} from "framer-motion"


const ContactsParts = (props) => {
  return (
    <>
      <motion.div 
      
      whileHover={{scale:1.1 }}
      transition={{duration:"0.3"}}
      className="gg">
<div id="contactLPicon"><span id="call" className="material-icons">
{props.icon}
</span></div>
<div id="contactLPheader">{props.header}</div>
<div id="contactLPnumber">{props.number}</div>
<motion.div
whileHover=  {{scale:0.8 , backgroundColor:"blue",color:"white"}}
transition={{duration:"1"  , type:"spring"}}

id="contactLPnowbut">{props.but}</motion.div>

</motion.div>

    </>
  )
}

export default ContactsParts
