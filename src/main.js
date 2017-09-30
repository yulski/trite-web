import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import Welcome from "./components/Welcome.vue"
import SignUp from "./components/SignUp.vue"

Vue.use(VueRouter);

const Foo = { template: "<h1>foo</h1>" };
const Bar = { template: "<h1>bar</h1>" };

const routes = [
    { path: "/foo", name: "foo", component: Foo },
    { path: "/bar", name: "bar", component: Bar },
    { path: "/", name: "welcome", component: Welcome },
    { path: "/signup", name: "signup", component: SignUp }
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
