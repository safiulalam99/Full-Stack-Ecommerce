import { Container, Grid } from "@material-ui/core";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Cart = () => {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        style={{ minHeight: "13vh" }}
      >
        <Grid item md={3}>
          <Typography variant="h4" gutterBottom component="div">
            Cart
          </Typography>
          <TableBody>
         
            <TableRow
              key={'5'}
            >
              <TableCell component="th" scope="row">
                asfdasf
              </TableCell>
              <TableCell align="right">asd</TableCell>
              <TableCell align="right">fs</TableCell>
              <TableCell align="right">adfasd</TableCell>
              <TableCell align="right">asdasd</TableCell>
            </TableRow>

        </TableBody>

          <Button variant="contained" style={{ background: "#2E3B55" }}>
            UPDATE
          </Button>
        </Grid>
        
        <Grid item md={4}>
          <Typography variant="h4" gutterBottom component="div">
            My Orders
          </Typography>
          
          <Card variant="outlined">
            <CardContent >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
