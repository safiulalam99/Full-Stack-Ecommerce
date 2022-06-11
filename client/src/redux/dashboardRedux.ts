import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string;
  price: number;
}

type InitialState = {
  products: Product[];
};

const initialState: InitialState = {
  products: [],
};
export const handler = createAsyncThunk("cart/fetchProducts" ,async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/products", {});
    console.log('res',res);
    return { ...res };
  } catch (error: any) {
    // console.log(error.response.data);
    return error.message;
  }
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(handler.fulfilled, (state, action) => {
      console.log(action.payload)
    });
  },
});

export const { addProduct,  } = cartSlice.actions;
export default cartSlice.reducer;
