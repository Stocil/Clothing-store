import { Skeleton, Stack, styled } from "@mui/material";

export const CategoryInner = styled(Stack)(({ theme }) => ({
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "15px",
  width: "150px",
  height: "150px",
  textAlign: "center",

  transition: `background-color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export function LoadingCategory({ count = 1 }) {
  const products = [];

  for (let i = 0; i < count; i++) {
    products.push(
      <Skeleton key={i} variant="rounded" width={150} height={150}></Skeleton>
    );
  }

  return products;
}

export const CategoriesInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-around",
  gap: 8,
  marginTop: 40,
  borderTop: `2px solid ${theme.palette.primary.dark}`,
  borderBottom: `2px solid ${theme.palette.primary.dark}`,
  padding: "50px 0",
}));
