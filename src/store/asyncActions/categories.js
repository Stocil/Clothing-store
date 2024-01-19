import {
  getCategoriesData,
  getCategoriesDataError,
  getCategoriesDataSuccess,
} from "../actions";

export function getCategories() {
  return async function getCategoriesThunk(dispatch) {
    try {
      dispatch(getCategoriesData());

      const res = await fetch("https://api.escuelajs.co/api/v1/categories");
      const categoriesList = await res.json();

      dispatch(getCategoriesDataSuccess(categoriesList));
    } catch {
      dispatch(
        getCategoriesDataError("Categories not found, please, reload the page")
      );
    }
  };
}
