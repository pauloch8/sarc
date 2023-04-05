import { mount, shallowMount } from '@vue/test-utils';
import TextoEdicaoVue from '@/apresentacao/telas/editor/questoes/comum/texto/TextoEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import { TextoEditavel } from '@/dominio/editor/questoes/comum/texto/TextoEditavel';
import {
    TextoEditavelFactoryDummy,
    TextoEditavelFactoryErroDesconhecidoStub,
    TextoEditavelFactoryErroInconsistenciasNaValidacaoStub,
    TextoEditavelFactorySucessoStub,
} from '@/tests/dubles/dominio/editor/questoes/TextoEditavelFactoryDubles';
import {
    TextoEditavelDummy,
    TextoEditavelEditaComSucessoMock,
    TextoEditavelErroStub,
} from '@/tests/dubles/dominio/editor/questoes/TextoEditavelDubles';
import { IdFormularioDummy } from '@/tests/dubles/dominio/comum/IdFormularioDubles';
import { TituloDummy } from '@/tests/dubles/dominio/comum/TituloDubles';
import {
    TextoModeloDummy,
    TextoModeloRetornaEscapadoresInjetadosStub,
} from '@/tests/dubles/dominio/comum/TextoModeloDubles';
import { SubtituloDummy } from '@/tests/dubles/dominio/comum/SubtituloDubles';
import { ListaDeVariaveisEditavelDummy } from '@/tests/dubles/dominio/editor/questoes/VariavelEditavelDubles';
import {
    criarEscapadoresDeVariavelFake,
    EscapadorDeVariavelFake,
} from '@/tests/dubles/dominio/comum/escapador/variavel/EscapadorDeVariavelDubles';

describe('TextoEdicao', () => {
    test('exibe uma lista dos escapadores de variáveis se existir', () => {
        const textoEditavelFactory = new TextoEditavelFactoryDummy();
        const escapadoresVariaveis = [
            new EscapadorDeVariavelFake('${escapador1}'),
            new EscapadorDeVariavelFake('${escapador2}'),
        ];
        const ListaDeEscapadores = {};
        const sut = mount(TextoEdicaoVue, {
            global: {
                provide: {
                    textoEditavelFactory,

                    escapadoresVariaveis,
                },
            },
            components: {
                ListaDeEscapadores,
            },
        });
        expect(sut.findComponent(ListaDeEscapadores).exists()).toBeTruthy();
    });
    test('não exibe uma lista dos escapadores de variáveis se não existir', () => {
        const textoEditavelFactory = new TextoEditavelFactoryDummy();
        const ListaDeEscapadores = {};

        const sut = mount(TextoEdicaoVue, {
            global: {
                provide: {
                    textoEditavelFactory,
                },
            },
            components: {
                ListaDeEscapadores,
            },
        });
        expect(sut.findComponent(ListaDeEscapadores).exists()).toBeFalsy();
    });
    test('calcula os escapadores inexistentes escritos', () => {
        const escapadoresExistentes = criarEscapadoresDeVariavelFake([
            'escapador1',
            'escapador2',
        ]);
        const escapadoresInexistentes = criarEscapadoresDeVariavelFake([
            'escapador3',
            'escapador4',
        ]);
        const textoModelo = new TextoModeloRetornaEscapadoresInjetadosStub([
            ...escapadoresExistentes,
            ...escapadoresInexistentes,
        ]);

        const sut = shallowMount(TextoEdicaoVue, {
            global: {
                provide: {
                    textoEditavelFactory: new TextoEditavelFactoryDummy(),
                    escapadoresVariaveis: escapadoresExistentes,
                },
            },
            components: {
                BotoesSalvarCancelar,
            },
            props: {
                indice: 0,
            },
            data() {
                return {
                    textoModelo,
                    idFormulario: new IdFormularioDummy(),
                    titulo: new TituloDummy(),
                    subtitulo: new SubtituloDummy(),
                    erro: '',
                };
            },
        });
        expect(sut.vm.escapadoresInexistentes).not.toContainEqual(
            escapadoresExistentes[0],
        );
        expect(sut.vm.escapadoresInexistentes).not.toContainEqual(
            escapadoresExistentes[1],
        );
        expect(sut.vm.escapadoresInexistentes).toContainEqual(
            escapadoresInexistentes[0],
        );
        expect(sut.vm.escapadoresInexistentes).toContainEqual(
            escapadoresInexistentes[1],
        );
    });
    describe('ao criar um novo TextoEdicao', () => {
        test('exibe erro e lista de inconsistências se for lançado erro de validação', async () => {
            const textoEditavelFactory =
                new TextoEditavelFactoryErroInconsistenciasNaValidacaoStub();
            const sut = mount(TextoEdicaoVue, {
                global: {
                    provide: {
                        textoEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    TextoModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    indice: 0,
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.find('.erro').exists()).toBeTruthy();
            expect(sut.find('.erro').text()).toContain(
                textoEditavelFactory.inconsistencias[0],
            );
        });
        test('exibe mensagem de erro desconhecido se ocorrer outro tipo de erro na criação', async () => {
            const textoEditavelFactory =
                new TextoEditavelFactoryErroDesconhecidoStub();
            const listaVariaveis = new ListaDeVariaveisEditavelDummy();
            const sut = mount(TextoEdicaoVue, {
                global: {
                    provide: {
                        textoEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    TextoModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    indice: 0,
                    listaVariaveis,
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.find('.erro').exists()).toBeTruthy();
            expect(sut.find('.erro').text()).toContain(
                'Ocorreu um erro desconhecido',
            );
        });
        test('emite um evento "criou" com um objeto', async () => {
            const textoEditavelFactory = new TextoEditavelFactorySucessoStub();
            const sut = mount(TextoEdicaoVue, {
                global: {
                    provide: {
                        textoEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    TextoModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    indice: 0,
                },
                data() {
                    const id = new IdFormularioDummy();
                    const titulo = new TituloDummy();
                    const textoModelo = new TextoModeloDummy();
                    return {
                        id,
                        titulo,
                        textoModelo,
                    };
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.emitted()).toHaveProperty('criou');
            expect(sut.emitted('criou')).toHaveLength(1);
            const evento = sut.emitted('criou') as unknown[][];
            const argumento = evento[0] as any;
            expect(argumento[0]).toBeInstanceOf(TextoEditavelDummy);
        });
    });
    describe('ao editar um Texto existente', () => {
        // TODO: Corrigir teste
        // aparentemente o dummy retornado está num estado que representaria um erro
        // que não deveria acontecer no estado da tela testada
        test.skip('exibe lista de erros se ocorrer um erro', async () => {
            const textoEditavelFactory = new TextoEditavelFactoryDummy();
            const texto =
                new TextoEditavelErroStub() as unknown as TextoEditavel;
            const sut = mount(TextoEdicaoVue, {
                global: {
                    provide: {
                        textoEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    TextoModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    texto,
                    indice: 0,
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.find('.erro.inconsistencias').exists()).toBeTruthy();
            expect(sut.find('.erro.inconsistencias').text()).toContain('id');
            expect(sut.find('.erro.inconsistencias').text()).toContain(
                'titulo',
            );
            expect(sut.find('.erro.inconsistencias').text()).toContain(
                'texto-modelo',
            );
        });
        test('emite um evento "atualizou" com um objeto', async () => {
            const textoEditavelFactory = new TextoEditavelFactoryDummy();
            const texto =
                new TextoEditavelEditaComSucessoMock() as unknown as TextoEditavel;
            const sut = mount(TextoEdicaoVue, {
                global: {
                    provide: {
                        textoEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    TextoModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    texto,
                    indice: 0,
                },
                data() {
                    return {
                        idFormulario: new IdFormularioDummy(),
                        titulo: new TituloDummy(),
                        subtitulo: new SubtituloDummy(),
                        erro: '',
                    };
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.emitted()).toHaveProperty('atualizou');
            expect(sut.emitted('atualizou')).toHaveLength(1);
            const evento = sut.emitted('atualizou') as unknown[][];
            const argumento = evento[0] as any;
            const retorno = argumento[0] as TextoEditavel;
            expect(retorno).toBeInstanceOf(TextoEditavelEditaComSucessoMock);
        });
    });
});
