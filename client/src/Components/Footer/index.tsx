import { Box, Container, Grid, Link } from "@material-ui/core";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      {/* @ts-ignore */}
      <Box
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid item xs={12} sm={4}>
          

          </Grid>
          {/* @ts-ignore */}

          <Box textAlign="centre" pt={{xs:5,sm:10}} pb={{xs:5, sm:0}}>
              Safiul Alam &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
