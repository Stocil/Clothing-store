import { Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../store/asyncActions/categories";
import { CategoryInner, LoadingCategory } from "./Categories.styles";
import { NavLink } from "react-router-dom";

import "../Categories/Categories.scss";
import { ErrorMessage } from "../Uikit/ErrorMessage";

export function Categories() {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categories.categories);
  const isError = useSelector((state) => state.categories.error);
  const isLoading = useSelector((state) => state.categories.loading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  let categoriesList = categoryList.map((category, index) => {
    if (index < 5) {
      return (
        <NavLink
          className="category__link"
          key={category.id}
          to={`/categories/${category.id}`}
        >
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
    <NavLink className="category__link" key="0" to={`/categories/0`}>
      <CategoryInner>
        <Typography variant="h6" component="p">
          All
        </Typography>
      </CategoryInner>
    </NavLink>
  );

  if (categoriesList.length <= 1 && isLoading) {
    categoriesList = <LoadingCategory count={6} />;
  }

  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Typography variant="h3" fontWeight={700} textAlign="center">
          Categories
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-around"
          spacing={1}
          mt={5}
          borderTop="2px solid #ab47bc"
          borderBottom="2px solid #ab47bc"
          p="50px 0"
        >
          {isError ? (
            <ErrorMessage variant="h5">{isError}</ErrorMessage>
          ) : (
            categoriesList
          )}
        </Stack>
      </Container>
    </>
  );
}
