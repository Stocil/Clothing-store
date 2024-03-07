import { Skeleton, Stack, styled } from "@mui/material";

export const ImagesInner = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  maxWidth: "600px",
  flexShrink: "0",

  [theme.breakpoints.down("xl")]: {
    maxWidth: "500px",
  },

  [theme.breakpoints.down("lg")]: {
    maxWidth: "400px",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    maxWidth: "500px",
    alignItems: "start",

    width: "100%",
    justifyContent: "space-between",
  },

  [theme.breakpoints.down("ss")]: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
  },
}));

export const SideImagesInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  gap: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
  },

  [theme.breakpoints.down("ss")]: {
    flexDirection: "row",
  },
}));

export const LoadingMainImage = styled(Skeleton)(({ theme }) => ({
  width: 600,
  height: 600,

  [theme.breakpoints.down("md")]: {
    width: 500,
    height: 500,
  },

  [theme.breakpoints.down("sm")]: {
    width: 400,
    height: 400,
  },

  [theme.breakpoints.down("ss")]: {
    width: 230,
    height: 230,
  },
}));
