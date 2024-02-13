import {
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

export function updateProductList({ id = null, currentOffset, limit = 6 }) {
  return async function updateProductListThunk(dispatch) {
    try {
      dispatch(getPartOfProducts());

      let res;

      if (id) {
        res = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${id}/products?offset=${currentOffset}&limit=${limit}`
        );
      } else {
        res = await fetch(
          `https://api.escuelajs.co/api/v1/products?offset=${currentOffset}&limit=${limit}`
        );
      }

      const updatedProductList = await res.json();

      // const allowedProductsList = updatedProductList
      //   .map((product) => {
      //     if (
      //       !product.images[0] ||
      //       !product.images[0].startsWith("https") ||
      //       !product.price ||
      //       !product.title
      //     )
      //       return null;

      //     return product;
      //   })
      //   .filter((product) => product);

      dispatch(getPartOfProductsSuccess(updatedProductList));
    } catch (e) {
      dispatch(getPartOfProductsError("Error to upload new products"));
    }
  };
}
