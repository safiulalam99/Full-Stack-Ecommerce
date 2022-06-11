import {  Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


const UserProfile = () => {
  return (
      <Container>
    <Grid container
    spacing={0}
    alignItems="flex-start"
    style={{ minHeight: '13vh' }}>
        <Grid item md={3}>
        <Typography variant="h4" gutterBottom component="div">UserProfile</Typography>
        <TextField
        label="Name"
        id="outlined-start-adornment"
        sx={{ m: 1, maxWidth: "md" }}
      />
      <TextField
        label="Price"
        id="outlined-start-adornment"
        sx={{ m: 1, maxWidth:"md" }}
      />
      <TextField
        label="Image"
        id="outlined-start-adornment"
        sx={{ m: 1, maxWidth:"md" }}
      />
      <TextField
        label="Quantity"
        id="outlined-start-adornment"
        sx={{ m: 1, maxWidth:"md" }}
      /> 
      <Button  variant='contained' style={{ background:"#2E3B55"}}>
          UPDATE
      </Button>
        </Grid>
        <Grid item md={3}>
        <Typography variant="h4" gutterBottom component="div">My Orders</Typography>
        
        </Grid>
    </Grid>
    </Container>
  )
}

export default UserProfile