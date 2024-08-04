import React from 'react';
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const AppToolbar = () => {
  return (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'}}
            >
              <Typography variant="h5" component="a">
                Data Table
              </Typography>
              <ThemeSwitcher/>
            </Toolbar>
          </Container>
        </AppBar>
  );
};

export default AppToolbar;