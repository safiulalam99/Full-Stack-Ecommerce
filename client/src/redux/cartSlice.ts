import { createSlice } from "@reduxjs/toolkit";

export interface ProductType {
    _id: string;
   name: string;
   description: string;
   image: string;
   category: string[];
   price: number;
   quantity: number;
   updatedAt:string;
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
            state.total += action.payload.price * action.payload.quantity;
        }
    }
})
export const { addProduct  } = cartSlice.actions;
export default cartSlice.reducer;
