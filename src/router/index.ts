import path from 'path';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

export const constantRoutes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/NotFound.vue'),
    },
    {
        path: '/',
        name: '首頁',
        component: () => import('@/pages/Home.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...constantRoutes]
})

export default router;