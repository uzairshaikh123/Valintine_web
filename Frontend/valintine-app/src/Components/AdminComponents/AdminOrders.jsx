import React, { useEffect, useState } from 'react'
import TableCompOrders from './TableCompOrders'
import './mainadmin.css'
import Orders from '../Tables/OrdersTable'
const AdminOrders = () => {
  return (
    <div>
      <h1>Orders</h1>
      <Orders />
    </div>
  )
}

export default AdminOrders