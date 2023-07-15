import Cookies from "js-cookie";
import * as types from "./type";
import axios from "axios";

export const handleLogin = (data) => (dispatch) => {
  dispatch({ type: types.LOADING });

  return axios
    .post("http://localhost:8080/auth/login", data)
    .then((res) => {
      console.log(res);
      Cookies.set("token", res.data.token);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.LOGIN, payload: res.data.token });

      return res;
    })
    .catch((error) => {
      dispatch({ type: types.ERROR });
      return error;
    });
};
export const handleSignup = (data) => (dispatch) => {
  dispatch({ type: types.LOADING });

  return axios
    .post("http://localhost:8080/auth/register", data)
    .then((res) => {
      // console.log(res)
      Cookies.set("token", res.data.token);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.SIGNUP, payload: res.data.token });

      return res;
    })
    .catch((err) => {
      dispatch({ type: types.ERROR });
      return err;
    });
};

export const handlegetproducts = () => (dispatch) => {
  dispatch({ type: types.LOADING });

  return axios
    .get("http://localhost:8080/products/all", {
      headers: {
        "Content-Type": "application/json",
        authorization: Cookies.get("token"),
      },
    })
    .then((res) => {
      console.log(res.data);

      dispatch({ type: types.GETPRODUCTS, payload: res.data.data });

      return res;
    })
    .catch((err) => {
      dispatch({ type: types.ERROR });
      return err;
    });
};
export const handlegetcart = () => (dispatch) => {
  dispatch({ type: types.LOADING });

  return axios
    .get("http://localhost:8080/cart/usercart/", {
      headers: {
        "Content-Type": "application/json",
        authorization: Cookies.get("token"),
      },
    })
    .then((res) => {
      console.log(res.data);

      dispatch({ type: types.GETPRODUCTS, payload: res.data.data });

      return res;
    })
    .catch((err) => {
      dispatch({ type: types.ERROR });
      return err;
    });
};
