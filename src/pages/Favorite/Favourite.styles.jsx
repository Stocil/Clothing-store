import { Typography, styled } from "@mui/material";

export const FavouriteTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  background: `linear-gradient(130deg, ${theme.palette.primary.dark} 40%, #51b1f7 60%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },

  [theme.breakpoints.down("ss")]: {
    fontSize: theme.typography.h3.fontSize,
  },
}));
