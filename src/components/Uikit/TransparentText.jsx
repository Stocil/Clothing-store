import { Skeleton, Typography, styled } from "@mui/material";

export function TransparentText({ children, variant, isLoading }) {
  if (isLoading) {
    return <Skeleton animation="wave" />;
  }

  const Text = styled(Typography)(({ theme }) => ({
    opacity: 0.5,

    [theme.breakpoints.down("ss")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  }));

  return <Text variant={variant}>{children}</Text>;
}
