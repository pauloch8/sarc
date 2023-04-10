import { mount } from '@vue/test-utils';
import ValorPadraoSelecaoVue from '@/apresentacao/telas/editor/questoes/questao-opcao/ValorPadraoSelecao.vue';
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { OpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { Titulo } from '@/dominio/comum/Titulo';

describe('ValorPadraoSelecao', () => {
    describe('selecionar um item emite o evento "selecionou"', () => {
        test('com o id selecionado', async () => {
            // TODO: Avaliar substituição de classes concretas por dublês
            const idExpected = new IdFormulario('teste1');
            const listaOpcoes = new ListaEditavel([
                new OpcaoEditavel(
                    idExpected,
                    new Titulo('teste1'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
                new OpcaoEditavel(
                    new IdFormulario('teste2'),
                    new Titulo('teste2'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
            ]);
            const sut = mount(ValorPadraoSelecaoVue, {
                props: { listaOpcoes },
            });
            await sut.find('select').setValue('teste1');
            expect(sut.emitted()).toHaveProperty('selecionou');
            expect(sut.emitted('selecionou')).toHaveLength(1);
            const evento = sut.emitted('selecionou') as unknown[][];
            const argumento = evento[0] as any;
            expect(argumento[0]).toStrictEqual(idExpected);
        });
        test('com o null selecionado', async () => {
            // TODO: Avaliar substituição de classes concretas por dublês
            const idExpected = new IdFormulario('teste1');
            const listaOpcoes = new ListaEditavel([
                new OpcaoEditavel(
                    idExpected,
                    new Titulo('teste1'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
                new OpcaoEditavel(
                    new IdFormulario('teste2'),
                    new Titulo('teste2'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
            ]);
            const sut = mount(ValorPadraoSelecaoVue, {
                props: { listaOpcoes },
            });
            await sut.find('select').setValue(null);
            expect(sut.emitted()).toHaveProperty('selecionou');
            expect(sut.emitted('selecionou')).toHaveLength(1);
            const evento = sut.emitted('selecionou') as unknown[][];
            const argumento = evento[0] as any;
            expect(argumento[0]).toBeNull();
        });
    });
    describe('selecionar um item inexistente', () => {
        test.skip('exibe mensagem de erro', async () => {
            /* ESSE TESTE NÃO FUNCIONA PQ AO SETAR UM VALOR QUE NÃO FAZ PARTE DOS 
            OPTIONS DO SELECT ELE JÁ EMITE UM NULL PARA A FUNÇÃO DO WATCH */
            // TODO: Avaliar substituição de classes concretas por dublês
            const idExpected = new IdFormulario('teste1');
            const listaOpcoes = new ListaEditavel([
                new OpcaoEditavel(
                    idExpected,
                    new Titulo('teste1'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
                new OpcaoEditavel(
                    new IdFormulario('teste2'),
                    new Titulo('teste2'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
            ]);
            const sut = mount(ValorPadraoSelecaoVue, {
                props: { listaOpcoes },
            });
            expect(sut.find('.erro').exists()).toBeFalsy();
            await sut.find('select').setValue('teste3');
            expect(sut.find('.erro').exists()).toBeTruthy();
        });
        test('emite evento selecionou com valor null', async () => {
            // TODO: Avaliar substituição de classes concretas por dublês
            const idExpected = new IdFormulario('teste1');
            const listaOpcoes = new ListaEditavel([
                new OpcaoEditavel(
                    idExpected,
                    new Titulo('teste1'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
                new OpcaoEditavel(
                    new IdFormulario('teste2'),
                    new Titulo('teste2'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
            ]);
            const sut = mount(ValorPadraoSelecaoVue, {
                props: { listaOpcoes },
            });
            await sut.find('select').setValue('teste3');
            expect(sut.emitted()).toHaveProperty('selecionou');
            expect(sut.emitted('selecionou')).toHaveLength(1);
            const evento = sut.emitted('selecionou') as unknown[][];
            const argumento = evento[0] as any;
            expect(argumento[0]).toBeNull();
        });
    });
    describe('instanciar sem a props selecionado', () => {
        test('inicia com o item "Nenhum" selecionado', async () => {
            // TODO: Avaliar substituição de classes concretas por dublês
            const listaOpcoes = new ListaEditavel([
                new OpcaoEditavel(
                    new IdFormulario('teste1'),
                    new Titulo('teste1'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
                new OpcaoEditavel(
                    new IdFormulario('teste2'),
                    new Titulo('teste2'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
            ]);
            const sut = await mount(ValorPadraoSelecaoVue, {
                props: { listaOpcoes },
            });
            expect(sut.find('select').element.value).toBe('Nenhum');
        });
    });
    describe('instanciar com a props selecionado', () => {
        test('inicia com o item da props selecionado', async () => {
            // TODO: Avaliar substituição de classes concretas por dublês
            const selecionado = new IdFormulario('teste1');
            const listaOpcoes = new ListaEditavel([
                new OpcaoEditavel(
                    selecionado,
                    new Titulo('teste1'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
                new OpcaoEditavel(
                    new IdFormulario('teste2'),
                    new Titulo('teste2'),
                    0,
                    new ListaEditavel(),
                    new ListaEditavel(),
                ),
            ]);
            const sut = await mount(ValorPadraoSelecaoVue, {
                props: { listaOpcoes, selecionado },
            });
            expect(sut.find('select').element.value).toBe(
                selecionado.toString(),
            );
        });
    });
});
