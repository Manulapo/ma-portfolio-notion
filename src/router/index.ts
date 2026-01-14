import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const baseName = import.meta.env.VITE_SITE_BASE || ''

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
    ,
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(baseName),
    routes
})

// Handle redirects from 404.html
router.beforeEach((to, _from, next) => {
    const redirectPath = new URLSearchParams(window.location.search).get('path')

    if (redirectPath && redirectPath.includes(baseName)) {
        const targetPath = redirectPath.split('/').pop()
        if (targetPath && targetPath !== to.path.substring(1)) {
            next('/' + targetPath)
            return
        }
    }

    next()
})

export default router
