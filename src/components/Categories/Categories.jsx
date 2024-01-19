import { Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../store/asyncActions/categories";

export function Categories() {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categories.categories);
  const isError = useSelector((state) => state.categories.error);
  const isLoading = useSelector((state) => state.categories.loading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesList = categoryList.map((category, index) => {
    if (index < 5) {
      return (
        <Stack
          key={category.id}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "170px",
            height: "200px",
            border: (theme) => `2px dashed ${theme.palette.primary.dark}`,
            borderRadius: "30px",
            "&:hover": {
              bgcolor: (theme) => theme.palette.primary.dark,
            },
            transition: (theme) =>
              `background-color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
          }}
        >
          {category.name}
        </Stack>
      );
    }
  });

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      <Typography variant="h3" fontWeight={700}>
        Categories
      </Typography>

      {isLoading ? (
        <Typography variant="h5" fontWeight={700}>
          Loading...
        </Typography>
      ) : (
        <Stack direction="row" spacing={8} justifyContent="center" mt={5}>
          {isError ? isError : categoriesList}
        </Stack>
      )}
    </Container>
  );
}
