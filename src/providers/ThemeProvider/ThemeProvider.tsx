import { createContext, FC, PropsWithChildren, useContext } from "react";
import { createTheme, Theme } from "@mui/material";
import { useColorTheme } from "./useColorTheme";

type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({children}) => {
  const value = useColorTheme();
  return(<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>);
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
}
