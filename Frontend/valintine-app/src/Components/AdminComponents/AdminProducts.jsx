import React, { useEffect } from 'react'
import ColumnGroupingTable from './TableComp'
import { handlegetproducts } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import TableComp from './TableComp';

const AdminProducts = () => {



  return (
    <div  style={{width:"100%",border:"1px solid red"}}>
     <TableComp />
      
    </div>
  )
}

export default AdminProducts

