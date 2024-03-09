import { Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export function StocksSlider() {
  return (
    <Container sx={{ my: 7 }} component="div">
      <Swiper
        className="homepage__slider"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            alt="stock"
            src="React-store/assets/stock1.png"
            className="swiper__image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Typography
            variant="h4"
            className="homepage__slide-text"
            sx={{
              top: { xs: "70px", ss: "100px" },
              left: { xs: "10px", ss: "60px" },
              fontWeight: "700",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Save big on Dyson!
          </Typography>

          <Typography
            variant="p"
            className="homepage__slide-text"
            sx={{
              top: { xs: "20px", ss: "70px" },
              left: { xs: "10px", ss: "60px" },
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Now the time to snatch cutting-edge tech.
          </Typography>

          <img
            alt="stock"
            src="React-store/assets/stock2.png"
            className="swiper__image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Typography
            variant="h6"
            component="p"
            className="homepage__slide-text"
            sx={{
              top: { xs: "20px", ss: "30px" },
              left: { xs: "10px", ss: "60px" },
              fontWeight: "700",
              maxWidth: "300px",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Enjoy stunning image quality and enhanced graphics
          </Typography>

          <img
            alt="stock"
            src="React-store/assets/stock3.png"
            className="swiper__image"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            alt="stock"
            src="React-store/assets/stock4.png"
            className="swiper__image"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
