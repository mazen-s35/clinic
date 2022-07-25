<template>
  <div class="header_doc">
    <h1>قسم {{medical.nameMedicalSpecialties}}</h1>
  </div>
  <div class="container pt-5">
    <div class="row row-sm-1">
      <div class="col">
        <img :src="medical.img" class="as"  alt="">
      </div>
      <div class="col pt-5">
        <h3 class="title">قسم {{medical.nameMedicalSpecialties}}</h3>
        <p class="lh-base text-black-50">{{medical.description}}</p>
      <router-link to="../views/MedicalTeam.vue" class="color p-2 text-decoration-none btn btn-back">توصيل مع الدكتور</router-link>
      </div>
    </div>
  </div>
  <FooTer />
</template>

<script>
import FooTer from '@/components/FooTer.vue'
export default {
    name:'SingleMedical_specialtie',
    props: ['id'],
    components: {
        FooTer
    },
    data() {
        return{
            medical: []
        }
    },
    mounted() {
      fetch('http://localhost:3000/medical/' + this.id)
      .then(res => res.json())
      .then(data => this.medical = data)
      .catch(err => console.log(err.massage))
    }
}
</script>

<style>
.as {
  width: 20rem !important
}
</style>