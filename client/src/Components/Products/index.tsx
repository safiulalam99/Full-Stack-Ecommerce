import { Container, Grid } from "@material-ui/core";
import Product from "../Product";
import { useEffect } from 'react'


import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchingProductsThunk } from "../../redux/cartRedux";
import { Link } from "react-router-dom";



const Products = () => {

  const dispatch = useAppDispatch();
  const  fetchedProducts  = useAppSelector(state => state.cart.products);
  const  cart1  = useAppSelector(state => state);
  console.log('cart',fetchedProducts[0])

  useEffect(() => {
    console.log()
    dispatch(fetchingProductsThunk());

  },[]);
  return (
    <Container maxWidth="md">
      <Link to ={`/login`} style={{textDecoration:"none"}}>
    <Grid container spacing={3} >
        {fetchedProducts.map((item) => (
      <Grid item sm={4} md={3} xs={12}>
          <Product item={item} key={item._id} />
      </Grid>
        ))}
    </Grid>
    </Link>
    </Container >
  );
};

export default Products;
