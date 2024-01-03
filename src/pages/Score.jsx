import { useDispatch, useSelector } from "react-redux";

import { increaseScore, decreaseScore } from "../store/actions";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export function Score() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);

  return (
    <Container maxWidth="xl" sx={{ my: 3 }}>
      <Stack spacing={2} textAlign={"center"}>
        <Typography variant="h2" component={"p"}>
          {score.score}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <Button
            variant={"contained"}
            size="large"
            onClick={() => onIncrease(5)}
          >
            Увеличить
          </Button>
          <Button
            variant={"contained"}
            size="large"
            onClick={() => onDecrease(5)}
          >
            Уменьшить
          </Button>
        </Box>
      </Stack>
    </Container>
  );

  function onIncrease(n) {
    dispatch(increaseScore(n));
  }

  function onDecrease(n) {
    dispatch(decreaseScore(n));
  }
}
