import { Container, Grid, TextField } from "@material-ui/core";
import Product from "../Product";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchingProductsThunk } from "../../redux/homepageRedux";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import { Filter } from "@material-ui/icons";

const Products = () => {
  const dispatch = useAppDispatch();
  const fetchedProducts = useAppSelector((state) => state.product.products);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});
  const [searchIn, setSearchIn] = useState("");

  const location = useLocation();

  const handleFilters = (e: SelectChangeEvent) => {
    const value = e.target.value as string;
    setFilters({ [e.target.name]: value });
  };

  useEffect(() => {
    // console.log();
    dispatch(fetchingProductsThunk());
  }, []);


  
  return (
    <>
      <Box style={{ display: "flex", left: "80px", top: "2px" }}>
       
        {/* <InputLabel id="filter">Filter</InputLabel>
        <Select name="category" onChange={handleFilters}>
          <MenuItem value={"men's clothing"}>Mens</MenuItem>
          <MenuItem value={"women's clothing"}>Women</MenuItem>
          <MenuItem value={"electronics"}>Electronics</MenuItem>
          <MenuItem value={"jewelery"}>Jewelery</MenuItem>
        </Select>
        <InputLabel id="sort">Sort</InputLabel>
        <Select name="sort" onChange={(e:SelectChangeEvent)=>setSort(e.target.value)}>
          <MenuItem value={"asc"}>Ascending</MenuItem>
          <MenuItem value={"desc"}>Descending</MenuItem>
          <MenuItem value={"price"}>Price</MenuItem>
          <MenuItem value={"latest"}>Latest</MenuItem>
        </Select> */}
      </Box>
      <Container maxWidth="md" style={{ display: "flex", paddingTop: "25px" }}>
        <Grid container spacing={3}>
          {fetchedProducts.map((item: any) => (
            <Grid item sm={4} md={3} xs={12}>
              <Link
                to={`/product/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <Product
                  item={item}
                  key={item._id}
                  filters={filters}
                  sort={sort}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Products;
