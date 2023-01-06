import OpcaoEdicaoVue from '@/apresentacao/telas/editor/questoes/opcao/OpcaoEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/questoes/comum/BotoesSalvarCancelar.vue';
import {
    OpcaoEditavelFactoryErroOpcaoInvalidaStub,
    OpcaoEditavelFactoryErroDesconhecidoStub,
    OpcaoEditavelFactorySucessoStub,
    OpcaoEditavelFactoryDummy,
} from '@/tests/dubles/dominio/editor/OpcaoEditavelFactoryDubles';
import { mount } from '@vue/test-utils';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { Titulo } from '@/dominio/editor/Titulo';
import {
    OpcaoEditavelDummy,
    OpcaoEditavelErroStub,
} from '@/tests/dubles/dominio/editor/OpcaoEditavelDubles';
import { OpcaoEditavel } from '@/dominio/editor/OpcaoEditavel';

describe('OpcaoEdicao', () => {
    describe('Salvar', () => {
        describe('se não fornecido uma questão por props', () => {
            describe('cria um novo objeto de Questão', () => {
                test('exibe erro e lista de inconsistências se for lançado erro de Quetão Inválida na criação', async () => {
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
                        props: {
                            indice: undefined,
                        },
                        data() {
                            const idFormulario = undefined;
                            const titulo = undefined;
                            const erro = '';
                            return {
                                idFormulario,
                                titulo,
                                erro,
                            };
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
                        props: {
                            indice: undefined,
                        },
                        data() {
                            const idFormulario = undefined;
                            const titulo = undefined;
                            const erro = '';
                            return {
                                idFormulario,
                                titulo,
                                erro,
                            };
                        },
                    });
                    await sut.find('.botaoSalvar').trigger('click');
                    expect(sut.find('.erro').exists()).toBeTruthy();
                    expect(sut.find('.erro').text()).toBe(
                        'Ocorreu um erro desconhecido',
                    );
                });
                test('emite um evento "criou" com um objeto de OpcaoEditavel', async () => {
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
                            const erro = '';
                            return {
                                idFormulario,
                                titulo,
                                erro,
                            };
                        },
                    });
                    await sut.find('.botaoSalvar').trigger('click');
                    expect(sut.find('.erro').exists()).toBeFalsy();
                    expect(sut.emitted()).toHaveProperty('criou');
                    expect(sut.emitted('criou')).toHaveLength(1);
                    const evento = sut.emitted('criou');
                    if (!evento) {
                        throw new Error('array de eventos não contém objeto');
                    }
                    const argumento = evento[0] as any;
                    expect(argumento[0]).toBeInstanceOf(OpcaoEditavelDummy);
                });
            });
        });
        describe('se fornecida uma questão por props', () => {
            test('exibe lista de erros se ocorrer um erro na edição do objeto', async () => {
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
                    data() {
                        const idFormulario = undefined;
                        const titulo = undefined;
                        const erro = '';
                        return {
                            idFormulario,
                            titulo,
                            erro,
                        };
                    },
                });
                await sut.find('.botaoSalvar').trigger('click');
                expect(sut.find('.erro').exists()).toBeTruthy();
                expect(sut.find('.erro').text()).toContain(opcaoStub.erros.id);
                expect(sut.find('.erro').text()).toContain(
                    opcaoStub.erros.titulo,
                );
                // expect(sut.find('.erro').text()).toContain(
                //     opcaoStub.erros.textos,
                // );
                // expect(sut.find('.erro').text()).toContain(
                //     opcaoStub.erros.variaveis,
                // );
            });
            test('emite um evento "atualizou" com um objeto de OpcaoEditavel', async () => {
                const opcaoEditavelFactory = new OpcaoEditavelFactoryDummy();
                const opcao =
                    new OpcaoEditavelDummy() as unknown as OpcaoEditavel;
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
                        const idFormulario = new IdFormulario('id-editado');
                        const titulo = new Titulo('titulo-editado');
                        const erro = '';
                        return {
                            idFormulario,
                            titulo,
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
});
