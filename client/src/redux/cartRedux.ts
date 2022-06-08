import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  products: [];
  quantity: Number;
  total: Number;
};

const initialState: InitialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
        // @ts-ignore
      state.quantity += 1;
      // @ts-ignore
      state.products.push(action.payload);
      state.total += action.payload.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
