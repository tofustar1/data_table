import React from 'react';
import { Box, IconButton } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useThemeContext } from "../../providers/ThemeProvider/ThemeProvider";

const ThemeSwitcher = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
      <Box>
        {mode} mode
        <IconButton onClick={toggleColorMode}>
          {mode === "dark" ? <Brightness7Icon/> : <Brightness4Icon/>}
        </IconButton>
      </Box>
  );
};

export default ThemeSwitcher;