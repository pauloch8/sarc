import { mount } from '@vue/test-utils';
import FormularioEdicaoVue from '@/apresentacao/telas/editor/FormularioEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import ListaModelosExibeEscapadoresVariaveisStub from '@/tests/dubles/apresentacao/ListaModelosExibeEscapadoresVariaveisStub.vue';
import { FormularioEditorFactoryDummy } from '@/tests/dubles/dominio/editor/FormularioEditorFactoryDubles';
import { ListaDeQuestoesRetornaItensComEscapadorStub } from '@/tests/dubles/dominio/editor/questoes/QuestaoEditavelDubles';

describe('FormularioEdicao', () => {
    test('quando a lista de questöes é alterada, provê seus escapadores para outros componentes', () => {
        const formularioEditorFactory = new FormularioEditorFactoryDummy();
        const listaQuestoes = new ListaDeQuestoesRetornaItensComEscapadorStub();

        const sut = mount(FormularioEdicaoVue, {
            global: {
                provide: {
                    formularioEditorFactory,
                },
            },
            components: {
                ListaModelos: ListaModelosExibeEscapadoresVariaveisStub,
                BotoesSalvarCancelar,
            },
            data() {
                return {
                    listaQuestoes,
                };
            },
        });
        expect(sut.text()).toContain(
            listaQuestoes.itens[0].escapadores[0].string,
        );
    });
});
