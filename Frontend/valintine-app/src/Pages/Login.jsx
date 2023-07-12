import React, { useState } from "react";
import "./login.css";
import Swal from 'sweetalert2'
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin, handleSignup } from '../Redux/action'
import { Hearts } from  'react-loader-spinner'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
  const [showLogin, setShowLogin] = useState(true);
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
  console.log(obj);
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
      console.log(obj);
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

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="container">
      <CSSTransition
        in={showLogin}
        timeout={300}
        classNames="form-transition"
        unmountOnExit
      >
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handlelogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
            <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <button className="registerbtn" type="submit">Login</button>
            <p className="toggle-text">
              Don't have an account?{" "}
              <span className="toggle-link" onClick={handleToggle}>
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!showLogin}
        timeout={300}
        classNames="form-transition"
        unmountOnExit
      >
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleregister}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <button  className="registerbtn" type="submit">Register</button>
            <p className="toggle-text">
              Already have an account?{" "}
              <span className="toggle-link" onClick={handleToggle}>
                Login
              </span>
            </p>
          </form>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Login;
