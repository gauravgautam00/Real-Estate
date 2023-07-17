import React,{useRef} from 'react'
// import image from  
import {motion} from "framer-motion"



const Header = () => {
  const header=useRef(null);

  window.onscroll=()=>{

    const rect = header.current.getBoundingClientRect();
    var num=window.scrollY;
    var mtop=rect.top+num;
    console.log(num,mtop);
    if(header.current){ 

      if(num>=100){
        header.current.style.backgroundColor="#302e2e";
      }
else{
  header.current.style.backgroundColor="black";

}
var val=690;


console.log(700-num);
    if(num>=650){
      header.current.style.position="absolute";
  header.current.style.marginTop=`${val-num}rem`
    }else {
      header.current.style.position="fixed";
      header.current.style.marginTop="0px"
    }
   }
                  
  
  }

  return (
    <>
      
<div id="container"  ref={header}>

<div ><img id="logo" src="../Images/logo.png" /></div>
<div id="navbar">

<div className="font-larger" id="residencies">Residencies</div>
<div className="font-larger" id="Our Value">Our Value</div>
<div className="font-larger" id="Contact Us">Contact Us</div>
<div className="font-larger" id="Get Started">Get Started</div>
<motion.button

whileHover={{scale:1.1}}
transition={{duration:"0.5"}}
id="contact">Contact</motion.button>

</div>



</div>
 
    </>
  )
}

export default Header
