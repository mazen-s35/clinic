<template>
<div class="header_doc">
    <h1>التخصيصات الطبية</h1>
  </div>
  <div class="container pt-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <router-link :to="{ name: 'SingleMedical_specialtie', params: {id: medical.id} }" class="col text-decoration-none" v-for="medical in medicals" :key="medical.id">
        <div class="card">
          <img :src="medical.img" style="width: 100%" alt="MedicalSpecialties">
          <div class="card-body">
            <h3 class="card-title text-secondary text-center">{{medical.nameMedicalSpecialties}}</h3>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <FooTer />
</template>

<script>
import FooTer from '@/components/FooTer.vue';
export default {
    name: "Medical_Specialties",
    components: {  FooTer },
    data() {
      return {
        medicals: []
      }
    },
    mounted() {
      fetch('http://localhost:3000/medical')
      .then(res => res.json())
      .then(data => this.medicals = data)
      .catch(err => console.log(err.massage))
    }
}
</script>

<style>
.header_doc {
  height: 60vh;
  color: #FFF;
  background-color: #1A4D2E !important;
  text-align: center;
  padding: 10rem;
}
.header_doc h1 {
  color:#FFF;
  /* padding: 10rem 0; */
}
</style>