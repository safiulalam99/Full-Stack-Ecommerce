import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { Card, Button } from 'react-bootstrap';



export interface Product {
   _id: string;
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string;
  price: number;
}


export default function Product({item}:any) {

  return (

    <Card >
        <CardMedia
        style={{ objectFit: 'contain'}}
          component="img"
          height="150"
          image={item.image}
          alt={item.name}
        />
        <CardContent >
          <Typography gutterBottom variant="body1" component="div">
            {item.name}
          </Typography>

        </CardContent>
        <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>


  );
}
