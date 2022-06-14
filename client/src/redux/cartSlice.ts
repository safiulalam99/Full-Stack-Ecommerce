import { createSlice } from "@reduxjs/toolkit";

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
   products: [];
   quantity:number;
   total:number;
   
   
 };
 
 const initialState: CartInitialState = {
   products:[],
   quantity:0,
   total:0,
 };


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct:(state:any,action:any)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price;
        }
    }
})
export const { addProduct  } = cartSlice.actions;
export default cartSlice.reducer;
