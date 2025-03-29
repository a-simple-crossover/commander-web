import {createRouter, createWebHistory} from 'vue-router'
import AdminLayout from '@/layouts/Layout.vue'

const routes = [
    {
        path: '/',
        component: AdminLayout,
        children: [
            {path: '', component: () => import('@/views/Home.vue')}
        ],
    },
    {path: '/login', component: () => import('@/views/Login.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router