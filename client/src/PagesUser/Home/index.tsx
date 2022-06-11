import React, { useEffect } from 'react'
import Footer from '../../Components/Footer'
import NavBar from '../../Components/Navbar'
import Products from '../../Components/Products'

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchingProductsThunk } from "../../redux/cartRedux";
import { Button } from '@material-ui/core';

const Home = () => {

  const dispatch = useAppDispatch();
  const  cart  = useAppSelector(state => state.cart);
  const  cart1  = useAppSelector(state => state);
  // console.log('cart',cart1)

  const onClickHandler = (e: { preventDefault: () => void; }) => {
    dispatch(fetchingProductsThunk());
    e.preventDefault();
  }

  useEffect(() => {
    dispatch(fetchingProductsThunk());
  },[]);
  return (
<>
      <Button onClick={onClickHandler}>TEST REDUX</Button>
      <Products />
      <Footer/>
      </>

 
  )
}

export default Home