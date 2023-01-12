import OpcaoEdicaoVue from '@/apresentacao/telas/editor/questoes/questao-opcao/opcao/OpcaoEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import {
    OpcaoEditavelFactoryErroOpcaoInvalidaStub,
    OpcaoEditavelFactoryErroDesconhecidoStub,
    OpcaoEditavelFactorySucessoStub,
    OpcaoEditavelFactoryDummy,
} from '@/tests/dubles/dominio/editor/questoes/OpcaoEditavelFactoryDubles';
import { mount } from '@vue/test-utils';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { Titulo } from '@/dominio/comum/Titulo';
import {
    ListaDeOpcoesEditavelDummy,
    OpcaoEditavelDummy,
    OpcaoEditavelErroStub,
} from '@/tests/dubles/dominio/editor/questoes/OpcaoEditavelDubles';
import { OpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { ListaEditavel } from '@/dominio/editor/questoes/ListaEditavel';
import { VariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { TituloDummy } from '@/tests/dubles/dominio/comum/TituloDubles';
import { IdFormularioDummy } from '@/tests/dubles/dominio/comum/IdFormularioDubles';
import { ListaDeVariaveisEditavelDummy } from '@/tests/dubles/dominio/editor/questoes/VariavelEditavelDubles';
import {
    ListaDeTextosEditavelDummy,
    ListaDeTextosEditavelGetLengthMaiorQueZeroStub,
} from '@/tests/dubles/dominio/editor/questoes/TextoEditavelDubles';

describe('OpcaoEdicao', () => {
    describe('ao criar uma nova Questão', () => {
        describe('cria um novo objeto de Questão', () => {
            test('exibe erro e lista de inconsistências se for lançado erro de Quetão Inválida', async () => {
                const opcaoEditavelFactory =
                    new OpcaoEditavelFactoryErroOpcaoInvalidaStub();
                const sut = mount(OpcaoEdicaoVue, {
                    global: {
                        provide: {
                            opcaoEditavelFactory,
                        },
                    },
                    components: {
                        IdFormularioInput: {},
                        TituloInput: {},
                        TextoComponent: {},
                        VariavelComponent: {},
                        BotoesSalvarCancelar,
                    },
                });
                await sut.find('.botaoSalvar').trigger('click');
                expect(sut.find('.erro').exists()).toBeTruthy();
                expect(sut.find('.erro').text()).toContain(
                    opcaoEditavelFactory.inconsistencias[0],
                );
                expect(sut.find('.erro').text()).toContain(
                    opcaoEditavelFactory.inconsistencias[1],
                );
                expect(sut.find('.erro').text()).toContain(
                    opcaoEditavelFactory.inconsistencias[2],
                );
            });
            test('exibe mensagem de erro desconhecido se ocorrer outro tipo de erro na criação', async () => {
                const opcaoEditavelFactory =
                    new OpcaoEditavelFactoryErroDesconhecidoStub();
                const sut = mount(OpcaoEdicaoVue, {
                    global: {
                        provide: {
                            opcaoEditavelFactory,
                        },
                    },
                    components: {
                        IdFormularioInput: {},
                        TituloInput: {},
                        TextoComponent: {},
                        VariavelComponent: {},
                        BotoesSalvarCancelar,
                    },
                });
                await sut.find('.botaoSalvar').trigger('click');
                expect(sut.find('.erro').exists()).toBeTruthy();
                expect(sut.find('.erro').text()).toContain(
                    'Ocorreu um erro desconhecido',
                );
            });
            test('emite um evento "criou" com um objeto', async () => {
                const opcaoEditavelFactory =
                    new OpcaoEditavelFactorySucessoStub();
                const sut = mount(OpcaoEdicaoVue, {
                    global: {
                        provide: {
                            opcaoEditavelFactory,
                        },
                    },
                    components: {
                        IdFormularioInput: {},
                        TituloInput: {},
                        TextoComponent: {},
                        VariavelComponent: {},
                        BotoesSalvarCancelar,
                    },
                    props: {
                        indice: 2,
                    },
                    data() {
                        const idFormulario = new IdFormulario('titulo');
                        const titulo = new Titulo('teste');
                        return {
                            idFormulario,
                            titulo,
                        };
                    },
                });
                await sut.find('.botaoSalvar').trigger('click');
                expect(sut.find('.erro').exists()).toBeFalsy();
                expect(sut.emitted()).toHaveProperty('criou');
                expect(sut.emitted('criou')).toHaveLength(1);
                const evento = sut.emitted('criou') as unknown[][];
                const argumento = evento[0] as any;
                expect(argumento[0]).toBeInstanceOf(OpcaoEditavelDummy);
            });
        });
    });
    describe('ao editar uma Questao existente', () => {
        test('exibe lista de erros se ocorrer um erro', async () => {
            const opcaoEditavelFactory = new OpcaoEditavelFactoryDummy();
            const opcaoStub = new OpcaoEditavelErroStub();
            const opcao = opcaoStub as unknown as OpcaoEditavel;
            const sut = mount(OpcaoEdicaoVue, {
                global: {
                    provide: {
                        opcaoEditavelFactory,
                    },
                },
                components: {
                    IdFormularioInput: {},
                    TituloInput: {},
                    TextoComponent: {},
                    VariavelComponent: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    opcao,
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.find('.erro').exists()).toBeTruthy();
            expect(sut.find('.erro').text()).toContain(opcaoStub.erros.id);
            expect(sut.find('.erro').text()).toContain(opcaoStub.erros.titulo);
            // expect(sut.find('.erro').text()).toContain(
            //     opcaoStub.erros.textos,
            // );
            // expect(sut.find('.erro').text()).toContain(
            //     opcaoStub.erros.variaveis,
            // );
        });
        test('emite um evento "atualizou" com um objeto', async () => {
            const opcaoEditavelFactory = new OpcaoEditavelFactoryDummy();
            const opcao = new OpcaoEditavelDummy() as unknown as OpcaoEditavel;
            const sut = mount(OpcaoEdicaoVue, {
                global: {
                    provide: {
                        opcaoEditavelFactory,
                    },
                },
                components: {
                    IdFormularioInput: {},
                    TituloInput: {},
                    TextoComponent: {},
                    VariavelComponent: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    opcao,
                },
                data() {
                    const idFormulario = new IdFormularioDummy();
                    const titulo = new TituloDummy();
                    const textos =
                        new ListaDeTextosEditavelGetLengthMaiorQueZeroStub();
                    const variaveis = new ListaDeVariaveisEditavelDummy();
                    const erro = '';
                    return {
                        idFormulario,
                        titulo,
                        listaTextos: textos,
                        listaVariaveis: variaveis,
                        erro,
                    };
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.find('.erro').exists()).toBeFalsy();
            expect(sut.emitted()).toHaveProperty('atualizou');
            expect(sut.emitted('atualizou')).toHaveLength(1);
            const evento = sut.emitted('atualizou');
            if (!evento) {
                throw new Error('array de eventos não contém objeto');
            }
            const argumento = evento[0] as any;
            const retorno = argumento[0] as OpcaoEditavel;
            expect(retorno).toBeInstanceOf(OpcaoEditavelDummy);
        });
    });
});
