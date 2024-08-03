import React from 'react';
import { CssBaseline } from "@mui/material";
import './App.css';
import AppToolbar from "./components/AppToolbar/AppToolbar";
import MainTable from "./pages/MainTable/MainTable";

const App = () => (
    <>
      <CssBaseline />
      <AppToolbar/>
      <main>
        <MainTable/>
      </main>
    </>
);

export default App;
