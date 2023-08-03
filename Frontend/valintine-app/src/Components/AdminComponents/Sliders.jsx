import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handle_addslider_Image_by_admin, handle_deleteslider_Image_by_admin, handlegetproducts } from "../../Redux/action";
import { Button, Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";

const Sliders= () => {


  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const { loading, error, products } = store;


  useEffect(() => {
    dispatch(handlegetproducts());
  }, []);
console.log(products);

const handleaddsliderImage =()=>{
  dispatch(handle_addslider_Image_by_admin()).then((res)=>{
    if(res.status==200 || res.status==201){
      alert("Image Added")
    }else{
      alert("error")
    }
  })
}
const handledeletesliderImage =()=>{
  dispatch(handle_deleteslider_Image_by_admin()).then((res)=>{
    if(res.status==200 || res.status==201){
      alert("Image Added")
    }else{
      alert("error")
    }
  })
}



  return (
    <>
    <Button float={'right'}  colorScheme='teal' variant='solid' onClick={handleaddsliderImage}>
    ADD IMAGES
    </Button>
    <TableContainer style={{minWidth:"100%",overflow:"hidden"}}>
      <Table>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>ID</Th>
             <Th>Link</Th>           
          </Tr>
        </Thead>
        <tbody>
          {products?.map((item) => (
            <Tr key={item._id}>
               <Td>
               <img style={{height:"50%",width:"50%"}} src={"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/candle.jpg"} alt="" /> 
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
          </>
  );
};

export default Sliders;
