import TextoEdicaoVue from '@/apresentacao/telas/editor/questoes/questao-opcao/opcao/texto/TextoEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import { TextoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { mount } from '@vue/test-utils';
import {
    TextoEditavelFactoryDummy,
    TextoEditavelFactoryErroDesconhecidoStub,
    TextoEditavelFactoryErroInconsistenciasNaValidacaoStub,
    TextoEditavelFactorySucessoStub,
} from '@/tests/dubles/dominio/editor/questoes/TextoEditavelFactoryDubles';
import {
    TextoEditavelDummy,
    TextoEditavelErroStub,
} from '@/tests/dubles/dominio/editor/questoes/TextoEditavelDubles';
import { IdFormularioDummy } from '@/tests/dubles/dominio/editor/comum/IdFormularioDubles';
import { TituloDummy } from '@/tests/dubles/dominio/editor/comum/TituloDubles';
import { TextoModeloDummy } from '@/tests/dubles/dominio/editor/comum/TextoModeloDubles';

describe('TextoEdicao', () => {
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
            expect(sut.find('.erro').text()).toBe(
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
            expect(sut.find('.erro').exists()).toBeFalsy();
            expect(sut.emitted()).toHaveProperty('criou');
            expect(sut.emitted('criou')).toHaveLength(1);
            const evento = sut.emitted('criou') as unknown[][];
            const argumento = evento[0] as any;
            expect(argumento[0]).toBeInstanceOf(TextoEditavelDummy);
        });
    });
    describe('ao editar um Texto existente', () => {
        test('exibe lista de erros se ocorrer um erro', async () => {
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
            expect(sut.find('.erro').exists()).toBeTruthy();
            expect(sut.find('.erro').text()).toContain('id');
            expect(sut.find('.erro').text()).toContain('titulo');
            expect(sut.find('.erro').text()).toContain('texto-modelo');
        });
    });
});
