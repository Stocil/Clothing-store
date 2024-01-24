import {
  getCategoryProductsData,
  getCategoryProductsDataError,
  getCategoryProductsDataSuccess,
  getProductsData,
  getProductsDataError,
  getProductsDataSuccess,
} from "../actions";

export function getProducts() {
  return async function getProductsThunk(dispatch) {
    try {
      dispatch(getProductsData());

      const res = await fetch(`https://api.escuelajs.co/api/v1/products`);

      const productsList = await res.json();

      dispatch(getProductsDataSuccess(productsList));
    } catch {
      dispatch(
        getProductsDataError("Failed to load products, please reload page")
      );
    }
  };
}

export function getCategoryProducts(id) {
  return async function getCategoryProductsThunk(dispatch) {
    try {
      dispatch(getCategoryProductsData());

      const res = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}/products`
      );

      const categoryProductsList = await res.json();

      dispatch(getCategoryProductsDataSuccess(categoryProductsList));
    } catch {
      dispatch(
        getCategoryProductsDataError(
          "Failed to load products from this category, please reload page"
        )
      );
    }
  };
}
