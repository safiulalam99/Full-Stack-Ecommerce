import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { ProductType } from "../../redux/cartSlice";
import Avatar from "@mui/material/Avatar";

import TextField from "@mui/material/TextField";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAdminProducts } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function TextFieldHiddenLabel() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const product = useSelector((state: any) =>
    state.adminProducts.products.find(
      (products: ProductType) => products._id === productId
    )
  );

  // @ts-ignore
  console.log(product?.name);

  useEffect(() => {
    getAdminProducts(dispatch);
  }, [dispatch]);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "60vh" }}
    >
      <Typography variant="h4" gutterBottom component="div">
        Edit Product
      </Typography>

      <TextField
        disabled
        placeholder="Placeholder"
        label=""
   
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
        value={product?._id}
      />
      <TextField
        label="Name"
        placeholder="hellothere"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
        value={product?.name}
      />
      <TextField
        label="Price"
        value={product?.price}
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <Avatar
        sx={{ width: 100, height: 100 }}
        src={product?.image}
        variant="square"
      ></Avatar>
      <TextField
        label="Quantity"
        value={product?.quantity}
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <TextField
        label="Category"
        value={product?.category}
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <TextField
        label="Description"
        multiline
        rows={4}
        value={product?.description}
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <Button variant="contained">Disable elevation</Button>
    </Grid>
  );
}
