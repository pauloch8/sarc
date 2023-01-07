import QuestaoEdicaoVue from '@/apresentacao/telas/editor/questoes/questao-opcao/QuestaoEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import { IdFormulario } from '@/dominio/editor/comum/IdFormulario';
import { QuestaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavel';
import { Subtitulo } from '@/dominio/editor/comum/Subtitulo';
import { Titulo } from '@/dominio/editor/comum/Titulo';
import { mount } from '@vue/test-utils';
import {
    QuestaoEditavelDummy,
    QuestaoEditavelErroStub,
} from '@/tests/dubles/dominio/editor/QuestaoEditavelDubles';
import {
    QuestaoEditavelFactoryDummy,
    QuestaoEditavelFactorySucessoStub,
    QuestaoEditavelFactoryErroDesconhecidoStub,
    QuestaoEditavelFactoryErroQuestaoInvalidaStub,
} from '@/tests/dubles/dominio/editor/QuestaoEditavelFactoryDubles';

describe('QuestaoEdicao', () => {
    describe('Salvar', () => {
        describe('se não fornecido uma questão por props', () => {
            describe('cria um novo objeto de Questão', () => {
                test('exibe erro e lista de inconsistências se for lançado erro de Quetão Inválida na criação', async () => {
                    const questaoEditavelFactory =
                        new QuestaoEditavelFactoryErroQuestaoInvalidaStub();
                    const sut = mount(QuestaoEdicaoVue, {
                        global: {
                            provide: {
                                questaoEditavelFactory,
                            },
                        },
                        components: {
                            IdFormularioInput: {},
                            TituloInput: {},
                            SubtituloInput: {},
                            ListaOpcoes: {},
                            BotoesSalvarCancelar,
                        },
                        props: {
                            indice: undefined,
                        },
                        data() {
                            const idFormulario = undefined;
                            const titulo = undefined;
                            const subtitulo = undefined;
                            const erro = '';
                            return {
                                idFormulario,
                                titulo,
                                subtitulo,
                                erro,
                            };
                        },
                    });
                    await sut.find('.botaoSalvar').trigger('click');
                    expect(sut.find('.erro').exists()).toBeTruthy();
                    expect(sut.find('.erro').text()).toContain(
                        questaoEditavelFactory.inconsistencias[0],
                    );
                    expect(sut.find('.erro').text()).toContain(
                        questaoEditavelFactory.inconsistencias[1],
                    );
                    expect(sut.find('.erro').text()).toContain(
                        questaoEditavelFactory.inconsistencias[2],
                    );
                });
                test('exibe mensagem de erro desconhecido se ocorrer outro tipo de erro na criação', async () => {
                    const factory =
                        new QuestaoEditavelFactoryErroDesconhecidoStub();
                    const sut = mount(QuestaoEdicaoVue, {
                        global: {
                            provide: {
                                questaoEditavelFactory: factory,
                            },
                        },
                        components: {
                            IdFormularioInput: {},
                            TituloInput: {},
                            SubtituloInput: {},
                            ListaOpcoes: {},
                            BotoesSalvarCancelar,
                        },
                        props: {
                            indice: undefined,
                        },
                        data() {
                            const idFormulario = undefined;
                            const titulo = undefined;
                            const subtitulo = undefined;
                            const erro = '';
                            return {
                                idFormulario,
                                titulo,
                                subtitulo,
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
                test('emite um evento "criou" com um objeto de QuestaoEditavel', async () => {
                    const factory = new QuestaoEditavelFactorySucessoStub();
                    const sut = mount(QuestaoEdicaoVue, {
                        global: {
                            provide: {
                                questaoEditavelFactory: factory,
                            },
                        },
                        components: {
                            IdFormularioInput: {},
                            TituloInput: {},
                            SubtituloInput: {},
                            ListaOpcoes: {},
                            BotoesSalvarCancelar,
                        },
                        props: {
                            indice: 2,
                        },
                        data() {
                            const idFormulario = new IdFormulario('titulo');
                            const titulo = new Titulo('teste');
                            const subtitulo = new Subtitulo('teste');
                            const erro = '';
                            return {
                                idFormulario,
                                titulo,
                                subtitulo,
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
                    expect(argumento[0]).toBeInstanceOf(QuestaoEditavelDummy);
                });
            });
        });
        describe('se fornecida uma questão por props', () => {
            test('exibe lista de erros se ocorrer um erro na edição do objeto', async () => {
                const factory = new QuestaoEditavelFactoryDummy();
                const questaoStub = new QuestaoEditavelErroStub();
                const questao = questaoStub as unknown as QuestaoEditavel;
                const sut = mount(QuestaoEdicaoVue, {
                    global: {
                        provide: {
                            questaoEditavelFactory: factory,
                        },
                    },
                    components: {
                        IdFormularioInput: {},
                        TituloInput: {},
                        SubtituloInput: {},
                        ListaOpcoes: {},
                        BotoesSalvarCancelar,
                    },
                    props: {
                        questao,
                    },
                    data() {
                        const idFormulario = undefined;
                        const titulo = undefined;
                        const subtitulo = undefined;
                        const erro = '';
                        return {
                            idFormulario,
                            titulo,
                            subtitulo,
                            erro,
                        };
                    },
                });
                await sut.find('.botaoSalvar').trigger('click');
                expect(sut.find('.erro').exists()).toBeTruthy();
                expect(sut.find('.erro').text()).toContain(
                    questaoStub.erros.id,
                );
                expect(sut.find('.erro').text()).toContain(
                    questaoStub.erros.titulo,
                );
                expect(sut.find('.erro').text()).toContain(
                    questaoStub.erros.subtitulo,
                );
                expect(sut.find('.erro').text()).toContain(
                    questaoStub.erros.opcoes,
                );
            });
            test('emite um evento "atualizou" com um objeto de QuestaoEditavel', async () => {
                const factory = new QuestaoEditavelFactoryDummy();
                const questao =
                    new QuestaoEditavelDummy() as unknown as QuestaoEditavel;
                const sut = mount(QuestaoEdicaoVue, {
                    global: {
                        provide: {
                            questaoEditavelFactory: factory,
                        },
                    },
                    components: {
                        IdFormularioInput: {},
                        TituloInput: {},
                        SubtituloInput: {},
                        ListaOpcoes: {},
                        BotoesSalvarCancelar,
                    },
                    props: {
                        questao,
                    },
                    data() {
                        const idFormulario = new IdFormulario('id-editado');
                        const titulo = new Titulo('titulo-editado');
                        const subtitulo = new Subtitulo('subtitulo-editado');
                        const erro = '';
                        return {
                            idFormulario,
                            titulo,
                            subtitulo,
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
                const retorno = argumento[0] as QuestaoEditavel;
                expect(retorno).toBeInstanceOf(QuestaoEditavelDummy);
            });
        });
    });
});
