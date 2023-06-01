import ListaDeEscapadoresVue from '@/apresentacao/telas/editor/modelos/ListaDeEscapadores.vue';
import { EscapadorDeQuestaoFake } from '@/tests/dubles/dominio/comum/escapador/questao/EscapadorDeQuestaoDubles';
import { mount } from '@vue/test-utils';

describe('ListaDeEscapadores', () => {
    test('Informa se não existe nenhum escapador disponível', () => {
        const sut = mount(ListaDeEscapadoresVue, {
            props: {
                escapadoresQuestoes: [],
            },
        });
        expect(sut.text()).toBe('Nenhum escapador disponível');
    });
    test('Exibe uma lista dos escapadores disponíveis', () => {
        const escapadoresQuestoes = [
            new EscapadorDeQuestaoFake('1'),
            new EscapadorDeQuestaoFake('2'),
        ];
        const sut = mount(ListaDeEscapadoresVue, {
            props: {
                escapadoresQuestoes,
            },
        });
        expect(sut.text()).toContain('Escapadores de questões disponíveis:');
        expect(sut.text()).toContain('${questao1.categoria1}');
        expect(sut.text()).toContain('${questao2.categoria2}');
    });
});
