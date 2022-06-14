import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string[];
  price: number;
  quantity:number;

}

type singleProductInitialState = {
  products: Product[] ;
  isLoading: boolean;
};

const initialState: singleProductInitialState = {
  products: [],
  isLoading: false,
};
export const fetchingProductsThunk = createAsyncThunk(
  "product/fetchProducts",
  async (id: string) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/products/${id}`,
        {}
      );
      return {...res };
    } catch (error: any) {
      return error.message;
    }
  }
);
const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchingProductsThunk.pending, (state, action) => {
      state.isLoading = true;
      // console.log(state)
    });
    builder.addCase(fetchingProductsThunk.fulfilled, (state, action) => {
      // console.log(action.payload)
      state.products = action.payload.data;
      state.isLoading = false;
    });
  },
});

export const { addProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;
