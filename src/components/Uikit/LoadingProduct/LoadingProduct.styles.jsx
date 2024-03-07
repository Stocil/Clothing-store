import { Skeleton } from "@mui/material";
import { styled } from "@mui/system";

export const LoadingImage = styled(Skeleton)(({ theme }) => ({
  width: "310px",
  height: "310px",

  [theme.breakpoints.down("lg")]: {
    width: "200px",
    height: "200px",
  },

  [theme.breakpoints.down("md")]: {
    width: "240px",
    height: "240px",
  },

  [theme.breakpoints.down("big")]: {
    width: "190px",
    height: "190px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "350px",
    height: "350px",
  },

  [theme.breakpoints.down("ss")]: {
    width: "190px",
    height: "190px",
  },
}));

export const LoadingTitle = styled(Skeleton)(({ theme }) => ({
  width: "200px",

  [theme.breakpoints.down("lg")]: {
    width: "160px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },

  [theme.breakpoints.down("ss")]: {
    width: "140px",
  },
}));

export const LoadingButton = styled(Skeleton)(({ theme }) => ({
  width: "40px",
  height: "40px",

  [theme.breakpoints.down("lg")]: {
    width: "30px",
    height: "30px",
  },
}));
