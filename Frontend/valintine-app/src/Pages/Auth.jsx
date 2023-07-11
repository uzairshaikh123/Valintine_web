import React, { useRef, useState } from 'react'
import './login.css'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin, handleSignup } from '../Redux/action'
import { Hearts } from  'react-loader-spinner'
import { Navigate, useNavigate } from 'react-router-dom'
const Auth = () => {

const user = useRef({})
const [username , setusername]=useState("")
const [email , setemail]=useState("")
const [password , setpassword]=useState("")
const dispatch = useDispatch()
const navigate = useNavigate()
const store = useSelector(store=>store)
console.log(store)
const {loading,error,token}=store
const handleregister=(e)=>{
	e.preventDefault()
let obj={
	name:username,
	email:email,
    password:password
}
	dispatch(handleSignup(obj)).then((res)=>{
		if(res.data.msg=="User created"){
			Swal.fire(
				'Good job!',
				'Signup Successful',
				'success'
			  )
			  return navigate("/")
		}else{
			Swal.fire(
				'Error',
				"couldn't signup in",
				'error'
			  )
return navigate("/login")
		}
		
	})
	
}


const handlelogin=(e)=>{

	e.preventDefault()
	let obj={
		email:email,
		password:password
	}
		dispatch(handleLogin(obj)).then((res)=>{
			if(res.data.msg=="User loggedIn Successfully"){
				Swal.fire(
					'Good job!',
					'You have successfully logged in',
					'success'
				  )
				  return navigate("/")
			}else{
				Swal.fire(
					'Error',
					"couldn't log in",
					'error'
				  )
	return navigate("/login")
			}
		})
}

if(token){
	return <Navigate to="/" />
}

  return (
	loading?<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
		<Hearts 
  height="80"
  width="80"
  color="red"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
	</div>:error?<div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
		<h1 style={{textAlign:"center"}}>Error</h1>
	</div>:<div style={{background:"pink",padding:"20px"}}>
    <div className="main" style={{marginTop:"50px"}}>

		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="login">
				<form className="form">
					<label for="chk" aria-hidden="true" >Log in</label>
					<input className="input" type="email" name="email" placeholder="Email" required="true" onChange={(e)=>setemail(e.target.value)}  />
					<input className="input" type="password" name="pswd" placeholder="Password" required="true"  onChange={(e)=>setpassword(e.target.value)}  />
					<button className='loginbtn' style={{width:"100%",borderRadius:"20px",border:"none",padding:"10px",cursor:"pointer"}} onClick={handlelogin}>Log in</button>
				</form>
			</div>

      <div className="register">
				<form className="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input className="input" type="text" name="txt" placeholder="Username" required="true" onChange={(e)=>setusername(e.target.value)}/>
					<input className="input" type="email" name="email" placeholder="Email" required="true" onChange={(e)=>setemail(e.target.value)}/>
					<input className="input" type="password" name="pswd" placeholder="Password" required="true" onChange={(e)=>setpassword(e.target.value)} />
					<button style={{width:"100%",borderRadius:"20px",border:"none",padding:"10px",cursor:"pointer"}} className='registerbtn' onClick={handleregister}>Register</button>
				</form>
			</div>
			</div>

	

    </div>
  )
}

export default Auth