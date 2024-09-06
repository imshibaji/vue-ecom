import DashboardView from '@/views/admin/DashboardView.vue';
import Home from '@/views/front/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/front/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/front/ProductsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/front/ContactView.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: DashboardView
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('@/views/admin/ProductsView.vue')
        },
        {
          path: 'products/:id',
          name: 'Product',
          component: () => import('@/views/admin/ProductDetailsView.vue')
        }
      ]
    }
  ]
})

export default router
