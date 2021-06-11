import { createRouter, createWebHistory } from 'vue-router'

const home = () =>
    import ("../views/home/Home.vue");
const cart = () =>
    import ("../views/cart/Cart.vue");
const profile = () =>
    import ("../views/profile/Profile.vue");
const category = () =>
    import ("../views/category/Category.vue");
const routes = [{
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: home,
    },
    {
        path: "/cart",
        component: cart,
    },
    {
        path: "/category",
        component: category,
    },
    {
        path: "/profile",
        component: profile,
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router