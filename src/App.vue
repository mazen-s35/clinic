<template>
  <div class="app" :class="mode">
    <NavBar :mode="mode" @toggle="toggle"/>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: "App",
  data () {
    return {
      mode: 'light'
    }
  },
  components: { NavBar },
  methods: {
    toggle() {
      if(this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
}
</script>

<style>
body {
  direction: rtl;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Cairo', sans-serif !important;
}

:root {
  --main-color: #3CCF4E;
  --text-color: #555;
  --light-color: #fff;
}

.dark {
  background-color: #082032;
  color: #fff;
}
</style>
