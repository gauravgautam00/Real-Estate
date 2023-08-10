import React,{useRef,useEffect } from 'react'
// import image from  
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"



const Header = (props) => {
  const resicontainer=useRef(null);
  const valcontainer =useRef(null);
  const contcontainer =useRef(null);
  const getscontainer =useRef(null);
  const header=useRef(null);


  useEffect(()=>{
  
  if(resicontainer.current){
   console.log("in header");

  resicontainer.current.onclick=()=>{
    console.log(10);
    var windowpos=window.scrollY;
    window.scrollBy({
      top:916-windowpos,
      behavior:"smooth"

    });
    
  }
}


if(valcontainer.current){
  // console.log(resicontainer)
valcontainer.current.onclick=()=>{
  console.log(10);
  var windowpos=window.scrollY;
  window.scrollBy({
    top:1553-windowpos,
    behavior:"smooth"

  })
}
}




if(contcontainer.current){
  // console.log(resicontainer)
contcontainer.current.onclick=()=>{
  console.log(10);
  var windowpos=window.scrollY;
  window.scrollBy({
    top:2197-windowpos,
    behavior:"smooth"

  })
}
}


if(getscontainer.current){
  // console.log(resicontainer)
getscontainer.current.onclick=()=>{
  console.log(10);
  var windowpos=window.scrollY;
  window.scrollBy({
    top:2867-windowpos,
    behavior:"smooth"

  })
}
}




  window.onscroll=()=>{

    var num=window.scrollY;
 
    
    if(header.current){ 

      if(num>=40){
        header.current.style.backgroundColor="#302e2e";
      }
else{
  header.current.style.backgroundColor="black";

}
var val=690;


// console.log(700-num);
    if(num>=650){
      header.current.style.position="absolute";
  header.current.style.marginTop=`${val-num}rem`
    }else {
      header.current.style.position="fixed";
      header.current.style.marginTop="0px"
    }
   }
                  
  
  }
},[header,resicontainer,getscontainer,contcontainer,valcontainer])




    

  return (
    <>
      
<div id="container"  ref={header}>

<div ><img id="logo" src="../Images/logo.png" /></div>
<div id="navbar">
  



<div   className="font-larger" id="residencies" style={{cursor:"pointer"}}  ref={resicontainer}>Residencies</div>
<div ref={valcontainer} className="font-larger" id="Our Value"  style={{cursor:"pointer"}}>Our Value</div>
<div ref={contcontainer} className="font-larger" id="Contact Us"  style={{cursor:"pointer"}}>Contact Us</div>
<div ref={getscontainer} className="font-larger" id="Get Started"  style={{cursor:"pointer"}}>Get Started</div>
<motion.button

whileHover={{scale:1.1}}
transition={{duration:"0.5"}}
id="contact">Contact</motion.button>
</div>

<div id="hamburger">
<span  class="material-symbols-outlined">
menu
</span>
</div>
</div>
 
    </>
  )
}

export default Header
