import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TelaCkEditorVue from '../telas/ckeditor/TelaCkEditor.vue';
import EditorViewVue from '../telas/editor/TelaEditor.vue';
import TelaRespostaVue from '../telas/resposta/TelaResposta.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: { name: 'Home' },
    },
    {
        path: '/sarc',
        name: 'Home',
        component: TelaRespostaVue,
    },
    {
        path: '/sarc/editor',
        name: 'editor',
        component: EditorViewVue,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
