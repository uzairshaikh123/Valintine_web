import React from 'react'
import './addons.css'
import AddonsCard from './AddonsCard'
const Addons = () => {
  return (
    <div style={{height:"auto",backgroundColor:"white"}}>
      <p>Customizations</p>
    <div id='addons-cont'>
      <hr />

<AddonsCard image={"https://deowgxgt4vwfe.cloudfront.net/uploads/166842035620352.jpg"} />
<AddonsCard image={"https://deowgxgt4vwfe.cloudfront.net/uploads/161641821224257.jpg"} />

    </div>
<a style={{marginLeft:"30px",marginBottom:"20px"}} href='#'>Read More...</a>
    </div>
  )
}

export default Addons
