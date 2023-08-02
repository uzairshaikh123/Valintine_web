import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handlegetproducts } from "../../Redux/action";
import { Button, Table, TableContainer } from "@chakra-ui/react";

const TableCompOrders= () => {
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


  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const { loading, error, products } = store;


  useEffect(() => {
    dispatch(handlegetproducts());
  }, []);
console.log(products);





  return (
    <TableContainer style={{minWidth:"90%",border:"1px solid red"}}>
      <Table>
        {/* <TableHead>
          <TableRow>
            <TableHeaderCell>Image</TableHeaderCell>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Edit</TableHeaderCell>
            <TableHeaderCell>Delete</TableHeaderCell>
            <TableHeaderCell>Share</TableHeaderCell>
          </TableRow> */}
        {/* </TableHead> */}
        {/* <tbody>
          {products?.map((item) => (
            <TableRow key={item._id}>
               <TableCell>
               <img style={{height:"50%",width:"50%"}} src={item.image[0]} alt="" /> 
                </TableCell>
              <TableCell>{item.name}.splice(0,10)</TableCell>
               <TableCell>{item._id}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Button>EDIT</Button>
              </TableCell>
              <TableCell>
                <Button>DELETE</Button>
              </TableCell>
              <TableCell>
                <Button>SHARE</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody> */}
      </Table>
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

export default TableCompOrders;
