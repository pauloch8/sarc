import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RespostaView from '../resposta/RespostaView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'resposta',
        component: RespostaView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
