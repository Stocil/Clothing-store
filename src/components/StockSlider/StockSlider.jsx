import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export function StocksSlider() {
  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
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
          <img alt="stock" src="../../../assets/ad1.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img alt="stock" src="../../../assets/ad2.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img alt="stock" src="../../../assets/ad3.png" />
        </SwiperSlide>

        <SwiperSlide>
          <img alt="stock" src="../../../assets/ad4.png" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
