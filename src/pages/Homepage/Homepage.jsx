import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getProducts } from "../../store/asyncActions/products";
import { StocksSlider } from "../../components/StockSlider/StockSlider";
import { Products } from "../../components/Products/Products";
import { Button, Container, Paper } from "@mui/material";
import { ProductSectionInner } from "./Homepage.styles";

export function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.products.products);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);

  const selectedIndexesArray = [];
  const selectedIndexes = new Set([]);

  const sortedProducts = productList
    .map((product) => {
      if (
        !product.images[0] ||
        !product.images[0].startsWith("https") ||
        !product.price ||
        !product.title
      )
        return null;

      return product;
    })
    .filter((product) => product);

  for (let index = 0; index < sortedProducts.length; index++) {
    selectedIndexes.add(
      Math.round(Math.random() * (sortedProducts.length - 1))
    );
  }

  selectedIndexes.forEach((value) => {
    selectedIndexesArray.push(value);
  });

  const trandingProducts = sortedProducts
    .map((product, index) => {
      if (selectedIndexesArray.includes(index)) return product;
    })
    .filter((product) => product);

  return (
    <Container>
      <StocksSlider />

      <ProductSectionInner variant="outlined">
        <Products
          products={trandingProducts}
          isError={isError}
          isLoading={isLoading}
          maxProduct={3}
          mt={1}
          title={"Trending"}
        />

        <Button color="secondary" size="large">
          See more
        </Button>
      </ProductSectionInner>
    </Container>
  );
}
