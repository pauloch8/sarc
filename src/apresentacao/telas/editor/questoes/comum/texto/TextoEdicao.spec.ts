import TextoEdicaoVue from './TextoEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { TextoEditavel } from '@/dominio/editor/questoes/comum/texto/TextoEditavel';

import { IdFormularioDummy } from '@/dominio/comum/IdFormulario.dubles';
import { TituloDummy } from '@/dominio/comum/Titulo.dubles';
import {
    TextoModeloDummy,
    TextoModeloRetornaEscapadoresInjetadosStub,
} from '@/dominio/comum/TextoModelo.dubles';

import { ListaDeVariaveisEditavelDummy } from '@/dominio/editor/questoes/comum/variavel/VariavelEditavel.dubles';
import {
    criarEscapadoresDeVariavelFake,
    EscapadorDeVariavelFake,
} from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel.dubles';
import {
    TextoEditavelFactoryDummy,
    TextoEditavelFactoryErroDesconhecidoStub,
    TextoEditavelFactoryErroInconsistenciasNaValidacaoStub,
    TextoEditavelFactorySucessoStub,
} from '@/dominio/editor/questoes/comum/texto/TextoEditavelFactory.dubles';
import { SubtituloDummy } from '@/dominio/comum/Subtitulo.dubles';
import {
    TextoEditavelDummy,
    TextoEditavelEditaComSucessoMock,
    TextoEditavelErroStub,
} from '@/dominio/editor/questoes/comum/texto/TextoEditavel.dubles';

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
