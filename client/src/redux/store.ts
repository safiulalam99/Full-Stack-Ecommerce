import {configureStore} from  '@reduxjs/toolkit';
import productReducer from './homepageRedux';
import singleProductReducer from './singleProductSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import adminProductsSlice from './adminProductsSlice';
import adminUserSlice from './adminUserSlice';


export const store =  configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
        user:userReducer,
        adminProducts:adminProductsSlice,
        adminUser:adminUserSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch