import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import Welcome from "./components/Welcome.vue"
import SignUp from "./components/SignUp.vue"
import Settings from "./components/Settings.vue"
import Dashboard from "./components/Dashboard.vue"

Vue.use(VueRouter);

const routes = [
    { path: "/", name: "welcome", component: Welcome },
    { path: "/signup", name: "signup", component: SignUp },
    { path: "/settings", name: "settings", component: Settings },
    { path: "/dashboard", name: "dashboard", component: Dashboard }
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
