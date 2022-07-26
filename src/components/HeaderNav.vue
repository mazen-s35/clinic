<template>
  <header>
    <nav>
        <div class="branding">
            <router-link to="/" class="logo fs-5">عياده</router-link>
        </div>
        <ul v-show="!mobile" class="navigation">
            <li class="nav-item">
              <ToggleBtn :mode="mode" @toggle="$emit('toggle')" />
            </li>
            <li>
                <router-link to="/" class="link">الرئسية</router-link>
            </li>
            <li>
                <router-link to="../views/AboutView.vue" class="link">ماذا عن عياداتنا</router-link>
            </li>
            <li>
                <router-link to="../views/Medical_specialtie.vue" class="link">التخصيصات</router-link>
            </li>
            <li>
                <router-link to="../views/MedicalTeam.vue" class="link">الفريق الطبية</router-link>
            </li>
        <router-link to="../views/BookNow.vue" class="btn-back p-2 text-decoration-none btn">احجز الان</router-link>
        </ul>
        <div class="icon">
            <span @click="toggleMobileNav" v-show="mobile" :class="{'icon_active': mobileNav}" class="material-symbols-outlined">menu</span>
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li class="nav-item">
              <ToggleBtn :mode="mode" @toggle="$emit('toggle')" />
            </li>
            <span class="material-symbols-outlined fs-4" @click="close">close</span>
            <li>
                <router-link to="/" class="link">الرئسية</router-link>
            </li>
            <li>
                <router-link to="../views/AboutView.vue" class="link">ماذا عن عياداتنا</router-link>
            </li>
            <li>
                <router-link to="../views/Medical_specialtie.vue" class="link">التخصيصات</router-link>
            </li>
            <li>
                <router-link to="../views/MedicalTeam.vue" class="link">الفريق الطبية</router-link>
            </li>
        <router-link to="../views/BookNow.vue" class="btn-back p-2 text-decoration-none btn">احجز الان</router-link>
        </ul>
        </transition>
    </nav>
  </header>
</template>

<script>
import ToggleBtn from "./ToggleBtn.vue";
export default {
    name:  'HeaderNav',
    props: ["mode"],
    components: { ToggleBtn },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        close() {
            this.mobileNav = null
        },
        checkScreen() {
            this.windowWidth = innerWidth;
            if(this.windowWidth <= 832) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
}
</script>

<style>
header{
    z-index: 99;
    width: 100%;
    transition: 0.5s ease all;
    color: var(--text-color)
}
.logo {
  color: var(--main-color);
  text-decoration: none;
}
.logo:hover {
  opacity: 0.5;
  color: #1A4D2E;
}
header nav {
    position: relative;
    display:flex;
    flex-direction: row;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
}

@media (min-width: 1140px) {
    header nav {
        max-width: 1140px;
    }
}

header nav ul,
header nav .link {
    font-weight: 500;
    list-style: none;
    text-decoration: none;
    color: #707070;
}

header nav li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}

header nav .link {
    font-size: 14px;
    transition: .5s ease all;
}

header nav .link:hover {
    border-bottom: 1px solid var(--main-color);
    color: var(--main-color)
}

header .branding {
    display: flex;
    align-items: center;
}

header .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

.icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50px;
    height: 100%;
}

.material-symbols-outlined {
    cursor: pointer;
    font-size: 24px;
    transition: .8s ease all;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

.icon_active {
    transform: rotate(180deg);
    right: 30px;
}

.dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: var(--light-color);
    top: 0;
    left: 0;
}
.dropdown-nav li {
    margin-left: 0;
}
.dropdown-nav li .link {
    color: #000
}
.btn-back {
  background-color: var(--main-color) !important;
  color: var(--light-color) !important;
}

.btn-back:hover {
  opacity: 0.5;
}
</style>