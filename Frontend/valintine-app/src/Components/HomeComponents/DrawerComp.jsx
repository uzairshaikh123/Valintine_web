import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Image,
  Text,
  Box,
} from '@chakra-ui/react'
import './hamburger.css'
import React, { useEffect, useState } from 'react'
import MegaMenu from './MegaMenu'
import { Link, useNavigate } from "react-router-dom";

function TemporaryDrawer() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("userdetails"))
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const handlelogout = () => {
    sessionStorage.setItem("token", "");
    window.location.reload()
  };
  let tokenValue = sessionStorage.getItem("token") || ""
  return (
    <>
      <Button ref={btnRef} onClick={onOpen} colorScheme='white'>
        <img className='hamburger' src="https://img.icons8.com/?size=512&id=3761&format=png" alt="" />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image style={{ height: "100px" }} src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/newlogo.webp" alt="" />
            <Box display={"flex"} justifyContent={"space-evenly"}  mt={"20px"} gap={"10px"}>
             <Link onClick={()=>onClose()} to={"/cart"}>
             <Button colorScheme='pink' >Cart</Button>
             </Link> 
             <Link  onClick={()=>onClose()}  to={"/orders"}>
              <Button colorScheme='pink'>Orders</Button>
             </Link>
            </Box>
          </DrawerHeader>
          <Box width={"100%"}>
          <Button colorScheme='green'  width={"100%"}>UserName :- {user?.name} </Button>
          <Button colorScheme='green' mt={"10px"} width={"100%"}>Email :- {user?.email} </Button>
          </Box>

          <DrawerBody
          // border={"1px solid red"}
          >
            <MegaMenu />
          </DrawerBody>

          <DrawerFooter>
            {
              tokenValue ?
                <Link to={"/login"}>
                  <Button variant='outline' bg={"red"} color='white' _hover={{ backgroundColor: 'red.400' }} mr={3} onClick={handlelogout} size="lg" width={"260px"}>
                    Logout
                  </Button>
                </Link>
                :
                <Link to={"/login"}>
                  <Button variant='outline' bg={"rgb(255, 65, 139)"} _hover={{ backgroundColor: 'rgb(240, 113, 162)' }} color={"white"} mr={3} width={"260px"} onClick={() => onClose()}>
                    Login
                  </Button>
                </Link>
            }

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default TemporaryDrawer

{/* <Link to={"/login"}>
<a href="#" className="login-nav location">
  Login
</a>
</Link> */}