import { Typography, styled } from "@mui/material";

export const ErrorNumbers = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "300px",
  color: theme.palette.primary.dark,
}));
