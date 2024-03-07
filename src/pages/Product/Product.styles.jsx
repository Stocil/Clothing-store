import {
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

export const ErrorTypography = ({ isError, children }) => {
  return (
    <Typography
      variant="h4"
      fontWeight={700}
      sx={
        isError
          ? {
              padding: "20px",
              border: "2px solid #d32f2f",
              borderRadius: "20px",
            }
          : {}
      }
    >
      {children}
    </Typography>
  );
};

export const CardInner = styled(Paper)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  gap: "32px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px 45px",
    alignItems: "center",
    justifyContent: "center",
  },

  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    padding: "20px",
  },
}));

export const GoBackButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: " 64px",
  right: "calc(100% - 5px)",
  backgroundColor: theme.palette.secondary.main,
  ":hover": { backgroundColor: theme.palette.primary.dark },
  transition: `all 300ms ${theme.transitions.easing.easeInOut}`,

  [theme.breakpoints.down("xl")]: {
    top: "80px",
    right: "50px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const CardInfo = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  flexGrow: 1,
  gap: "24px",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const ProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  paddingRight: "50px",

  [theme.breakpoints.down("ss")]: {
    fontSize: theme.typography.h5.fontSize,
  },

  [theme.breakpoints.down("md")]: {
    paddingRight: "0",
  },
}));

export const ProductPriceTypography = styled(Typography)(({ theme }) => ({
  opacity: "0.6",

  [theme.breakpoints.down("ss")]: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export const ProductLoadingTitle = styled(Skeleton)({
  width: "90%",
});
