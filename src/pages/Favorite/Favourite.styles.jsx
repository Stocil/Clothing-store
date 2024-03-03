import { Typography, styled } from "@mui/material";

export const FavouriteTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },

  [theme.breakpoints.down("ss")]: {
    fontSize: theme.typography.h3.fontSize,
  },
}));
