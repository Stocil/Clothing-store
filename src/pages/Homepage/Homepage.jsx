import { Container } from "@mui/material";

import { StocksSlider } from "../../components/StockSlider/StockSlider";
import { Products } from "../../components/Products/Products";
import { useHomepage } from "./hooks/useHomepage";
import { ProductSectionInner } from "../../components/Uikit/ProductSectionInner";

export function Homepage() {
  const { trandingProducts, saleProducts, isLoading, isError } = useHomepage();

  return (
    <Container>
      <ProductSectionInner variant="outlined" sx={{ mt: 7 }}>
        <Products
          products={trandingProducts}
          isError={isError}
          isLoading={isLoading}
          maxProduct={3}
          mt={1}
          title={"Trending"}
          errorJustify="center"
        />
      </ProductSectionInner>

      <StocksSlider />

      <ProductSectionInner variant="outlined" sx={{ mt: 7 }}>
        <Products
          products={saleProducts}
          isError={isError}
          isLoading={isLoading}
          maxProduct={3}
          mt={1}
          title={"Sale"}
          errorJustify="center"
        />
      </ProductSectionInner>
    </Container>
  );
}
