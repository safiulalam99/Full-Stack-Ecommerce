import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, Container, FormControl, Grid, Typography } from "@material-ui/core";

export default function TextFieldHiddenLabel() {
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '60vh' }}
    >
       <Typography variant="h4" gutterBottom component="div">
        Edit Product
      </Typography>

      <TextField
        label="Name"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <TextField
        label="Price"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <TextField
        label="Image"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <TextField
        label="Quantity"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <TextField
        label="Category"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
      <TextField
        label="Description"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "40ch" }}
      />
    <Button variant="contained">
      Disable elevation
    </Button>
    </Grid>
  );
}
