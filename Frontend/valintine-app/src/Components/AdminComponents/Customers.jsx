import React, { useEffect, useState } from "react";
import { handle_get_all_users } from "../../Redux/action";
import { useDispatch } from "react-redux";
import TableCompUsers from "../Tables/UsersTable";

const Customers = () => {
  


  return (
    <div>
      <h1>Customers</h1>
      <TableCompUsers />
    </div>
  );
};

export default Customers;
