import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../Categories/Categories.scss";
import { getCategories } from "../../store/asyncActions/categories";
import {
  CategoriesInner,
  CategoryInner,
  CategoryTitle,
  LoadingCategory,
} from "./Categories.styles";
import { ErrorMessage } from "../Uikit/ErrorMessage";

export function Categories() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

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
          data-theme={theme}
          className="category__link"
          key={category.id}
          to={`/categories/${category.id}`}
        >
          <CategoryInner>
            <Typography
              variant="h6"
              component="p"
              fontSize={{ xs: "1rem", ss: "1.25rem" }}
            >
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
        <CategoryTitle variant="h3">Categories</CategoryTitle>

        <CategoriesInner>
          {isError ? (
            <ErrorMessage variant="h5">{isError}</ErrorMessage>
          ) : (
            categoriesList
          )}
        </CategoriesInner>
      </Container>
    </>
  );
}
