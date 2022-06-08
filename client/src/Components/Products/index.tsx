import { Container, Grid } from "@material-ui/core";
import React from "react";
import { popularProducts } from "../../data";
import Product from "../Product";


const Products = () => {
  return (
    <Container maxWidth="md">
    <Grid container spacing={3} >
        {popularProducts.map((item) => (
      <Grid item sm={4} md={3} xs={12}>
          <Product item={item} key={item.id} />
      </Grid>
        ))}
    </Grid>
    </Container >
  );
};

export default Products;
