import { createApp } from "vue";
import {createRouter,createWebHistory} from 'vue-router'


// Import our custom CSS
import '../src/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

 import App from "./App.vue";
 import AppRick from "./components/AppRick.vue";
 import AppCriptoList from "./components/AppCriptoList.vue";
 import AppCriptoView from "./components/AppCriptoView.vue";
 import AppHome from "./components/AppHome.vue";

const routes = [
    { path:'/rick',component:AppRick,meta:{
        requiresAuth:true
    }},
    { path:'/cripto',component:AppCriptoList},
    { path:'/criptoView/:id',component:AppCriptoView},
    { path:'/',component:AppHome},
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

router.beforeEach((to,from,next)=>{

    console.log(to.meta);
   
    next()
    
})

const app = createApp(App)
.use(router)
.mount("#app")

