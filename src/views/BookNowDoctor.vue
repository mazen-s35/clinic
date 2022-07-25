<template>
  <div class="header_doc">
    <h1 class="h1">للحجز مع الدكتور {{item.nameDoctor}}</h1>
    <h5>{{item.category}}</h5>
  </div>
  <div class="container pt-5">
    <div class="row row-cols-lg-2 row-cols-1">
        <div class="col">
            <p>{{item.description}}</p>
            <h6>سعر الحجز لدكتور : {{item.price}}</h6>
        </div>
        <form @submit.prevent="" class="col">
            <div class="col-md-6 pb-2">
                <input type="text" class="form-control" name="name" placeholder="الاسم" v-model="form.name">
            </div>
            <div class="col-md-6 pb-2">
                <input type="number" class="form-control" name="phone" placeholder="رقم التليفون" v-model="form.phoneOne">
            </div>
            <div class="col-md-6 pb-2">
                <input type="number" class="form-control" name="phone" placeholder="رقم التليفون البديل" v-model="form.phoneTwo">
            </div>
            <div class="col-md-6 pb-2">
                <input type="email" class="form-control" name="email" placeholder="البريد الالكترونية" v-model="form.email">
            </div>
            <div class="col-md-6 pb-2">
                <input type="number" class="form-control" name="phone" placeholder="السن" v-model="form.age">
            </div>
            <div class="col-md-6 pb-2">
                <label for="male">ذكر</label>
                <input type="radio" name="gender" value="male" id="male" v-model="form.gender">
                <label for="female" class="pe-2">انثى</label>
                <input type="radio" name="gender" value="female" id="female" v-model="form.gender">
            </div>
            <div class="col-md-6 pb-2">
                <textarea class="form-control" placeholder="ملاحظات"></textarea>
            </div>
            <button class="btn btn-back" @click="login()">ارسال</button>
            <div class="popup" v-if="popup">
                <h3>تم الارسال</h3>
                <button class="btn btn-back te" @click="close()">تم</button>
            </div>
        </form>
    </div>
  </div>
  <FooTer />
</template>

<script>
import FooTer from '@/components/FooTer.vue'
export default {
    name: 'BookNowDoctor',
    props: ['id'],
    components: {FooTer},
    data() {
        return{
        item: [],
        form: {
            email: '',
            name: '',
            phoneOne: '',
            phoneTwo: '',
            age: '',
            gender: '',
        },
        error: [],
        popup: false
        }
  },
  methods: {
    login() {
        this.error = []
        for(const i in this.form) {
            if(this.form[i] === "" || this.form[i].length === 0) {
                this.error.push(i)
            }
            if(this.error.length === 0) {
                this.popup = true
            }
            console.log(this.error)
        }
        return this.form = ''
    },
    close() {
        this.popup = false
    }
  },
  mounted() {
  fetch('http://localhost:3000/jopDoctor/' + this.id)
  .then(res => res.json())
  .then(data => this.item = data)
  .catch(err => console.log(err.massage))
}
}
</script>

<style>
.popup {
    width: 40rem;
    background-color: #fff;
    box-shadow: 0 0 2rem;
    padding: 8rem;
    position: absolute;
    top: 30rem;
    right: 19rem;
    transform: translate(-8%, -16%);
}
.popup .te {
    display: block;
    margin: 10px auto;
}
@media(max-width: 796px) {
    .popup {
        width: 20rem;
        padding: 4rem;
        transform: translate(17%, 7px);
    }
}
@media(max-width: 588px) {
    .popup {
        transform: translate(56%, 67%);
    }
}
@media(max-width: 400px) {
    .popup {
        transform: translate(84%, 75%);
    }
}
</style>