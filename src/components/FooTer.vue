<template>
  <footer class="pt-5 mt-5">
    <div class="container">
      <div class="row row-cols-md-3 row-cols-1">
        <div class="col">
          <img src="../assets/hospital-logo-design-vector-medical-cross_53876-136743-removebg-preview.png" alt="" style="width: 60%">
          <p class="text text-white-50 ps-3">
            العياده لديها احسن الاطباء في مصر و يوجد بها جميع التخصيصات ويوجد بها احسن معامل التحاليل
          </p>
          <router-link to="../views/BookNow.vue" class="color p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
        <div class="col p-5">
          <h3 class="title">الخدمات</h3>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="text-white-50  p-2 text-decoration-none">الرئسية</router-link>
            </li>
            <li class="nav-item">
              <router-link to="../views/AboutView.vue" class=" text-white-50 x  p-2 text-decoration-none">ماذا عن عياداتنا</router-link>
            </li>
            <li class="nav-item">
              <router-link to="../views/Medical_specialtie.vue" class="text-white-50 p-2 text-decoration-none">التخصيصات</router-link>
            </li>
            <li class="nav-item">
              <router-link to="../views/MedicalTeam.vue" class="text-white-50 p-2 text-decoration-none">الفريق الطبية</router-link>
            </li>
          </ul>
        </div>
        <div class="col p-5">
          <h3 class="title">تباعون علي</h3>
          <ul class="navbar-nav">
            <li class="social">
              <img src="../assets/facebook.svg" alt="">
              <a class="text-white-50 p-2 text-decoration-none" href="https://www.facebook.com/mazen.manchester.3">فيسبوك</a>
            </li>
            <li class="social">
              <img src="../assets/linkedin.svg" alt="">
              <a class="text-white-50 p-2 text-decoration-none" href="https://www.linkedin.com/in/mazen-ashraf-a4214b218">لينكدان</a>
            </li>
            <li class="social">
              <img src="../assets/instagram.svg" alt="">
              <a class="text-white-50 p-2 text-decoration-none" href="#">انستجرام</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
  background-color: #1A4D2E;
}
li {
  padding-top: 10px;
}
.title {
  color: var(--main-color) !important;
  padding: 10px 20px;
}
.social {
  display: flex;
}

.social img:hover {
  padding-right: 15px;
}
</style>