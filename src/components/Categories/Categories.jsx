import { Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../store/asyncActions/categories";
import { CategoryInner } from "./Categories.styles";
import { NavLink } from "react-router-dom";

import "../Categories/Categories.scss";

export function Categories() {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categories.categories);
  const isError = useSelector((state) => state.categories.error);
  const isLoading = useSelector((state) => state.categories.loading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesList = categoryList.map((category, index) => {
    if (index < 4) {
      return (
        <NavLink key={category.id} to={`/categories/${category.id}`}>
          <CategoryInner>
            <Typography variant="h6" component="p">
              {category.name}
            </Typography>
          </CategoryInner>
        </NavLink>
      );
    }
  });

  categoriesList.unshift(
    <NavLink key="0" to={`/categories/0`}>
      <CategoryInner>
        <Typography variant="h6" component="p">
          All
        </Typography>
      </CategoryInner>
    </NavLink>
  );

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
