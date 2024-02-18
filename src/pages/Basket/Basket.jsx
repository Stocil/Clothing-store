import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export function Basket() {
  return (
    <Container sx={{ my: 7, pt: 8 }}>
      <Stack direction="row" justifyContent="space-between">
        <Paper sx={{ width: "670px", height: "300px" }}></Paper>
        <Paper sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6" component="p" fontWeight="700">
              Your basket
            </Typography>

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="p">Products: 3</Typography>

              <Typography variant="p">1000 $</Typography>
            </Stack>

            <Typography variant="h4" component="p" fontWeight="700">
              Total: 500$
            </Typography>

            <FormControlLabel
              label="I agree with the terms of use of the trading platform"
              control={<Checkbox color="secondary" />}
            />

            <Button
              sx={{ p: "16px 24px", fontSize: 16, fontWeight: 700 }}
              variant="contained"
              color="secondary"
            >
              Order
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
