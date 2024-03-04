import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  padding: "20px",
  border: "2px solid #d32f2f",
  borderRadius: "20px",
  maxWidth: "70%",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));
