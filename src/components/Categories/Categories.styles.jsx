import { Stack, styled } from "@mui/material";

export const CategoryInner = styled(Stack)(({ theme }) => ({
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  width: "170px",
  height: "170px",
  border: `2px solid ${theme.palette.primary.dark}`,
  borderRadius: "50%",
  transition: `background-color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
