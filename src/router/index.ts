import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import ContentPage from '@/pages/contents/slug.vue'
import IndexPage from '@/pages/index.vue'
import Index from '@/pages/landing/index.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/content',
            component: IndexPage,
        },

        {
            path: '/content/:slug',
            component: ContentPage,
        }
    ],
})

export default router
