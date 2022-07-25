<template>
  <div class="header_doc">
    <h1 class="h1">اطبائنا</h1>
  </div>
  <div class="container pt-5">
    <div class="row row-sm-1">
      <div class="col">
        <img :src="item.img" style="width: 22rem" alt="">
      </div>
      <div class="col pt-5">
        <h3 class="title">{{item.nameDoctor}}</h3>
        <h5 class="title_jop">{{item.category}}</h5>
        <p class="lh-base text-black-50">{{item.description}}</p>
      <router-link :to="{ name: 'BookNowDoctor', params: {nameDoctor: item.nameDoctor} }" class="color p-2 text-decoration-none btn btn-back">احجز الان</router-link>
      </div>
    </div>
  </div>
  <FooTer />
</template>

<script>
import FooTer from '@/components/FooTer.vue'
export default {
  name: 'SingleMedicalTeam',
  components: {FooTer},
  props: ['id'],
  data() {
    return{
      item: []
    }
  },
  mounted() {
  // eslint-disable-next-line no-undef
  fetch('http://localhost:3000/jopDoctor/' + this.id)
  .then(res => res.json())
  .then(data => this.item = data)
  .catch(err => console.log(err.massage))
}
}
</script>

<style>
.header_doc {
  height: 60vh;
  color: #FFF;
  background-color: #0078AA;
  text-align: center;
  padding: 10rem !important;
}
.header_doc .h1 {
  color:#FFF;
}
.title {
  color: #444;
  font-size: 1.5rem;
  padding: 0;
}
.title_jop {
  color: #333;
  font-size: 1.4rem;
}
</style>