import React from 'react'

import ContactsParts from "./ContactsParts" 



const contactleftpart = () => {
  return (
    <div id="contactLPcontainer">
      <div id="contactLPtitle1">Our Contact Us</div>
      <div id="contactLPtitle2">Easy to contact us</div>
      <div id="contactLPdesc">We always ready to help by providijng the best
       services for you. We beleive a good blace
        to live can make your life better</div>

<div id="contactLPcontacts">

<ContactsParts
header="Call"
number="021 123 145 14"
but="Call now"
icon="call"



/>
<ContactsParts

header="Chat"
number="021 123 145 14"
but="Chat now"
icon="chat"
/>
<ContactsParts

header="Video Call"
number="021 123 145 14"
but="Video Call now"
icon="video_call"
/>
<ContactsParts

header="Message"
number="021 123 145 14"
but="Message now"
icon="forum"
/>


</div>



    </div>
  )
}

export default contactleftpart
