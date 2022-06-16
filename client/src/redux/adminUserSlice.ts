import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { iteratorSymbol } from "immer/dist/internal";


const adminUserSlice = createSlice({
  name: "user",
  initialState: { currentUser: [], isFetching: false, error: false },
  reducers: {
    //GET ALL
    getAdminUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAdminUserSuccess: (state: any, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
    },
    getAdminUserFailure: (state) => {
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
  getAdminUserStart,
  getAdminUserSuccess,
  getAdminUserFailure,
  
} = adminUserSlice.actions;
export default adminUserSlice.reducer;
