import * as React from 'react';
import './modal.css'
import { Box, Button, Modal, Text, useDisclosure } from '@chakra-ui/react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function BasicModal({name}) {
  console.log("ok")
  const { isOpen, onClose ,onOpen} = useDisclosure()
let cities =[{name:"Delhi",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Delhi_Icon-min.png",id:1},
  {name:"Jaipur",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Jaipur_Icon-min.png",id:2},
  {name:"Bangalore",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Bangalore_Icon-min.png",id:3},
  {name:"kolkata",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Kolkata_Icon-min.png",id:4},
  {name:"Indore",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Indore_Icon-min.png",id:5},
  {name:"Pune",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Pune_Icon-min.png",id:6},
  {name:"Across India",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/india-icon-min.png",id:7},
  {name:"Hyderabad",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Hyderabad_min.png",id:8},
  {name:"Mumbai",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Mumbai_min.png",id:9},
  {name:"Kanpur",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Kanpur_min.png",id:10},
  {name:"chennai",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Chennai_min.png",id:11},
  {name:"Jammu",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Jammu_min.png",id:12},
  {name:"Lucknow",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Lucknow_min.png",id:13},
  {name:"Chandigarh",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Chandigarh_min.png",id:14},
  {name:"Ahmedabad",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Ahmedabad_min.jpg",id:15},]
let initial = true
let mycity = sessionStorage.getItem("cityname") || "delhi"


if(mycity){
initial=false
}else{
  initial=true
}

  
  const handleClose = (city) =>{ 
    
    sessionStorage.setItem("cityname",city)
    
    onClose()
  
  }
  return (
    <div className='modal-cont'>
      <Button  style={{padding:"10px",cursor:"pointer",backgroundColor:"transparent",border:"none",fontSize:"20px",color:"black",display:"flex"}} className='locationbtn navloc' onLoad={onOpen}  onClick={onOpen}
      >
        <img style={{width:"20%",height:"100%"}} src="https://img.icons8.com/?size=512&id=7880&format=png" alt="" />
        {mycity.toUpperCase()}</Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}
      >

<ModalOverlay />
        <ModalContent >
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody className='modal-body'>
          <Box className='city-modal'>
          <Text marginBottom={'30px'} id="modal-modal-title" variant="h6" component="h2">
            SELECT YOUR CITY
          </Text>
          <hr />
          <p  id="desc" style={{textAlign:"center",marginTop:"10px"}}>Find more than 3000 decorations, gifts and surprises!</p>
          <Text id="modal-modal-description" sx={{ mt: 2 }}>
            <Box className={"cities-cont"}>

{
    cities.map((city, index) => (
        <div onClick={()=>handleClose(city.name)} className='cities'  key={index}>
        <img className='modal-img' src={city.img} alt={city.name} />
        <p>{city.name.toUpperCase()}</p>
      </div>
    ))
    
}
    </Box>
        <hr style={{marginTop:"40px"}} />
          </Text>
        </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>


        
      </Modal>
    </div>
  );
}

