<template>
  <div class="container pt-5">
    <div class="row row-cols-lg-2 row-cols-1">
      <div class="col pt-4">
        <h3 class="hear fs-2">اهم ما يميز الفريق الطبية لدينا</h3>
        <p class="lh-lg" style="color: var(--text-color)"> اهم ما يميز الفريق الطبية لدياانها من احسن الاطباها في مجالاتهام ولديهم الخبرة الكافي لتعامل مع ايه خطر يوجه المريض في اسرع وقت ممكن ولديهم اساليبهم الخاصة لتعامل مع المريض بحريص ولا يحاس باي اللم </p>
      </div>
      <div class="col">
        <img src="../assets/hospital-logo-design-vector-medical-cross_53876-136743-removebg-preview.png" style="width: 60%" alt="">
      </div>
    </div>
  </div>
  <div class="container pt-5">
    <input type="search" placeholder="ابحث عن تخصيص الطبيب" class="form-control mb-5" v-model="search">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="item in filterSearchDoc" :key="item.id">
        <div class="card">
          <img class="w-50 m-auto card-img-top" :src="item.img" alt="">
          <div class="card-body">
            <h5 class="card-title text-secondary">{{item.nameDoctor}}</h5>
            <p class="card-text">{{item.category}}</p>
            <p class="card-text" style="color: var(--text-color)">{{item.description}}</p>
            <router-link class="btn btn-back" :to="{ name: 'SingleMedicalTeam', params: {id: item.id, nameDoctor: item.nameDoctor} } ">
              توصيل مع الدكتور
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooTer />
</template>

<script>
import FooTer from "@/components/FooTer.vue"
export default {
name: "MedicalTeam",
components: {FooTer},
data () {
    return {
        search: "",
        items: [],
    }
},
mounted() {
  fetch('http://localhost:3000/jopDoctor')
  .then(res => res.json())
  .then(data => this.items = data)
  .catch(err => console.log(err.massage))
},
computed: {
  filterSearchDoc() {
    return this.items.filter(item => item.category.includes(this.search.toLowerCase()))
  }
}
}
</script>

<style>
.test {
  display: flex;
}
</style>