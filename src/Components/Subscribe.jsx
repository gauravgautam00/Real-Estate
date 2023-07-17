import React from 'react'
import {motion} from "framer-motion"


const Subscribe = () => {
  return (
    <div id="subscribecontainer">
      <div id="subscribetitle">Get started with Homyz</div>
    <div id="subscribedesc">Subscribe and find super attractive price quotes from us.
Find your residence soon</div> 
    <motion.div
   whileHover={{scale:1.1 }}
   transition={{duration:"0.9" , type:"spring"}}

    id="subscribebut">Get Started
    </motion.div>
    
    </div>
  )
}

export default Subscribe
