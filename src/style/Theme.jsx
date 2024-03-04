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
              dark: purple[400],
            },
            secondary: {
              main: purple[300],
            },
            background: {
              default: "#212123",
              paper: "#212123",
            },
          }
        : {
            primary: {
              main: red[100],
              dark: red[400],
            },
            secondary: {
              main: red[500],
            },
            background: {
              default: red[100],
              paper: red[50],
            },
          }),
    },
    typography: {
      // fontFamily: "'Quicksand', sans-serif",
      fontFamily: "'Inter', sans-serif",
    },
    shape: {
      borderRadius: 10,
    },

    components: {
      MuiContainer: {
        defaultProps: {
          component: "section",
          maxWidth: "lg",
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        ss: 500,
        sm: 600,
        big: 700,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
