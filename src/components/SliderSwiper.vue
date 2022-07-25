<template>
  <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide><img src="https://www.gracemedicalclinic.net/wp-content/uploads/2015/07/banner2-1-1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://balhospitalandmaternityhome.com/index/wp-content/uploads/2018/01/patient.png" alt=""></swiper-slide>
    <swiper-slide><img src=http://krishnahospital.in/wp-content/uploads/2019/12/slide-20-1.jpg alt=""></swiper-slide>
    <swiper-slide><img src="https://asianvivekanand.com/wp-content/uploads/2019/07/Slider3-Asian-Vivekanand.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.springmeadowshospital.com/wp-content/uploads/revslider/main-home/h1-slider-image-1.jpg" alt=""></swiper-slide>
    <swiper-slide>
      <img src="https://www.springmeadowshospital.com/wp-content/uploads/revslider/main-home/h1-slider-image-1.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="https://asianvivekanand.com/wp-content/uploads/2019/07/Slider3-Asian-Vivekanand.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src=http://krishnahospital.in/wp-content/uploads/2019/12/slide-20-1.jpg alt="">
    </swiper-slide>
    <swiper-slide><img src="https://www.gracemedicalclinic.net/wp-content/uploads/2015/07/banner2-1-1.jpg" alt=""></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

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
.swiper {
  width: 100%;
  height: 100%;
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