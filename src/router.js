import Router from 'vue-router'
import VueForm from "./components/VueForm";
import VueOrders from "./components/VueOrders";

const routes = [
    {path: '/form', component: VueForm },
    {path: '/orders', component: VueOrders}
]

export default new Router({routes})
