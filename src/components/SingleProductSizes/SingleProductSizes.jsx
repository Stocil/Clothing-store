import { Skeleton, Stack } from "@mui/material";
import { SizeButton } from "./SingleProductSizes.styles";
import { TransparentText } from "../Uikit/TransparentText";

export function SingleProductSizes({
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
    <Stack direction="row" spacing={1} alignItems="center">
      <TransparentText>{isLoading ? null : "Sizes: "}</TransparentText>

      {sizeButtons}
    </Stack>
  );
}
