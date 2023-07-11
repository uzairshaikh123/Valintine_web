import * as types from './type'


const initstate = {
  loading: false,
  error: false,
  cart: [],
  products: [],
  token: localStorage.getItem("token") || "",
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case types.ERROR: {
      return { ...state,error:true,loading:false};
    }
    case types.LOADING: {
      return { ...state,error:false,loading:true};
    }
    case types.GETPRODUCTS: {
      return { ...state,error:false,loading:false,products:payload};
    }
    case types.LOGIN: {
      return { ...state,error:false,loading:false,token:payload};
    }
    case types.SIGNUP: {
      return { ...state,error:false,loading:false,token:payload};
    }
    case types.LOGOUT: {
      return { ...state,error:false,loading:false,token:""};
    }
    default: {
      return { ...state };
    }
  }
};
