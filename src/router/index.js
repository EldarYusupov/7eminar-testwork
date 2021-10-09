import Vue from 'vue'
import VueRouter from 'vue-router'
import FilterPage from "@/components/pages/FilterPage";
import HomePage from "@/components/pages/HomePage";


Vue.use(VueRouter)
const routes = [
    { path: '/:filter', component: FilterPage },
    { path: '', component: HomePage },
]

const router = new VueRouter({
    mode: 'history',
    routes
})



export default router