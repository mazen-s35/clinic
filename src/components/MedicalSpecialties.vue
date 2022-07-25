<template>
  <div class="container pt-5 pb-5">
    <h2 class="d-flex align-item-center justify-content-center fw-bold pb-1 hear">التخصيصات الطبية</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card card-color">
          <img src="../assets/06fee8aa335a157d70274851d1b5d4ba-removebg-preview.png" class="card-img-top rounded mx-auto d-block" style="width: 150px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة الاسنان</div>
          </div>
            <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
      <div class="col">
        <div class="card card-color">
          <img src="../assets/images-removebg-preview.png" class="card-img-top rounded mx-auto d-block" style="width: 150px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة عظام</div>
          </div>
          <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
      <div class="col">
        <div class="card card-color">
          <img src="https://www.dawiclinics.com/wp-content/uploads/2021/03/services_03.svg" class="card-img-top rounded mx-auto d-block" style="width: 150px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة نساء و توليد</div>
          </div>
          <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
      <div class="col">
        <div class="card card-color">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvVIzsgiIXgVnMlfQxLOJprSMXjsHmehpnw&usqp=CAU" class="card-img-top rounded mx-auto d-block" style="width: 78px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة جلدية</div>
          </div>
          <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
      <div class="col">
        <div class="card card-color">
          <img src="../assets/06fee8aa335a157d70274851d1b5d4ba-removebg-preview.png" class="card-img-top rounded mx-auto d-block" style="width: 150px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة رامد</div>
          </div>
          <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
      <div class="col">
        <div class="card card-color">
          <img src="../assets/kissclipart-plastic-surgery-icon-botox-icon-beauty-icon-6da3519cdbb48bcd-removebg-preview.png" class="card-img-top rounded mx-auto d-block" style="width: 150px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة تجميل</div>
          </div>
          <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
      <div class="col">
        <div class="card card-color">
          <img src="https://cdn4.iconfinder.com/data/icons/hospital-colored-line/512/hospital_medical_health-27-512.png" class="card-img-top rounded mx-auto d-block" style="width: 150px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة قلب</div>
          </div>
          <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
      <div class="col">
        <div class="card card-color">
          <img src="https://assets.website-files.com/60f94aa958d8172aa3a6c9b8/61d5b0862ba3ea3731932cce_drooping.svg" class="card-img-top rounded mx-auto d-block" style="width: 150px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة انف وحناجره</div>
          </div>
          <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
      <div class="col">
        <div class="card card-color">
          <img src="../assets/139499280-newborn-on-hand-pediatric-clinic-logo-in-a-linear-style-vector-illustration-white-isolated-backgroun-removebg-preview.png" class="card-img-top rounded mx-auto d-block" style="width: 150px" alt="">
          <div class="card-body">
            <div class="card-title d-flex align-item-center justify-content-center">عيادة اطفال</div>
          </div>
          <router-link to="../views/Medical_specialtie.vue" class="m-2 p-2 text-decoration-none btn btn-back">احجز الان</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "MedicalSpecialties",
}
</script>

<style>
.card-color:hover {
  background-color: var(--main-color) !important;
}
.bte {
  display: block;
  margin: 20px auto;
  text-align: center;
}
</style>