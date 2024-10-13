import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminLayout from '../views/admin/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: 'ventas',
          name: 'sale',
          component: () => import('../views/admin/SalesView.vue')
        },
        {
          path: 'nuevo-producto',
          name: 'new-product',
          component: () => import('../views/admin/NewProductView.vue')
        },
        {
          path: 'productos',
          name: 'products',
          component: () => import('../views/admin/ProductosView.vue')
        }
      ]
    }
  ]
})

export default router
