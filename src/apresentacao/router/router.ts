import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TelaRespostaVue from '../telas/resposta/TelaResposta.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'resposta',
        component: TelaRespostaVue,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
