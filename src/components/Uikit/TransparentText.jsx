import { Skeleton, Typography, styled } from "@mui/material";

export function TransparentText({ children, variant, isLoading }) {
  if (isLoading) {
    return <Skeleton animation="wave" />;
  }

  const Text = styled(Typography)({
    opacity: 0.5,
  });

  return <Text variant={variant}>{children}</Text>;
}
