import React from 'react'

const feature_of_leftpart = (props) => {
  return (
    <div  id="features" style={props.left && {marginLeft: "1rem"}}>
        <div id="number" style={props.dif && {marginLeft: "1rem"}}>{props.number} </div>
        <ion-icon id="plus_icon"  style={props.dif && {marginLeft: "-2rem"}} name="add"></ion-icon>
          <div id="label">{props.title}</div>
      </div>
  )
}

export default feature_of_leftpart
