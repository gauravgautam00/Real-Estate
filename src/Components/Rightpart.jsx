import React from 'react'
// import myimage from 
import { motion } from "framer-motion"



const Rightpart = () => {
  return (
    <motion.div
    
    initial={{  x:"9rem" , opacity:0 }}
    animate={{  x: "0rem" ,opacity:1}}
    transition={{ duration: 2 }}
    
    id="rpcontainer">
      <img id="rpimage"src="../Images/hero-image.png" />
    </motion.div>
  )
}

export default Rightpart
