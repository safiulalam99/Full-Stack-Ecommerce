import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import * as React from 'react';

export default function Product({item}:any) {
  return (

    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="http://dummyimage.com/201x100.png/cc0000/ffffff"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
