import axios from "axios";
import { publicRequest, userRequest } from "../fetchingRequests";
import {
  deleteAdminProductFailure,
  deleteAdminProductStart,
  deleteAdminProductSuccess,
  getAdminProductFailure,
  getAdminProductStart,
  getAdminProductSuccess,
  updateAdminProductFailure,
  updateAdminProductStart,
  updateAdminProductSuccess,
  addAdminProductFailure,
  addAdminProductStart,
  addAdminProductSuccess,
} from "./adminProductsSlice";
import jwt_decode from "jwt-decode";

import {
  getAdminUserStart,
  getAdminUserSuccess,
  getAdminUserFailure,
} from "./adminUserSlice";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { Functions } from "@material-ui/icons";
const token1 =  localStorage.getItem("token") as any;

export const login = async (dispatch: any, googleToken: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/login/google",
      {},
      {
        headers: {
          Authorization: `Bearer ${googleToken}`,
        },
      }
    );
    console.log(googleToken);
    dispatch(loginSuccess(res));
    console.log(res);
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};

export const getAdminProducts = async (dispatch: any) => {
  dispatch(getAdminProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getAdminProductSuccess(res.data));
  } catch (err) {
    dispatch(getAdminProductFailure());
  }
};

export const deleteAdminProduct = async (id: any, dispatch: any) => {
  const getToken = localStorage.getItem("token");
  dispatch(deleteAdminProductStart());
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/v1/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    console.log(res);
    dispatch(deleteAdminProductSuccess(id));
  } catch (err) {
    dispatch(deleteAdminProductFailure());
  }
};

export const updateAdminProduct = async (
  id: any,
  product: any,
  dispatch: any
) => {
  const getToken = localStorage.getItem("token");
  dispatch(updateAdminProductStart());
  try {
    const res = await axios.put(`http://localhost:5000/api/v1/products/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    console.log(res);
    dispatch(updateAdminProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateAdminProductFailure());
  }
};

export const addAdminProduct = async (
  dispatch: any,
  product: any,
  token: any
) => {
  const getToken = localStorage.getItem("token");
  console.log(getToken);

  dispatch(addAdminProductStart());
  try {
    const res = await axios.post(
      `http://localhost:5000/api/v1/products`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      }
    );
    console.log(res);
    dispatch(addAdminProductSuccess(res.data));
  } catch (err) {
    dispatch(addAdminProductFailure());
  }
};

//USER

export const getAdminUsers = async (dispatch: any) => {
  dispatch(getAdminUserStart());
  try {
    const res = await axios.get("http://localhost:5000/api/v1/user", {
      headers: {
        Authorization: `Bearer ${token1}`,
      },
    });
    dispatch(getAdminUserSuccess(res.data));
  } catch (err:any) {
    dispatch(getAdminUserFailure());
    console.log(err)
  }
};
export function decodeFunction ()  {
  if(token1){
    const decodedToken = jwt_decode(token1);
    return decodedToken
  }
}