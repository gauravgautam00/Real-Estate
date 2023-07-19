import React, { useRef } from 'react'

// import value from "/Images/prologis.png"



const Brand = () => {

  const cont=useRef(null);
  if(cont.current){
  window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;
    const marginTop = 1285-windowWidth; // Adjust the coefficient and constant values as needed
  console.log(windowWidth);
    cont.current.style.marginTop = `${marginTop}px`;
  });
}

  return (
    <div id="bcontainer" ref={cont}> 
    <img className="bimage" src="Images/prologis.png"/>
    <img className="bimage" src="Images/equinix.png"/>
      <img className="bimage"src="Images/tower.png"/>
      <img className="bimage" src="Images/realty.png"/>
      
     
    </div>
  )
}

export default Brand
