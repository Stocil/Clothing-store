import { Container } from "@mui/material";

import { StocksSlider } from "../../components/StockSlider/StockSlider";
import { Categories } from "../../components/Categories/Categories";

export function Homepage() {
  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      <StocksSlider />
      <Categories />
    </Container>
  );
}
