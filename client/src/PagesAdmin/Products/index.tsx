import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import moment from "moment";

import { getAdminProducts, deleteAdminProduct } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../../redux/cartSlice";

import { Box, Button, Container } from "@material-ui/core";

import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ProductsAdmin() {
  const dispatch = useDispatch();

  const handleDelete = (id: any) => {
    deleteAdminProduct(id, dispatch);
  };

  // @ts-ignore
  const products = useAppSelector((state) => state.adminProducts.products);
  useEffect(() => {
    getAdminProducts(dispatch);
  }, [dispatch]);

  // console.log(products);
  return (
    <>
      <Container style={{ maxWidth: "lg", paddingTop: "34" }}>
        <Box sx={{ m: 3, mt: 4 }} style={{ float: "right" }}>
          <Link to={`/admin/AddProducts`} style={{ textDecoration: "none" }}>
            <Button variant="contained">New Product</Button>
          </Link>
        </Box>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: "sm", minHeight: "sm" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Product</StyledTableCell>
                <StyledTableCell align="right">Stock</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Last Modified</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((products: ProductType) => (
                <StyledTableRow key={products.name}>
                  <StyledTableCell component="th" scope="products">
                    {products.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Avatar
                      style={{ objectFit: "fill" }}
                      alt={products.name}
                      src={products.image}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {products.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {products.price}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {moment(products.updatedAt).fromNow()}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      to={`/admin/editProducts/${products._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <IconButton aria-label="edit" size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Link>
                    <IconButton
                      style={{ color: "red" }}
                      aria-label="delete"
                      size="small"
                      onClick={() => handleDelete(products._id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
