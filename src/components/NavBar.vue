<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div id="wrapper">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link to="/" class=" logo fw-bold text-decoration-none fs-5 p-2">عياده</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#maimenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="maimenu">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <ToggleBtn :mode="mode" @toggle="$emit('toggle')" />
            </li>
            <li class="nav-item">
              <router-link to="/" class="color p-2 text-decoration-none">الرئسية</router-link>
            </li>
            <li class="nav-item">
              <router-link to="../views/AboutView.vue" class="color p-2 text-decoration-none">ماذا عن عياداتنا</router-link>
            </li>
            <li class="nav-item">
              <router-link to="../views/Medical_specialtie.vue" class="color p-2 text-decoration-none">التخصيصات</router-link>
            </li>
            <li class="nav-item">
              <router-link to="../views/MedicalTeam.vue" class="color p-2 text-decoration-none">الفريق الطبية</router-link>
            </li>
          </ul>
          <router-link to="../views/BookNow.vue" class="btn-back p-2 text-decoration-none btn">احجز الان</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ToggleBtn from "./ToggleBtn.vue";
export default {
    name: "NavBar",
    props: ["mode"],
    components: { ToggleBtn },
}
</script>

<style>
.logo {
  color: var(--main-color);
}
.logo:hover {
  opacity: 0.5;
  color: #1A4D2E;
}
li .color {
  color: #707070;
}
li .color:hover {
  color: var(--main-color);
  border-bottom: 2px solid var(--main-color);
}
.btn-back {
  background-color: var(--main-color) !important;
  color: var(--light-color) !important;
}

.btn-back:hover {
  opacity: 0.5;
}

.material-symbols-outlined {
  cursor: pointer;
  /* color: #FFF; */
  font-size: 26px;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>