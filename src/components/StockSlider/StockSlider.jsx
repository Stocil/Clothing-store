import { Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export function StocksSlider() {
  return (
    <Container sx={{ my: 7 }}>
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
          <img alt="stock" src="../../../assets/stock1.png" />
        </SwiperSlide>

        <SwiperSlide>
          <Typography
            variant="h4"
            className="homepage__slide-text"
            sx={{ top: "30px", left: "60px", fontWeight: "700" }}
          >
            Save big on Dyson!
          </Typography>

          <Typography
            variant="p"
            className="homepage__slide-text"
            sx={{ top: "70px", left: "60px" }}
          >
            Now the time to snatch cutting-edge tech.
          </Typography>

          <img alt="stock" src="../../../assets/stock2.png" />
        </SwiperSlide>

        <SwiperSlide>
          <Typography
            variant="h6"
            component="p"
            className="homepage__slide-text"
            sx={{
              top: "30px",
              left: "60px",
              fontWeight: "700",
              maxWidth: "300px",
            }}
          >
            Enjoy stunning image quality and enhanced graphics thanks to
            advanced screen technology.
          </Typography>

          <img alt="stock" src="../../../assets/stock3.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img alt="stock" src="../../../assets/stock4.png" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
