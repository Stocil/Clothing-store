import { Paper, Stack, Typography } from "@mui/material";

export function Footer() {
  return (
    <Paper
      sx={{ bgcolor: (theme) => theme.palette.primary.main, mt: 5, py: 3 }}
    >
      <Stack direction="row" gap={1} justifyContent="center">
        <Typography variant="h5" component="p" textAlign="center">
          Made by
        </Typography>

        <Typography
          variant="h5"
          component="a"
          textAlign="center"
          fontWeight="700"
          sx={{ color: (theme) => theme.palette.secondary.main }}
          href="https://github.com/Stocil/React-store"
          target="_blank"
        >
          Stas Vashurov
        </Typography>
      </Stack>
    </Paper>
  );
}
