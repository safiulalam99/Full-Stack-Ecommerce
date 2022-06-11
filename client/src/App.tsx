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
import AddProducts from "./PagesAdmin/AddProducts";
import NavBar from "./Components/Navbar";
import UserTable from "./PagesAdmin/UserTable";
import Orders from "./PagesAdmin/Orders";
import ProductsAdmin from "./PagesAdmin/Products";
import UserProfile from "./PagesUser/UserProfile";
import Cart from "./PagesUser/Cart";

function App() {
  const user = false;
  return (
    <Router>
      <NavBar/>
      <Routes>

        <Route path="/admin/editProducts" element={<AddProducts />} />
        <Route path="/admin/users" element={<UserTable />} />
        <Route path="/admin/products" element={<ProductsAdmin />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/userProfile" element={<UserProfile />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
