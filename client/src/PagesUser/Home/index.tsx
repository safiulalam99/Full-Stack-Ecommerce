import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Navbar";
import Products from "../../Components/Products";
import SingleProduct from "../SingleProduct";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchingProductsThunk } from "../../redux/homepageRedux";
import { Button } from "@material-ui/core";
import ProductDetail from "../../Components/ProductDetail";
import DropdownMenu from "../../Components/DropdownMenu";

const Home = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.product);
  const cart1 = useAppSelector((state) => state);
  // console.log('cart',cart1)

  const onClickHandler = (e: { preventDefault: () => void }) => {
    dispatch(fetchingProductsThunk());
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(fetchingProductsThunk());
  }, []);
  return (
    <>
      <Products />
      <Footer />
    </>
  );
};

export default Home;
