import * as types from './type'


const initstate = {
  loading: false,
  error: false,
  cart: [],
  products: [],
  token: sessionStorage.getItem("token") || "",
  orders:[],
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
    case types.ADDCARTPRODUCTS: {
      return { ...state,error:false,loading:false};
    }
    case types.GETCARTPRODUCTS: {
      return { ...state,error:false,loading:false,cart:payload};
    }
    case types.DELETECARTPRODUCTS: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLECARTQUANTITY: {
      return { ...state,error:false,loading:false};
    }
    case types.ADDRESSUPDATE: {
      return { ...state,error:false,loading:false};
    }
    case types.DELETE_ALLCARTPRODUCTS: {
      return { ...state,error:false,loading:false};
    }
    case types.ADD_ALLCARTPRODUCTS_TO_ORDERS: {
      return { ...state,error:false,loading:false};
    }
    case types.GET_ALL_ORDERS: {
      return { ...state,error:false,loading:false,orders:payload};
    }
    default: {
      return { ...state };
    }
  }
};
