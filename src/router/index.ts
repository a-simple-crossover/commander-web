import {createRouter, createWebHistory} from 'vue-router'
import AdminLayout from '@/layouts/Layout.vue'

const staticRoutes = [
    {
        path: '/',
        component: AdminLayout,
        children: [
            {path: '', component: () => import('@/views/Home.vue')},
            {path: '/login', component: () => import('@/views/Login.vue')},
            {path: '/user', component: () => import('@/views/User.vue')}
        ],
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes
})

export default router