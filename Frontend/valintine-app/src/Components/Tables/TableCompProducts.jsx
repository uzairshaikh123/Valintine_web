import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handle_delete_product_by_admin, handlegetproducts } from "../../Redux/action";
import EditModal from "../AdminComponents/ProductEditModal";
import { TableContainer } from "@chakra-ui/react";


const TableCompProducts= () => {
  const itemsPerPage = 3; // Number of items to show per page
  const data = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", age: 35, email: "michael@example.com" }
    // Add more data here...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

 const handle_delete_product=(id)=>{
dispatch(handle_delete_product_by_admin(id)).then((res)=>{
  if(res.status ==200 || res.status ==201) {
    alert("Product deleted successfully")
  }else{
    alert("error")
  }
})
 }
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const { loading, error, products } = store;


  useEffect(() => {
    dispatch(handlegetproducts());
  }, []);
console.log(products);



let keys = ["image", "id", "name", "city","Price","Edit","Delete"];


  return (
    <TableContainer style={{minWidth:"100%"}}>
      {/* <Table> */}
        {/* <TableHead>
          <TableRow>
          {  keys.map((el)=>{

return <TableHeaderCell>{el}</TableHeaderCell>
})
}
          </TableRow>
        </TableHead> */}
        {/* <tbody>
          {products?.map((item) => (
            <TableRow key={item._id}>
               <TableCell>
               <img style={{height:"50%",width:"50%"}} src={item.image[0]} alt="" /> 
                </TableCell>
               <TableCell>{item._id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <EditModal id={item?._id} products={products}/>
              </TableCell>
              <TableCell>
                <Button onClick={()=>handle_delete_product(item._id)}>DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody> */}
      {/* </Table> */}
      {/* <Pagination>
        {products?.map((_, index) => (
          <PaginationButton
            key={index}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </Pagination> */}
    </TableContainer>
  );
};

export default TableCompProducts;
