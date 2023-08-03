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
} from '@chakra-ui/react'
import './hamburger.css'
import React from 'react'
import MegaMenu from './MegaMenu'

function TemporaryDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

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
            <Image src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/logo/logo3.png" alt="" />
          </DrawerHeader>

          <DrawerBody 
        // border={"1px solid red"}
        >
            <MegaMenu />
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            {/* <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default TemporaryDrawer