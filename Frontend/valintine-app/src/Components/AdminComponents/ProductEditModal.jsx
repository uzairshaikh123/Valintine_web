import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlegetproducts } from '../../Redux/action';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';


export default function EditModal({id,products}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [product , setproduct] = React.useState([])
  const dispatch = useDispatch()
const store = useSelector(store=>store)
// const {loading,error,products}=store

// React.useEffect(()=>{
// dispatch(handlegetproducts())
// },[])


  React.useEffect(()=>{
    let findproduct = products?.filter((el)=>{
      return el._id===id
    })
    if(findproduct?.length){

      setproduct(findproduct[0])
    }
  },[products])


// console.log(product,id)
  return (
    <div>
      <Button onClick={onOpen}>Edit</Button>
      <Modal
       isOpen={isOpen} onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalOverlay />
        <ModalContent>

          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           

        <Box>
          
          <div style={{height:"80vh",overflowY:"auto"}}>

    <label htmlFor="">Name</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.name} />
    <label htmlFor="">category</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.category} />
    <label htmlFor="">image</label>
    {product?.image?.map((el)=>{
      return <input  type="text" placeholder='Edit url of Product' defaultValue={el}/>
    })}
    {/* <input defaultValue={product?.image[0]} /> */}
    <label htmlFor="">price</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.price}  />
    <label htmlFor="">city</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.city} />
    <label htmlFor="">weight</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.weight} />
    <label htmlFor="">multiple_price</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.multiple_price[0]} /> */}
    <label htmlFor="">addons</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.add} /> */}
    <label htmlFor="">prod_details</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.prod_details[0]}/>
    <label htmlFor="">description</label>
  <input type="text" placeholder='Enter Name of Product'  defaultValue={product?.description}/> */}
    <label htmlFor="">delivery_info</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.delivery_info[0]}/> */}
    <label htmlFor="">pincodes</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.pincodes}/>
    <button
    style={{
      background: "blue",
      color: "white",
      padding: "10px 25px",
      display: "block",
      margin: "auto",
      cursor: "pointer",
      border: "none",
      borderRadius: "10px",
      marginTop: "20px",
    }}>Save</button>
          </div>
        </Box>
  </ModalBody>
</ModalContent>
      </Modal>
    </div>
  );
}
