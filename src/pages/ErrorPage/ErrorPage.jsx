import { Container, Stack, Typography } from "@mui/material";

export function ErrorPage() {
  return (
    <Container>
      <Typography
        variant="h2"
        sx={{ mt: 5, textAlign: "center", fontWeight: "700" }}
      >
        The page was not found
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={12}>
        <Typography
          className="error__numbers"
          sx={{ fontWeight: "700", fontSize: "300px" }}
          color={(theme) => theme.palette.primary.dark}
        >
          4
        </Typography>
        <Typography
          className="error__numbers"
          sx={{ fontWeight: "700", fontSize: "300px" }}
          color={(theme) => theme.palette.secondary.main}
        >
          0
        </Typography>
        <Typography
          color={(theme) => theme.palette.primary.dark}
          className="error__numbers"
          sx={{ fontWeight: "700", fontSize: "300px" }}
        >
          4
        </Typography>
      </Stack>
    </Container>
  );
}
