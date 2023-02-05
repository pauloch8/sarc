import { mount } from '@vue/test-utils';
import ModeloEdicaoVue from '@/apresentacao/telas/editor/modelos/ModeloEdicao.vue';
import ListaDeEscapadores from '@/apresentacao/telas/editor/comum/EscapadoresDisponiveis.vue';
import BotoesSalvarCancelar from '@/apresentacao/telas/editor/comum/BotoesSalvarCancelar.vue';
import { TextoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
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
import { TextoModeloDummy } from '@/tests/dubles/dominio/comum/TextoModeloDubles';
import { SubtituloDummy } from '@/tests/dubles/dominio/comum/SubtituloDubles';
import { ListaDeVariaveisEditavelDummy } from '@/tests/dubles/dominio/editor/questoes/VariavelEditavelDubles';
import { EscapadorDeVariavelFactoryDummy } from '@/tests/dubles/dominio/comum/escapador/variavel/EscapadorDeVariavelFactoryDubles';
import { EscapadorDeVariavelFake } from '@/tests/dubles/dominio/comum/escapador/variavel/EscapadorDeVariavelDubles';

describe('ModeloEdicao', () => {
    test('testaetse', () => {
        expect(9).toBe(9);
    });
    // test('exibe uma lista dos escapadores de variáveis disponíveis', async () => {
    //     const textoEditavelFactory = new TextoEditavelFactoryDummy();
    //     const escapadorDeVariavelFactory =
    //         new EscapadorDeVariavelFactoryDummy();
    //     const escapadoresVariaveis = [
    //         new EscapadorDeVariavelFake('${escapador1}'),
    //         new EscapadorDeVariavelFake('${escapador2}'),
    //     ];
    //     const sut = mount(ModeloEdicaoVue, {
    //         global: {
    //             provide: {
    //                 textoEditavelFactory,
    //                 escapadorDeVariavelFactory,
    //                 escapadoresVariaveis,
    //             },
    //         },
    //         components: {
    //             ListaDeEscapadores,
    //             IdFormularioFactory: {},
    //             TituloInput: {},
    //             TextoModeloInput: {},
    //             BotoesSalvarCancelar,
    //         },
    //     });
    //     expect(sut.find('.escapadoresDisponiveis').text()).toContain(
    //         '${escapador1}',
    //     );
    //     expect(sut.find('.escapadoresDisponiveis').text()).toContain(
    //         '${escapador2}',
    //     );
    // });
    // test('exibe uma lista dos escapadores inexistentes escritos no texto', async () => {
    //     const textoEditavelFactory = new TextoEditavelFactoryDummy();
    //     const escapadorDeVariavelFactory =
    //         new EscapadorDeVariavelFactoryDummy();
    //     const texto =
    //         new TextoEditavelEditaComSucessoMock() as unknown as TextoEditavel;
    //     const sut = mount(ModeloEdicaoVue, {
    //         global: {
    //             provide: {
    //                 textoEditavelFactory,
    //                 escapadorDeVariavelFactory,
    //             },
    //         },
    //         components: {
    //             IdFormularioFactory: {},
    //             TituloInput: {},
    //             TextoModeloInput: {},
    //             BotoesSalvarCancelar,
    //         },
    //         props: {
    //             texto,
    //             indice: 0,
    //         },
    //         data() {
    //             return {
    //                 idFormulario: new IdFormularioDummy(),
    //                 titulo: new TituloDummy(),
    //                 subtitulo: new SubtituloDummy(),
    //                 erro: '',
    //             };
    //         },
    //     });
    //     await sut.find('.botaoSalvar').trigger('click');
    //     expect(sut.find('.erro').exists()).toBeFalsy();
    //     expect(sut.emitted()).toHaveProperty('atualizou');
    //     expect(sut.emitted('atualizou')).toHaveLength(1);
    //     const evento = sut.emitted('atualizou');
    //     if (!evento) {
    //         throw new Error('array de eventos não contém objeto');
    //     }
    //     const argumento = evento[0] as any;
    //     const retorno = argumento[0] as TextoEditavel;
    //     expect(retorno).toBeInstanceOf(TextoEditavelEditaComSucessoMock);
    // });
    // describe('ao criar um novo TextoEdicao', () => {
    //     test('exibe erro e lista de inconsistências se for lançado erro de validação', async () => {
    //         const textoEditavelFactory =
    //             new TextoEditavelFactoryErroInconsistenciasNaValidacaoStub();
    //         const escapadorDeVariavelFactory =
    //             new EscapadorDeVariavelFactoryDummy();
    //         const sut = mount(ModeloEdicaoVue, {
    //             global: {
    //                 provide: {
    //                     textoEditavelFactory,
    //                     escapadorDeVariavelFactory,
    //                 },
    //             },
    //             components: {
    //                 IdFormularioFactory: {},
    //                 TituloInput: {},
    //                 TextoModeloInput: {},
    //                 BotoesSalvarCancelar,
    //             },
    //             props: {
    //                 indice: 0,
    //             },
    //         });
    //         await sut.find('.botaoSalvar').trigger('click');
    //         expect(sut.find('.erro').exists()).toBeTruthy();
    //         expect(sut.find('.erro').text()).toContain(
    //             textoEditavelFactory.inconsistencias[0],
    //         );
    //     });
    //     test('exibe mensagem de erro desconhecido se ocorrer outro tipo de erro na criação', async () => {
    //         const textoEditavelFactory =
    //             new TextoEditavelFactoryErroDesconhecidoStub();
    //         const escapadorDeVariavelFactory =
    //             new EscapadorDeVariavelFactoryDummy();
    //         const listaVariaveis = new ListaDeVariaveisEditavelDummy();
    //         const sut = mount(ModeloEdicaoVue, {
    //             global: {
    //                 provide: {
    //                     textoEditavelFactory,
    //                     escapadorDeVariavelFactory,
    //                 },
    //             },
    //             components: {
    //                 IdFormularioFactory: {},
    //                 TituloInput: {},
    //                 TextoModeloInput: {},
    //                 BotoesSalvarCancelar,
    //             },
    //             props: {
    //                 indice: 0,
    //                 listaVariaveis,
    //             },
    //         });
    //         await sut.find('.botaoSalvar').trigger('click');
    //         expect(sut.find('.erro').exists()).toBeTruthy();
    //         expect(sut.find('.erro').text()).toContain(
    //             'Ocorreu um erro desconhecido',
    //         );
    //     });
    //     test('emite um evento "criou" com um objeto', async () => {
    //         const textoEditavelFactory = new TextoEditavelFactorySucessoStub();
    //         const escapadorDeVariavelFactory =
    //             new EscapadorDeVariavelFactoryDummy();
    //         const sut = mount(ModeloEdicaoVue, {
    //             global: {
    //                 provide: {
    //                     textoEditavelFactory,
    //                     escapadorDeVariavelFactory,
    //                 },
    //             },
    //             components: {
    //                 IdFormularioFactory: {},
    //                 TituloInput: {},
    //                 TextoModeloInput: {},
    //                 BotoesSalvarCancelar,
    //             },
    //             props: {
    //                 indice: 0,
    //             },
    //             data() {
    //                 const id = new IdFormularioDummy();
    //                 const titulo = new TituloDummy();
    //                 const textoModelo = new TextoModeloDummy();
    //                 return {
    //                     id,
    //                     titulo,
    //                     textoModelo,
    //                 };
    //             },
    //         });
    //         await sut.find('.botaoSalvar').trigger('click');
    //         expect(sut.find('.erro').exists()).toBeFalsy();
    //         expect(sut.emitted()).toHaveProperty('criou');
    //         expect(sut.emitted('criou')).toHaveLength(1);
    //         const evento = sut.emitted('criou') as unknown[][];
    //         const argumento = evento[0] as any;
    //         expect(argumento[0]).toBeInstanceOf(TextoEditavelDummy);
    //     });
    // });
    // describe('ao editar um Texto existente', () => {
    //     test('exibe lista de erros se ocorrer um erro', async () => {
    //         const textoEditavelFactory = new TextoEditavelFactoryDummy();
    //         const escapadorDeVariavelFactory =
    //             new EscapadorDeVariavelFactoryDummy();
    //         const texto =
    //             new TextoEditavelErroStub() as unknown as TextoEditavel;
    //         const sut = mount(ModeloEdicaoVue, {
    //             global: {
    //                 provide: {
    //                     textoEditavelFactory,
    //                     escapadorDeVariavelFactory,
    //                 },
    //             },
    //             components: {
    //                 IdFormularioFactory: {},
    //                 TituloInput: {},
    //                 TextoModeloInput: {},
    //                 BotoesSalvarCancelar,
    //             },
    //             props: {
    //                 texto,
    //                 indice: 0,
    //             },
    //         });
    //         await sut.find('.botaoSalvar').trigger('click');
    //         expect(sut.find('.erro').exists()).toBeTruthy();
    //         expect(sut.find('.erro').text()).toContain('id');
    //         expect(sut.find('.erro').text()).toContain('titulo');
    //         expect(sut.find('.erro').text()).toContain('texto-modelo');
    //     });
    //     test('emite um evento "atualizou" com um objeto', async () => {
    //         const textoEditavelFactory = new TextoEditavelFactoryDummy();
    //         const escapadorDeVariavelFactory =
    //             new EscapadorDeVariavelFactoryDummy();
    //         const texto =
    //             new TextoEditavelEditaComSucessoMock() as unknown as TextoEditavel;
    //         const sut = mount(ModeloEdicaoVue, {
    //             global: {
    //                 provide: {
    //                     textoEditavelFactory,
    //                     escapadorDeVariavelFactory,
    //                 },
    //             },
    //             components: {
    //                 IdFormularioFactory: {},
    //                 TituloInput: {},
    //                 TextoModeloInput: {},
    //                 BotoesSalvarCancelar,
    //             },
    //             props: {
    //                 texto,
    //                 indice: 0,
    //             },
    //             data() {
    //                 return {
    //                     idFormulario: new IdFormularioDummy(),
    //                     titulo: new TituloDummy(),
    //                     subtitulo: new SubtituloDummy(),
    //                     erro: '',
    //                 };
    //             },
    //         });
    //         await sut.find('.botaoSalvar').trigger('click');
    //         expect(sut.find('.erro').exists()).toBeFalsy();
    //         expect(sut.emitted()).toHaveProperty('atualizou');
    //         expect(sut.emitted('atualizou')).toHaveLength(1);
    //         const evento = sut.emitted('atualizou');
    //         if (!evento) {
    //             throw new Error('array de eventos não contém objeto');
    //         }
    //         const argumento = evento[0] as any;
    //         const retorno = argumento[0] as TextoEditavel;
    //         expect(retorno).toBeInstanceOf(TextoEditavelEditaComSucessoMock);
    //     });
    // });
});
