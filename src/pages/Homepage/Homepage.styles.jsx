import { Paper, styled } from "@mui/material";

export const ProductSectionInner = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  paddingBottom: "16px",
  marginBottom: "16px",
}));
