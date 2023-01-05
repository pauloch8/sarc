import QuestaoEdicaoVue from '@/apresentacao/telas/editor/questoes/questao/QuestaoEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/questoes/comum/BotoesSalvarCancelar.vue';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { Titulo } from '@/dominio/editor/Titulo';
import { mount } from '@vue/test-utils';
import {
    QuestaoEditavelFactoryDummy,
    QuestaoEditavelFactorySucessoStub,
    QuestaoEditavelFactoryErroStub,
    QuestaoEditavelDummy,
    QuestaoEditavelErroStub,
} from '@/tests/dubles/dominio/editor/QuestaoEditavelDubles';

describe('QuestaoEdicao', () => {
    describe('Salvar', () => {
        describe('se não fornecido uma questão por props', () => {
            test('exibe erro se ocorrer um erro na criação do objeto', async () => {
                const factory = new QuestaoEditavelFactoryErroStub();
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
                expect(sut.find('.erro').text()).toBe(factory.mensagemDeErro);
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
        describe('se fornecida uma questão por props', () => {
            test('exibe erro se ocorrer um erro na edição do objeto', async () => {
                const factory = new QuestaoEditavelFactoryDummy();
                const questao =
                    new QuestaoEditavelErroStub() as unknown as QuestaoEditavel;
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
                expect(sut.find('.erro').text()).toBe(
                    QuestaoEditavelErroStub.mensagemDeErro,
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
