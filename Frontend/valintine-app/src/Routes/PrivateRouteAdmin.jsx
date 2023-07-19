import React from 'react'
import { useNavigate ,Navigate} from 'react-router-dom'

const PrivateRouteAdmin = ({children}) => {

const admin = JSON.parse(sessionStorage.getItem("admindetails")) || ""
const navigate = useNavigate()
// console.log(user)
if(!admin){
    return <Navigate to={"/adminlogin"}/>
}

  return (
  children
  )
}

export default PrivateRouteAdmin