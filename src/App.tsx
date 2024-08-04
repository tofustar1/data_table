import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import MainTable from "./pages/MainTable/MainTable";
import { useThemeContext } from "./providers/ThemeProvider/ThemeProvider";
import AppToolbar from "./components/AppToolbar/AppToolbar";

const App = () => {
  const {theme, mode} = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppToolbar/>
        <main>
          <MainTable/>
        </main>
      </ThemeProvider>
    </>
)};

export default App;
