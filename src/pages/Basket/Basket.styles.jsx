import { Stack, Typography, styled } from "@mui/material";

export const BasketTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  background: `linear-gradient(130deg, ${theme.palette.primary.dark} 40%, #51b1f7 60%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
  },
}));

export const BasketInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: 24,
  alignItems: "start",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },

  [theme.breakpoints.down("ss")]: {
    width: "90%",
    margin: "15px auto",
  },
}));
