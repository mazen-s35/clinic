<template>
  <div class="container pt-5">
    <h2 class="text-center pb-3 fw-bold hear">احجز معانا</h2>
    <form ref="form" @submit.prevent="sendEmail" class="row g-3">
      <div class="col-md-6">
        <input type="text" class="form-control" name="name" placeholder="الاسم">
      </div>
      <div class="col-md-6">
        <input type="number" class="form-control" name="phone" placeholder="رقم التليفون">
      </div>
      <div class="col-md-6">
        <input type="email" class="form-control" name="email" placeholder="البريد الالكترونية">
      </div>
      <div class="col-md-6">
        <input type="text" class="form-control" name="massage" placeholder="التخصيص">
      </div>
      <input type="submit" class="btn btn-back" style="width: 30%; margin: 10px auto" value="ارسال">
    </form>
  </div>
  <FooTer />
</template>

<script>
import emailjs from "@emailjs/browser"
import FooTer from "@/components/FooTer.vue";
export default {
    name: 'BookNow',
    components: {FooTer},
      methods: {
    sendEmail() {
      emailjs.sendForm('service_4jcq5fn', 'template_lgisyul', this.$refs.form, '7lNi1I-5wr4qlUxLt')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}

</script>

<style>
</style>