import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../pages/HomePage.vue'
import ProductPagesTwo from '../pages/ProductPagesTwo.vue'
import ContainerItem from '../pages/ContainerItem.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
    {  
       path: '/',
       name: HomePage, 
       component: HomePage
    }, 
    {
       path: '/product',
       name: ContainerItem, 
       component: ContainerItem
    },
    {
       path: '/info',
       name: ProductPagesTwo, 
       component: ProductPagesTwo
    }
    
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  export default router
