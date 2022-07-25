<template>
  <div class="team">
    <div class="container">
      <h2 class="d-flex align-item-center justify-content-center hear fw-bold pt-2">فريق الاطباء</h2>
      <swiper :slidesPerView="3" :spaceBetween="30" :slidesPerGroup="3" :loop="true" :loopFillGroupWithBlank="true" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور جلدية</h3>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور اسنان</h3>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور رامد</h3>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور نساء وتوليد</h3>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور عظام</h3>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور قلب</h3>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور امراض كبدية</h3>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور انف زحناجره</h3>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="../views/MedicalTeam.vue">
            <img src=https://i.postimg.cc/Qd02TQsv/doctor.png style="width: 20rem" alt="">
          <h3>دكتور اطفال</h3>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style>
.team {
  height: 60vh;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */
  height: 20rem;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide h3 {
  padding-bottom: 25px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>