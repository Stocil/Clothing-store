import { Paper, styled } from "@mui/material";

export const HeaderBurgerInner = styled(Paper)(({ theme }) => ({
  padding: "8px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  height: "100%",
  gap: "100px",
  width: 370,

  [theme.breakpoints.down("ss")]: {
    width: "100vw",
  },
}));
