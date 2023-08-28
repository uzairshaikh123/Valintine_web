import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handle_addtestimonial_Image_by_admin, handlegetfilterproducts, handlegetproducts } from "../../Redux/action";
import { Button, Table, TableContainer, Td, Th, Thead, Tr, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, } from "@chakra-ui/react";

const Testimonilas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imageUrl, setImageUrl] = useState("")
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const { loading, error, allproducts } = store;


  useEffect(() => {
    dispatch(handlegetproducts());
  }, []);


  const handleaddtestimonialImage = (url) => {
    dispatch(handle_addtestimonial_Image_by_admin(url)).then((res) => {
      if (res.status == 200 || res.status == 201) {
        alert("Image Added")
      } else {
        alert("error")
      }
    })
  }


  return (
    <>
      <Button float={'right'} colorScheme='teal' variant='solid' onClick={onOpen}>ADD IMAGES</Button>
      <TableContainer style={{ minWidth: "100%", overflow: "hidden" }}>
        <Table>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>ID</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <tbody>
            {allproducts?.map((item) => (
              <Tr key={item._id}>
                <Td>
                  <img style={{ height: "50%", width: "50%" }} src={"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/candle.jpg"} alt="" />
                </Td>

                <Td>{item._id}</Td>
                <Td>{item.price}</Td>

                <Td>
                  <Button>DELETE</Button>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>

      </TableContainer>


      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input variant='filled' placeholder='Add Image Url' onChange={(e) => setImageUrl(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' onClick={() => handleaddtestimonialImage(imageUrl)}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Testimonilas;



