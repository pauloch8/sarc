import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import EditorViewVue from '../telas/editor/EditorView.vue';
import TelaRespostaVue from '../telas/resposta/TelaResposta.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'resposta',
        component: TelaRespostaVue,
    },
    {
        path: '/editor',
        name: 'editor',
        component: EditorViewVue,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
