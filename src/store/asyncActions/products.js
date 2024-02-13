import {
  getCategoryProductsData,
  getCategoryProductsDataError,
  getCategoryProductsDataSuccess,
  getPartOfProducts,
  getPartOfProductsError,
  getPartOfProductsSuccess,
  getProductsData,
  getProductsDataError,
  getProductsDataSuccess,
  getSingleProductData,
  getSingleProductDataError,
  getSingleProductDataSuccess,
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

export function getSingleProduct(id) {
  return async function getSingleProductThunk(dispatch) {
    try {
      dispatch(getSingleProductData());

      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

      if (res.status !== 200) {
        throw new Error(res.status);
      }

      const product = await res.json();

      dispatch(getSingleProductDataSuccess(product));
    } catch (e) {
      const error =
        e.message === "404" || e.message === "400"
          ? "Request error, there is no such product"
          : "Failed to load product, please reload page";

      dispatch(getSingleProductDataError(error));
    }
  };
}

export function updateProductList({ id = null, currentOffset }) {
  return async function updateProductListThunk(dispatch) {
    try {
      if (currentOffset === 0) {
        dispatch(getProductsData());
      } else {
        dispatch(getPartOfProducts());
      }
      let res;

      if (id) {
        res = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${id}/products?offset=${currentOffset}&limit=6`
        );
      } else {
        res = await fetch(
          `https://api.escuelajs.co/api/v1/products?offset=${currentOffset}&limit=6`
        );
      }

      const updatedProductList = await res.json();

      if (currentOffset === 0) {
        dispatch(getProductsDataSuccess(updatedProductList));
      } else {
        dispatch(getPartOfProductsSuccess(updatedProductList));
      }
    } catch (e) {
      if (currentOffset === 0) {
        dispatch(
          getProductsDataError("Failed to load products, please reload page")
        );
      } else {
        dispatch(getPartOfProductsError("Error to upload new products"));
      }
    }
  };
}
