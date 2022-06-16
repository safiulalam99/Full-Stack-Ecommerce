// import React, {useState,useEffect}from 'react';
// import logo from './logo.svg';

// import axios from 'axios';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import Login from "./PagesUser/Login";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./PagesUser/Home";
import EditProducts from "./PagesAdmin/EditProducts";
import AddProducts from "./PagesAdmin/AddProducts";
import NavBar from "./Components/Navbar";
import UserTable from "./PagesAdmin/UserTable";
import Orders from "./PagesAdmin/Orders";
import ProductsAdmin from "./PagesAdmin/Products";
import UserProfile from "./PagesUser/UserProfile";
import Cart from "./PagesUser/Cart";
import SingleProduct from "./PagesUser/SingleProduct";
import { useAppSelector } from "./redux/hooks";
import { useEffect,useState } from "react";

function App() {
  // @ts-ignore
  const user = useAppSelector(state=>state.user.currentUser.token);
  const [isLoggedIn, setIsLoggedIn] = useState('');
  // localStorage.setItem('token', JSON.stringify(user));


  useEffect(()=>{
    const getToken = localStorage.getItem("token");
    if(getToken){
      setIsLoggedIn(getToken)
    }
  },[])

  useEffect(()=>{
    if(user) {
       localStorage.setItem("token", user)
    }
  },[user])
  // console.log('Tokenios',isLoggedIn)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/admin/editProducts/:productId" element={<EditProducts />} />
        <Route path="/admin/addProducts/" element={<AddProducts />} />
        <Route path="/admin/users" element={<UserTable />} />
        <Route path="/admin/products/" element={<ProductsAdmin />} />
        <Route path="/admin/orders" element={<Orders />} />

        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
