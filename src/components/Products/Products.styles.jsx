import { Grid, Typography, styled } from "@mui/material";

export const ProductsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  padding: theme.spacing(2, 0),
  textAlign: "center",

  [theme.breakpoints.down("ss")]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const GridWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
    alignItems: "center",
  },

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "start",
  },
}));
