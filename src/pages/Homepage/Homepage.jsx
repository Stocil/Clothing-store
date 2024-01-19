import { Container } from "@mui/material";

import { StocksSlider } from "../../components/StockSlider/StockSlider";

export function Homepage() {
  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      <StocksSlider />
    </Container>
  );
}
