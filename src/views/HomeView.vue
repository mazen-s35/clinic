<template>
  <div class="home">
    <!-- Header -->
    <SliderSwiper />
    <!-- About Us -->
    <div class="container pt-5">
      <div class="row row-cols-md-2 row-cols-1">
        <div class="col">
          <img src="../assets/hospital-logo-design-vector-medical-cross_53876-136743-removebg-preview.png" class="imgAbout" alt="">
        </div>
        <div class="col">
          <h2 class="mt-5 hear">لماذا عيادتينا ؟</h2>
          <p>عيادتينا هي اكبر العيادات في الشرق الاوسط وبها جميع التخصيصات زي اكبر العيادات ويوجد بها تخصصات مثلا الاسنان و النساء والاولدة و العظيم و الرمد و الكثير من باقي التخصيصات ويوجد لدينا اكبر الدكاترو في كل التخصيصات</p>
          <router-link to="../views/AboutView.vue" class="btn btn-back">لمزيد من المعلومات</router-link>
        </div>
      </div>
    </div>
    <!-- MedicalSpecialties -->
    <MedicalSpecialties />
    <!-- TeamDeactor -->
    <TeamDeactor />
    <!-- Footer -->
    <FooTer />
  </div>
</template>

<script>

import MedicalSpecialties from "@/components/MedicalSpecialties.vue"
import TeamDeactor from "@/components/TeamDeactor.vue"
import FooTer from "@/components/FooTer.vue"
import SliderSwiper from "@/components/SliderSwiper.vue"

export default {
  name: 'HomeView',
  components: { MedicalSpecialties, TeamDeactor, FooTer, SliderSwiper, },
  setup () {
    const carouselSlider = [
      "https://www.gracemedicalclinic.net/wp-content/uploads/2015/07/banner2-1-1.jpg",
      "https://balhospitalandmaternityhome.com/index/wp-content/uploads/2018/01/patient.png",
      "http://krishnahospital.in/wp-content/uploads/2019/12/slide-20-1.jpg",
      "https://asianvivekanand.com/wp-content/uploads/2019/07/Slider3-Asian-Vivekanand.jpg",
      "https://www.springmeadowshospital.com/wp-content/uploads/revslider/main-home/h1-slider-image-1.jpg"
    ]

    return {
      carouselSlider
    }
  }
}
</script>

<style>
.hear {
  color: var(--main-color)
}
p {
  color: var(--text-color);
}

.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
}

.slider-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: 100%;
  /* background: #ddd; */
}

.slider-info img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.imgAbout {
  width: 70%;
}
</style>
