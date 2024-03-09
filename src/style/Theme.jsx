import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { pink, purple } from "@mui/material/colors";
// import { createTheme } from "@mui/material/styles";

export function Theme({ children }) {
  const mode = useSelector((state) => state.theme);

  let theme;

  // if (mode === "dark") {
  theme = createTheme({
    // palette: {
    //   mode,

    //   primary: {
    //     main: "#191919",
    //     dark: purple[400],
    //   },
    //   secondary: {
    //     main: purple[300],
    //   },
    //   background: {
    //     default: "#212123",
    //     paper: "#212123",
    //   },
    // },
    typography: {
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
        variants: [
          {
            props: { variant: "gradient-dark" },
            style: {
              backgroundImage:
                "linear-gradient(to right, #ab47bc 0%, #bfe9ff  51%, #ab47bc  100%)",
              transition: "0.5s",
              backgroundSize: "200% auto",
              boxShadow: "0 0 10px #eee",
              padding: "4px 10px",
              ":hover": {
                backgroundPosition: "right center",
              },
            },
          },
          {
            props: { variant: "gradient-light" },
            style: {
              backgroundImage:
                "linear-gradient(to right, #f06292 0%, #bfe9ff  51%, #f06292  100%)",
              transition: "0.5s",
              backgroundSize: "200% auto",
              boxShadow: "0 0 10px #ef7bd3",
              padding: "4px 10px",
              ":hover": {
                backgroundPosition: "right center",
              },
            },
          },
        ],
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

  console.log(theme);

  // light

  // } else {
  //   theme = createTheme({
  //     palette: {
  //       mode,

  //       primary: {
  //         main: pink[100],
  //         dark: pink[200],
  //       },
  //       secondary: {
  //         main: pink[300],
  //       },
  //       background: {
  //         default: "rgb(246,246,246)",
  //         paper: pink[50],
  //       },
  //     },
  //     typography: {
  //       fontFamily: "'Inter', sans-serif",
  //     },
  //     shape: {
  //       borderRadius: 10,
  //     },
  //     components: {
  //       MuiContainer: {
  //         defaultProps: {
  //           component: "section",
  //           maxWidth: "lg",
  //         },
  //       },
  //       MuiButton: {
  //         variants: [
  //           {
  //             props: { variant: "gradient-dark" },
  //             style: {
  //               backgroundImage:
  //                 "linear-gradient(to right, #ab47bc 0%, #bfe9ff  51%, #ab47bc  100%)",
  //               transition: "0.5s",
  //               backgroundSize: "200% auto",
  //               boxShadow: "0 0 10px #eee",
  //               padding: "4px 10px",
  //               ":hover": {
  //                 backgroundPosition: "right center",
  //               },
  //             },
  //           },
  //           {
  //             props: { variant: "gradient-light" },
  //             style: {
  //               backgroundImage:
  //                 "linear-gradient(to right, #f06292 0%, #bfe9ff  51%, #f06292  100%)",
  //               transition: "0.5s",
  //               backgroundSize: "200% auto",
  //               boxShadow: "0 0 10px #ef7bd3",
  //               padding: "4px 10px",
  //               ":hover": {
  //                 backgroundPosition: "right center",
  //               },
  //             },
  //           },
  //         ],
  //         defaultProps: {
  //           variant: "contained",
  //         },
  //         styleOverrides: {
  //           root: {
  //             textTransform: "none",
  //           },
  //         },
  //       },
  //     },
  //     breakpoints: {
  //       values: {
  //         xs: 0,
  //         ss: 500,
  //         sm: 600,
  //         big: 700,
  //         md: 900,
  //         lg: 1200,
  //         xl: 1536,
  //       },
  //     },
  //   });
  // }

  // const theme = createTheme({
  //   palette: {
  //     mode,
  //     ...(mode === "dark"
  //       ? {
  //           primary: {
  //             main: "#191919",
  //             dark: purple[400],
  //           },
  //           secondary: {
  //             main: purple[300],
  //           },
  //           background: {
  //             default: "#212123",
  //             paper: "#212123",
  //           },
  //         }
  //       : {
  //           primary: {
  //             main: pink[100],
  //             dark: pink[200],
  //           },
  //           secondary: {
  //             main: pink[300],
  //           },
  //           background: {
  //             default: "rgb(246,246,246)",
  //             paper: pink[50],
  //           },
  //         }),
  //   },
  //   typography: {
  //     fontFamily: "'Inter', sans-serif",
  //   },
  //   shape: {
  //     borderRadius: 10,
  //   },
  //   components: {
  //     MuiContainer: {
  //       defaultProps: {
  //         component: "section",
  //         maxWidth: "lg",
  //       },
  //     },
  //     MuiButton: {
  //       variants: [
  //         {
  //           props: { variant: "gradient-dark" },
  //           style: {
  //             backgroundImage:
  //               "linear-gradient(to right, #ab47bc 0%, #bfe9ff  51%, #ab47bc  100%)",
  //             transition: "0.5s",
  //             backgroundSize: "200% auto",
  //             boxShadow: "0 0 10px #eee",
  //             padding: "4px 10px",
  //             ":hover": {
  //               backgroundPosition: "right center",
  //             },
  //           },
  //         },
  //         {
  //           props: { variant: "gradient-light" },
  //           style: {
  //             backgroundImage:
  //               "linear-gradient(to right, #f06292 0%, #bfe9ff  51%, #f06292  100%)",
  //             transition: "0.5s",
  //             backgroundSize: "200% auto",
  //             boxShadow: "0 0 10px #ef7bd3",
  //             padding: "4px 10px",
  //             ":hover": {
  //               backgroundPosition: "right center",
  //             },
  //           },
  //         },
  //       ],
  //       defaultProps: {
  //         variant: "contained",
  //       },
  //       styleOverrides: {
  //         root: {
  //           textTransform: "none",
  //         },
  //       },
  //     },
  //   },
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       ss: 500,
  //       sm: 600,
  //       big: 700,
  //       md: 900,
  //       lg: 1200,
  //       xl: 1536,
  //     },
  //   },
  // });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
