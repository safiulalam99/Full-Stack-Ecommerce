import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { iteratorSymbol } from "immer/dist/internal";

type UserInitialState = {
  products: [];
  isFetching: boolean;
  error: boolean;
};

const initialState: UserInitialState = {
  products: [],
  isFetching: false,
  error: false,
};

const adminProductSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    //GET ALL
    getAdminProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAdminProductSuccess: (state: any, action) => {
      state.isFetching = false;
      state.products = action.payload;
      state.error = false;
    },
    getAdminProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteAdminProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteAdminProductSuccess: (state: any, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item: any) => item._id === action.payload),
        1
      );
      state.error = false;
    },
    deleteAdminProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateAdminProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateAdminProductSuccess: (state: any, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item: any) => item._id === action.payload)
      ] = action.payload.products;
      state.error = false;
    },
    updateAdminProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //ADD
    addAdminProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addAdminProductSuccess: (state: any, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
      state.error = false;
    },
    addAdminProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  getAdminProductStart,
  getAdminProductSuccess,
  getAdminProductFailure,
  deleteAdminProductStart,
  deleteAdminProductSuccess,
  deleteAdminProductFailure,
  updateAdminProductStart,
  updateAdminProductSuccess,
  updateAdminProductFailure,
  addAdminProductStart,
  addAdminProductSuccess,
  addAdminProductFailure,
} = adminProductSlice.actions;
export default adminProductSlice.reducer;
