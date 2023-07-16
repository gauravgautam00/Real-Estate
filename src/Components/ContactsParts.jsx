import React from 'react'

const ContactsParts = (props) => {
  return (
    <>
      <div className="gg">
<div id="contactLPicon"><span id="call" class="material-icons">
{props.icon}
</span></div>
<div id="contactLPheader">{props.header}</div>
<div id="contactLPnumber">{props.number}</div>
<div id="contactLPnowbut">{props.but}</div>

</div>

    </>
  )
}

export default ContactsParts
