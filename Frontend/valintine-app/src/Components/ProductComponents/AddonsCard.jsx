import React from 'react'
import './addonscard.css'
import { Stack, Switch } from '@chakra-ui/react'
const AddonsCard = ({image}) => {
  return (
    <div id='addons-card'>
      <div>
      <img style={{height:"150px",width:"150px"}} id='addons-img' src={image} alt="" />

      </div>

      <div>
      <p>Theme Based E-Invite</p>
      <p>Add a theme based e-invite for welcoming your guest</p>
      <p>$250</p>
      </div>

      <div>
     
  <Switch colorScheme='pink' size='lg' />

</div>

    </div>
  )
}

export default AddonsCard
