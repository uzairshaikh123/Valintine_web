import * as types from './type'
import axios from 'axios'


export const handleLogin = (data) => (dispatch) => {


    dispatch({type:types.LOADING})

    return axios.post("http://localhost:8080/auth/login",data).then((res)=>{

        // console.log(res)
     
localStorage.setItem("token",res.data.token)
            dispatch({type:types.LOGIN,payload:res.data.token})
           
       
        return res

    }).catch(()=>{
        return dispatch({type:types.ERROR})
    })

}
export const handleSignup = (data) => (dispatch) => {

    dispatch({type:types.LOADING})

    return axios.post("http://localhost:8080/auth/register",data).then((res)=>{
// console.log(res)
localStorage.setItem("token",res.data.token)
    dispatch({type:types.SIGNUP,payload:res.data.token})

return res
    }).catch(()=>{
        return dispatch({type:types.ERROR})
    })

}

export const handlegetproducts = (data) => (dispatch) => {

    dispatch({type:types.LOADING})

    return axios.post("http://localhost:8080/products/all",data).then((res)=>{

    dispatch({type:types.GETPRODUCTS,payload:res.data})

return res
    }).catch(()=>{
        return dispatch({type:types.ERROR})
    })

}