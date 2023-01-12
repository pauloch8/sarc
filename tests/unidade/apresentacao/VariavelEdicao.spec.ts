import VariavelEdicaoVue from '@/apresentacao/telas/editor/questoes/questao-opcao/opcao/variavel/VariavelEdicao.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import { VariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { mount } from '@vue/test-utils';
import {
    VariavelEditavelFactoryDummy,
    VariavelEditavelFactoryErroDesconhecidoStub,
    VariavelEditavelFactoryErroInconsistenciasNaValidacaoStub,
    VariavelEditavelFactorySucessoStub,
} from '@/tests/dubles/dominio/editor/questoes/VariavelEditavelFactoryDubles';
import {
    VariavelEditavelDummy,
    VariavelEditavelEditaComSucessoMock,
    VariavelEditavelErroStub,
} from '@/tests/dubles/dominio/editor/questoes/VariavelEditavelDubles';
import { IdFormularioDummy } from '@/tests/dubles/dominio/comum/IdFormularioDubles';
import { TituloDummy } from '@/tests/dubles/dominio/comum/TituloDubles';
import { SubtituloDummy } from '@/tests/dubles/dominio/comum/SubtituloDubles';

describe('VariavelEdicao', () => {
    describe('ao criar um novo VariavelEdicao', () => {
        test('exibe erro e lista de inconsistências se for lançado erro de validação', async () => {
            const variavelEditavelFactory =
                new VariavelEditavelFactoryErroInconsistenciasNaValidacaoStub();
            const sut = mount(VariavelEdicaoVue, {
                global: {
                    provide: {
                        variavelEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    VariavelModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    indice: 0,
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.find('.erro').exists()).toBeTruthy();
            expect(sut.find('.erro').text()).toContain(
                variavelEditavelFactory.inconsistencias[0],
            );
        });
        test('exibe mensagem de erro desconhecido se ocorrer outro tipo de erro na criação', async () => {
            const variavelEditavelFactory =
                new VariavelEditavelFactoryErroDesconhecidoStub();
            const sut = mount(VariavelEdicaoVue, {
                global: {
                    provide: {
                        variavelEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    VariavelModeloInput: {},
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
            const variavelEditavelFactory =
                new VariavelEditavelFactorySucessoStub();
            const sut = mount(VariavelEdicaoVue, {
                global: {
                    provide: {
                        variavelEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    VariavelModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    indice: 0,
                },
                data() {
                    const id = new IdFormularioDummy();
                    const titulo = new TituloDummy();
                    const tipo = 'dummy';
                    return {
                        id,
                        titulo,
                        tipo,
                    };
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.find('.erro').exists()).toBeFalsy();
            expect(sut.emitted()).toHaveProperty('criou');
            expect(sut.emitted('criou')).toHaveLength(1);
            const evento = sut.emitted('criou') as unknown[][];
            const argumento = evento[0] as any;
            expect(argumento[0]).toBeInstanceOf(VariavelEditavelDummy);
        });
    });
    describe('ao editar um Variavel existente', () => {
        test('exibe lista de erros se ocorrer um erro', async () => {
            const variavelEditavelFactory = new VariavelEditavelFactoryDummy();
            const variavel =
                new VariavelEditavelErroStub() as unknown as VariavelEditavel;
            const sut = mount(VariavelEdicaoVue, {
                global: {
                    provide: {
                        variavelEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    VariavelModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    variavel,
                    indice: 0,
                },
            });
            await sut.find('.botaoSalvar').trigger('click');
            expect(sut.find('.erro').exists()).toBeTruthy();
            expect(sut.find('.erro').text()).toContain('id');
            expect(sut.find('.erro').text()).toContain('titulo');
            expect(sut.find('.erro').text()).toContain('tipo');
        });
        test('emite um evento "atualizou" com um objeto', async () => {
            const variavelEditavelFactory = new VariavelEditavelFactoryDummy();
            const variavel =
                new VariavelEditavelEditaComSucessoMock() as unknown as VariavelEditavel;
            const sut = mount(VariavelEdicaoVue, {
                global: {
                    provide: {
                        variavelEditavelFactory,
                    },
                },
                components: {
                    IdFormularioFactory: {},
                    TituloInput: {},
                    VariavelModeloInput: {},
                    BotoesSalvarCancelar,
                },
                props: {
                    variavel,
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
            expect(sut.find('.erro').exists()).toBeFalsy();
            expect(sut.emitted()).toHaveProperty('atualizou');
            expect(sut.emitted('atualizou')).toHaveLength(1);
            const evento = sut.emitted('atualizou');
            if (!evento) {
                throw new Error('array de eventos não contém objeto');
            }
            const argumento = evento[0] as any;
            const retorno = argumento[0] as VariavelEditavel;
            expect(retorno).toBeInstanceOf(VariavelEditavelEditaComSucessoMock);
        });
    });
});
