import { Stack, styled } from "@mui/material";

export const PaginationButtonsInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: 56,
  marginTop: 40,

  [theme.breakpoints.down("ss")]: {
    margin: "40px 20px",
    gap: 15,
  },
}));
