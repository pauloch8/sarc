import QuestaoOpcaoEdicao from './QuestaoOpcaoEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { QuestaoOpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel';
import { Subtitulo } from '@/dominio/comum/Subtitulo';
import { Titulo } from '@/dominio/comum/Titulo';
import { mount } from '@vue/test-utils';
import {
    QuestaoEditavelFactoryDummy,
    QuestaoEditavelFactorySucessoStub,
    QuestaoEditavelFactoryErroDesconhecidoStub,
    QuestaoEditavelFactoryErroQuestaoInvalidaStub,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavelFactory.dubles';
import {
    QuestaoEditavelDummy,
    QuestaoEditavelErroStub,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel.dubles';

describe('QuestaoEdicao', () => {
    describe('ao criar uma nova Questão', () => {
        describe('cria um novo objeto de Questão', () => {
            test('exibe a lista de inconsistências se for lançado erro de Inconsistência na validação', async () => {
                const questaoOpcaoEditavelFactory =
                    new QuestaoEditavelFactoryErroQuestaoInvalidaStub();
                const sut = mount(QuestaoOpcaoEdicao, {
                    global: {
                        provide: {
                            questaoOpcaoEditavelFactory,
                            listaQuestoes: [],
                        },
                    },
                    components: {
                        IdFormularioFactory: {},
                        TituloInput: {},
                        SubtituloInput: {},
                        ListaOpcoes: {},
                        BotoesSalvarCancelar,
                        ValorPadraoSelecao: {},
                    },
                    props: {
                        indice: 0,
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
                    questaoOpcaoEditavelFactory.inconsistencias[0],
                );
                expect(sut.find('.erro').text()).toContain(
                    questaoOpcaoEditavelFactory.inconsistencias[1],
                );
                expect(sut.find('.erro').text()).toContain(
                    questaoOpcaoEditavelFactory.inconsistencias[2],
                );
            });
            test('exibe mensagem de erro desconhecido se ocorrer outro tipo de erro na criação', async () => {
                const questaoOpcaoEditavelFactory =
                    new QuestaoEditavelFactoryErroDesconhecidoStub();
                const sut = mount(QuestaoOpcaoEdicao, {
                    global: {
                        provide: {
                            questaoOpcaoEditavelFactory,
                            listaQuestoes: [],
                        },
                    },
                    components: {
                        IdFormularioFactory: {},
                        TituloInput: {},
                        SubtituloInput: {},
                        ListaOpcoes: {},
                        BotoesSalvarCancelar,
                        ValorPadraoSelecao: {},
                    },
                    props: {
                        indice: 0,
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
                    'Ocorreu um erro desconhecido',
                );
            });
            test('emite um evento "criou" com um objeto', async () => {
                const questaoOpcaoEditavelFactory =
                    new QuestaoEditavelFactorySucessoStub();
                const sut = mount(QuestaoOpcaoEdicao, {
                    global: {
                        provide: {
                            questaoOpcaoEditavelFactory,
                            listaQuestoes: [],
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
    describe('ao editar uma Questao existente', () => {
        test('exibe lista de erros se ocorrer um erro', async () => {
            const questaoOpcaoEditavelFactory =
                new QuestaoEditavelFactoryDummy();
            const listaQuestoes = [new QuestaoEditavelDummy()];
            const questaoStub = new QuestaoEditavelErroStub();
            const questao = questaoStub as unknown as QuestaoOpcaoEditavel;
            const sut = mount(QuestaoOpcaoEdicao, {
                global: {
                    provide: {
                        questaoOpcaoEditavelFactory,
                        listaQuestoes,
                    },
                },
                components: {
                    BotoesSalvarCancelar,
                },
                props: {
                    questao,
                    indice: 0,
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
            expect(sut.find('.erro').text()).toContain(questaoStub.erros.id);
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
        test('emite um evento "atualizou" com um objeto', async () => {
            const questaoOpcaoEditavelFactory =
                new QuestaoEditavelFactoryDummy();
            const listaQuestoes = [new QuestaoEditavelDummy()];
            const questao =
                new QuestaoEditavelDummy() as unknown as QuestaoOpcaoEditavel;
            const sut = mount(QuestaoOpcaoEdicao, {
                global: {
                    provide: {
                        questaoOpcaoEditavelFactory,
                        listaQuestoes,
                    },
                },
                components: {
                    BotoesSalvarCancelar,
                },
                props: {
                    questao,
                    indice: 0,
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
            const retorno = argumento[0] as QuestaoOpcaoEditavel;
            expect(retorno).toBeInstanceOf(QuestaoEditavelDummy);
        });
    });
});
