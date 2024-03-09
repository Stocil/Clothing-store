import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import {
  SearchBarInput,
  SearchBarResultText,
  SearchBarResults,
  SearchBarResultsWrapper,
} from "./SearchBar.styles";
import { useSearchBar } from "./hooks/useSearchBar";

export function SearchBar() {
  const {
    searchValue,
    searchOpen,
    searchProducts,
    handleChangeSearchValue,
    setSearchOpen,
    searchProductsIsLoading,
  } = useSearchBar();

  return (
    <Box position="relative">
      <SearchBarInput
        value={searchValue}
        onChange={handleChangeSearchValue}
        toggleOpenSearchRes={setSearchOpen}
      />

      {searchOpen ? (
        <SearchBarResults>
          {searchProducts.length > 0 && !searchProductsIsLoading ? (
            searchProducts.map((product) => {
              return (
                <SearchBarResultsWrapper variant="outlined" key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      className="header__search-image"
                      src={
                        product.images[0].startsWith("https")
                          ? product.images[0]
                          : "https://uhdpapers.com/wp-content/uploads/2018/01/blur1-1024x576.png"
                      }
                    />
                  </Link>

                  <Typography variant="p" maxWidth="60%">
                    {product.title}
                  </Typography>
                </SearchBarResultsWrapper>
              );
            })
          ) : (
            <Box width={{ xs: "150px", ss: "250px" }}>
              {searchProductsIsLoading ? (
                <Box className="search-load" />
              ) : (
                <SearchBarResultText variant="h5" component="p">
                  No results
                </SearchBarResultText>
              )}
            </Box>
          )}
        </SearchBarResults>
      ) : null}
    </Box>
  );
}
