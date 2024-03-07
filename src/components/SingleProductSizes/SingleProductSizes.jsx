import { Skeleton, Stack } from "@mui/material";
import { SizeButton } from "./SingleProductSizes.styles";
import { TransparentText } from "../Uikit/TransparentText";

export function SingleProductSizes({
  theme = "light",
  allSizes,
  selectSize,
  isLoading,
  setSearchParams,
}) {
  const sizeButtons = allSizes.map((size) => {
    if (isLoading) {
      return <Skeleton key={size} width={40} height={50} />;
    }

    return (
      <SizeButton
        theme={theme}
        key={size}
        selected={size === selectSize}
        onClick={() => setSearchParams({ size: size }, { replace: true })}
      >
        {size}
      </SizeButton>
    );
  });

  if (!sizeButtons[0]) return null;

  return (
    <Stack
      direction={{ xs: "column", ss: "row" }}
      spacing={1}
      alignItems={{ xs: "start", ss: "center" }}
    >
      <TransparentText>{isLoading ? null : "Sizes: "}</TransparentText>

      <Stack direction="row" spacing={1}>
        {sizeButtons}
      </Stack>
    </Stack>
  );
}
