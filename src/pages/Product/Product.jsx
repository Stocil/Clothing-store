import { Container, Skeleton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

import { useProduct } from "./hooks/useProduct";
import { useAddProduct } from "../../hooks/useAddProduct";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import {
  CardInfo,
  CardInner,
  ErrorTypography,
  GoBackButton,
  ProductLoadingTitle,
  ProductPriceTypography,
  ProductTitle,
} from "./Product.styles";
import { Products } from "../../components/Products/Products";
import { SingleProductImages } from "../../components/SingleProductImages/SingleProductImages";
import { SingleProductSizes } from "../../components/SingleProductSizes/SingleProductSizes";
import { SingleProductButtons } from "../../components/SingleProductButtons/SingleProductButtons";
import { ProductSectionInner } from "../../components/Uikit/ProductSectionInner";
import { SalePriceText } from "../../components/Uikit/SalePriceText";
import { AlertSnackbar } from "../../components/Uikit/AlertSnackbar";
import { TransparentText } from "../../components/Uikit/TransparentText";

export function Product() {
  const {
    theme,
    product,
    isError,
    isLoading,

    setSearchParams,
    selectSize,
    mainImage,
    setMainImage,
    peoplePurchased,
    allSizes,
    newPrice,
    worthSeeingProducts,
  } = useProduct();

  const {
    handleAddToBasket,
    handleAddToFavourite,
    isProductInFavourite,
    handleToggleSnack,
    snackOpen,
  } = useAddProduct({
    product,
    newPrice,
    selectSize,
  });

  const { handleDeleteProductFromFavourite } = useDeleteProduct({
    productId: product.id,
    selectSize: selectSize,
  });

  return (
    <Container sx={{ my: 5, position: "relative", pt: 8 }}>
      {isError ? (
        <ErrorTypography isError={isError}>{isError}</ErrorTypography>
      ) : (
        <CardInner>
          <SingleProductImages
            product={product}
            mainImage={mainImage}
            handleMainImage={setMainImage}
            isLoading={isLoading}
          />

          <CardInfo>
            <Stack spacing={3}>
              <ProductTitle variant="h4">
                {isLoading ? (
                  <ProductLoadingTitle animation="wave" />
                ) : (
                  product.title
                )}
              </ProductTitle>

              <Stack>
                <ProductPriceTypography variant="h6" component="p">
                  {isLoading ? <Skeleton animation="wave" /> : "Price"}
                </ProductPriceTypography>

                <Stack direction="row" spacing={2} alignItems="end">
                  {newPrice ? (
                    <Typography variant="h4" component="p" fontWeight="700">
                      {isLoading ? (
                        <Skeleton width={40} height={70} />
                      ) : (
                        newPrice
                      )}
                    </Typography>
                  ) : null}

                  <SalePriceText isSale={newPrice} variant="h5">
                    {isLoading ? null : `${product.price}$`}
                  </SalePriceText>
                </Stack>
              </Stack>

              <SingleProductSizes
                theme={theme}
                allSizes={allSizes}
                selectSize={selectSize}
                isLoading={isLoading}
                setSearchParams={setSearchParams}
              />

              <TransparentText variant="h6" isLoading={isLoading}>
                {product.description}
              </TransparentText>

              <SingleProductButtons
                theme={theme}
                isLoading={isLoading}
                isProductInFavourite={isProductInFavourite}
                handleAddToBasket={handleAddToBasket}
                handleAddToFavourite={handleAddToFavourite}
                handleDeleteProductFromFavourite={
                  handleDeleteProductFromFavourite
                }
              />
            </Stack>

            <TransparentText isLoading={isLoading}>
              {`${peoplePurchased} people purchased`}
            </TransparentText>
          </CardInfo>
        </CardInner>
      )}

      <Link
        to={
          product.category
            ? `/categories/${product.category?.id}`
            : "/categories/0"
        }
      >
        <GoBackButton size="large">
          <ArrowBackIcon />
        </GoBackButton>
      </Link>

      {!isError ? (
        <ProductSectionInner variant="outlined" sx={{ mt: 7 }}>
          <Products
            products={worthSeeingProducts}
            isError={isError}
            isLoading={isLoading}
            maxProduct={3}
            mt={1}
            title={"Worth Seeing"}
            errorJustify="center"
          />
        </ProductSectionInner>
      ) : null}

      <AlertSnackbar open={snackOpen} handleClose={handleToggleSnack}>
        The product has been added
      </AlertSnackbar>
    </Container>
  );
}
