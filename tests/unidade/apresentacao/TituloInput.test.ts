import { mount } from '@vue/test-utils';
import { Titulo } from '@/dominio/editor/Titulo';
import {
    TituloFactoryLancaErroStub,
    TituloFactorySucessoStub,
    TituloFactoryDummy,
} from '@/tests/dubles/dominio/editor/TituloFactoryDubles';
import TituloInputVue from '@/apresentacao/telas/editor/comum/TituloInput.vue';

describe('TituloInput', () => {
    describe('tem titulo como parâmetro', () => {
        test('exibe o titulo se o parâmetro for fornecido', () => {
            const tituloFactoryDummy = new TituloFactoryDummy();
            const sut = mount(TituloInputVue, {
                global: {
                    provide: {
                        tituloFactory: tituloFactoryDummy,
                    },
                },
                props: { titulo: new Titulo('teste') },
            });
            expect(sut.get('input').element.value).toBe('teste');
        });
        test('exibe o titulo em branco se o parâmetro não fornecido', () => {
            const tituloFactoryDummy = new TituloFactoryDummy();
            const sut = mount(TituloInputVue, {
                global: {
                    provide: {
                        tituloFactory: tituloFactoryDummy,
                    },
                },
            });
            expect(sut.get('input').element.value).toBe('');
        });
    });

    describe('ao digitar um título', () => {
        describe('exibe mensagem se ocorrer um  erro', () => {
            test('se ocorrer um ErroDeCriacaoDeTitulo', async () => {
                const textoDoErro = 'Erro fake';
                const tituloFactoryStub = new TituloFactoryLancaErroStub(
                    textoDoErro,
                );
                const sut = mount(TituloInputVue, {
                    global: { provide: { tituloFactory: tituloFactoryStub } },
                });
                expect(sut.find('.erro').exists()).toBeFalsy();
                await sut.find('input').trigger('focusout');
                expect(sut.find('.erro').exists()).toBeTruthy();
                expect(sut.find('.erro').text()).toBe(textoDoErro);
            });
        });
        describe('emite o evento digitou', () => {
            test('com um objeto Título se digitado um texto', async () => {
                const tituloFactoryStub = new TituloFactorySucessoStub();
                const sut = mount(TituloInputVue, {
                    global: { provide: { tituloFactory: tituloFactoryStub } },
                });
                await sut.find('input').setValue('teste');
                await sut.find('input').trigger('focusout');
                expect(sut.emitted()).toHaveProperty('digitou');
                expect(sut.emitted('digitou')).toHaveLength(1);
                const evento = sut.emitted('digitou');
                if (!evento) {
                    throw new Error('array de eventos não contém objeto');
                }
                const argumento = evento[0] as any;
                expect(argumento[0]).toBeInstanceOf(Titulo);
            });
            test('com valor nulo se não digitado nenhum texto', async () => {
                const textoDoErro = 'Erro fake';
                const tituloFactoryStub = new TituloFactoryLancaErroStub(
                    textoDoErro,
                );
                const sut = mount(TituloInputVue, {
                    global: { provide: { tituloFactory: tituloFactoryStub } },
                });
                await sut.find('input').setValue('');
                await sut.find('input').trigger('focusout');
                expect(sut.emitted()).toHaveProperty('digitou');
                expect(sut.emitted('digitou')).toHaveLength(1);
                const evento = sut.emitted('digitou');
                if (!evento) {
                    throw new Error('array de eventos não contém objeto');
                }
                const argumento = evento[0] as any;
                expect(argumento[0]).toBeNull();
            });
        });
    });
});
