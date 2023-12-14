import { createRouter, createWebHistory } from 'vue-router'
//import { app, pages } from '@/config'
import productComponent from "@/components/ProductComponent.vue";
import cartPage from "@/pages/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "productList",
      component: productComponent
    },
    {
        path: "/cart",
        name: "cartPage",
        component: cartPage
    }
  ]
})

export default router
