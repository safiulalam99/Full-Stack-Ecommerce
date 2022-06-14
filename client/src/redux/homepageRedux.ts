import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
   _id: string;
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string;
  price: number;
}

type CartInitialState = {
  products: Product[];
  isLoading:boolean;
  
};

const initialState: CartInitialState = {
  products: [],
  isLoading:false
};
export const fetchingProductsThunk = createAsyncThunk("product/fetchProducts" ,async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/products", {});
    return { ...res };
  } catch (error: any) {
    return error.message;
  }
});
const homepageSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    
  },
  extraReducers(builder) {
    builder.addCase(fetchingProductsThunk.pending, (state, action) => {
      state.isLoading = true
      // console.log(state)
    });
    builder.addCase(fetchingProductsThunk.fulfilled, (state, action) => {
      // console.log(action.payload)
        state.products = action.payload.data
        // state.isLoading=false 
    });
  },
});

export const { addProduct  } = homepageSlice.actions;
export default homepageSlice.reducer;
