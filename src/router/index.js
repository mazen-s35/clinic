import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// eslint-disable-next-line no-unused-vars
import Medical_specialtie from "../views/Medical_specialtie.vue";
import AboutView from "../views/AboutView.vue";
import MedicalTeam from "../views/MedicalTeam.vue";
import BookNow from "../views/BookNow.vue";
import SingleMedicalTeam from "../views/SingleMedicalTeam.vue";
import SingleMedical_specialtie from "../views/SingleMedical_specialtie.vue";
import BookNowDoctor from "../views/BookNowDoctor.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/AboutView.vue",
        name: "AboutView",
        component: AboutView,
    },
    {
        path: "/Medical_specialtie.vue",
        name: "Medical_specialtie",
        component: Medical_specialtie,
    },
    {
        path: "/Medical_specialtie.vue/:id",
        name: "SingleMedical_specialtie",
        component: SingleMedical_specialtie,
        props: true,
    },
    {
        path: "/MedicalTeam.vue",
        name: "MedicalTeam",
        component: MedicalTeam,
    },
    {
        path: "/MedicalTeam.vue/:id",
        name: "SingleMedicalTeam",
        component: SingleMedicalTeam,
        props: true,
    },
    {
        path: "/SingleMedicalTeam.vue/:id",
        name: "BookNowDoctor",
        component: BookNowDoctor,
        props: true,
    },
    {
        path: "/BookNow.vue",
        name: "BookNow",
        component: BookNow,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;