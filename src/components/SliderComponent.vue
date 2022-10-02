<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="../assets/img.jpg" alt="" /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ytimg.com/vi/hddRanX6uU8/maxresdefault.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="../assets/img.jpg" alt="" /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ytimg.com/vi/hddRanX6uU8/maxresdefault.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="../assets/img.jpg" alt="" /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ytimg.com/vi/hddRanX6uU8/maxresdefault.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="../assets/img.jpg" alt="" /></swiper-slide>
    <swiper-slide
      ><img src="https://i.ytimg.com/vi/hddRanX6uU8/maxresdefault.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="../assets/img.jpg" alt="" /></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";

// import "../sty";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
#app {
  height: 550px;
}



html,
body {
  position: relative;
  /* height: 700px; */
}

@media (max-width: 1087px) {
}

@media (max-width: 991.98px) {
  .swiper-slide img {
    object-fit: contain !important;
  }
}

@media (max-width: 767.98px) {
}

.swiper {
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
  background: center;
  /* margin-left: 10px; */
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
