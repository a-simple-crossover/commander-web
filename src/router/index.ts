import {createRouter, createWebHistory} from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'

const routes = [
    {
        path: '/',
        component: AdminLayout,
        children: [
            {path: '', component: () => import('@/views/Home.vue')},
            {path: 'users', component: () => import('@/views/Users.vue')},
        ],
    },
    {path: '/login', component: () => import('@/views/Login.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router