import React, { useEffect } from 'react'
import ColumnGroupingTable from './TableComp'
import { handlegetproducts } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const AdminProducts = () => {



  return (
    <div>
        <ColumnGroupingTable/>
    </div>
  )
}

export default AdminProducts

