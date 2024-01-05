import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { purple, red } from "@mui/material/colors";

export function Theme({ children }) {
  const mode = useSelector((state) => state.theme);

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#191919",
              dark: purple[500],
            },
            background: {
              default: "#212123",
              paper: "#212123",
            },
          }
        : {
            primary: {
              main: red[100],
              dark: red[500],
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
