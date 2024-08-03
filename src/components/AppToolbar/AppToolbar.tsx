import React from 'react';
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const AppToolbar = () => {
  return (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar>
              <Typography variant="h5" component="a">
                Data Table
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
  );
};

export default AppToolbar;