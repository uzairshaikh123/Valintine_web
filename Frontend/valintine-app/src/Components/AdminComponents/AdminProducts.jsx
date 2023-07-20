import React, { useEffect } from 'react'
import ColumnGroupingTable from './TableComp'
import { handlegetproducts } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import TableComp from './TableComp';
import { Button } from '@mui/material';

const AdminProducts = () => {



  return (
    <div  style={{width:"100%",border:"1px solid red"}}>
      <Button style={{float:"right",margin:"25px"}}>ADD Products</Button>
     <TableComp />
      
    </div>
  )
}

export default AdminProducts

