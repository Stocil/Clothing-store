import { Stack, Typography, styled } from "@mui/material";

export const ErrorInner = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  gap: theme.spacing(5),
  minHeight: "100vh",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const ErrorNumbersInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  gap: theme.spacing(12),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(7),
  },

  [theme.breakpoints.down("ss")]: {
    gap: theme.spacing(6),
  },
}));

export const ErrorNumbers = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "300px",
  color: theme.palette.primary.dark,

  [theme.breakpoints.down("md")]: {
    fontSize: "200px",
  },

  [theme.breakpoints.down("big")]: {
    fontSize: "160px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "120px",
  },

  [theme.breakpoints.down("ss")]: {
    fontSize: "90px",
  },
}));

export const ErrorTitle = styled(Typography)(({ theme }) => ({
  mt: theme.spacing(5),
  textAlign: "center",
  fontWeight: "700",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h3.fontSize,
  },
}));
