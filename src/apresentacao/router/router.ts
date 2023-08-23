import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TelaCkEditorVue from '../telas/ckeditor/TelaCkEditor.vue';
import EditorViewVue from '../telas/editor/TelaEditor.vue';
import TelaRespostaVue from '../telas/resposta/TelaResposta.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/sarc',
        name: 'resposta',
        component: TelaRespostaVue,
    },
    {
        path: '/sarc/editor',
        name: 'editor',
        component: EditorViewVue,
    },
    {
        path: '/ckeditor',
        name: 'ckeditor',
        component: TelaCkEditorVue,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
