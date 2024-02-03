import { Button, Container } from "@mui/material";
import { ProductSectionInner } from "./Homepage.styles";

import { StocksSlider } from "../../components/StockSlider/StockSlider";
import { Products } from "../../components/Products/Products";
import { useHomepage } from "./hooks/useHomepage";

export function Homepage() {
  const { trandingProducts, isLoading, isError } = useHomepage();

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
          errorJustify="center"
        />

        <Button color="secondary" size="large">
          See more
        </Button>
      </ProductSectionInner>
    </Container>
  );
}
