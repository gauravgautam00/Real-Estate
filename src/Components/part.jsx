import React from 'react'


const part = (props) => {
    const {image}=props;
   
  return (
    <div id="part">
      
      <img id="partimage"src={image}></img>
      <div id="partprice">${props.price}</div>
      
      <div id="partname">{props.name}</div>
      
      <div id="partdetail">{props.detail}</div>
    
    </div>
  )
}

export default part
