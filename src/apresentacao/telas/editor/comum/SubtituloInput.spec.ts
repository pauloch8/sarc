import SubtituloInputVue from './SubtituloInput.vue';
import { Subtitulo } from '@/dominio/comum/Subtitulo';
import {
    SubtituloFactoryDummy,
    SubtituloFactoryErroStub,
    SubtituloFactorySucessoStub,
} from '@/dominio/comum/SubtituloFactory.dubles';
import { mount } from '@vue/test-utils';

describe('SubtituloInput', () => {
    test('inicia com o texto em branco se não for iniciado com um subtítulo existente', async () => {
        const factoryDummy = new SubtituloFactoryDummy();
        const sut = mount(SubtituloInputVue, {
            global: { provide: { subtituloFactory: factoryDummy } },
        });
        expect(sut.get('textarea').element.value).toBe('');
    });
    test('inicia com o texto do subtitulo se for iniciado com um subtítulo existente', async () => {
        const factoryDummy = new SubtituloFactoryDummy();
        const subtituloFake = new Subtitulo('teste');
        const sut = mount(SubtituloInputVue, {
            global: { provide: { subtituloFactory: factoryDummy } },
            props: {
                subtitulo: subtituloFake,
            },
        });
        expect(sut.get('textarea').element.value).toBe('teste');
    });
    describe('ao digitar um subtítulo', () => {
        test('exibe mensagem se ocorrer um erro', async () => {
            const textoDoErro = 'Erro fake';
            const subtituloFactoryStub = new SubtituloFactoryErroStub(
                textoDoErro,
            );
            const sut = mount(SubtituloInputVue, {
                global: { provide: { subtituloFactory: subtituloFactoryStub } },
            });
            expect(sut.find('.erro').exists()).toBeFalsy();
            await sut.find('textarea').setValue('ab');
            await sut.find('textarea').trigger('focusout');
            expect(sut.find('.erro').exists()).toBeTruthy();
            expect(sut.find('.erro').text()).toBe(textoDoErro);
        });
        describe('emite o evento digitou', () => {
            test('com um objeto Subtítulo se digitado um texto', async () => {
                const subtituloFactoryStub = new SubtituloFactorySucessoStub();
                const sut = mount(SubtituloInputVue, {
                    global: {
                        provide: { subtituloFactory: subtituloFactoryStub },
                    },
                });
                await sut.find('textarea').setValue('teste');
                await sut.find('textarea').trigger('focusout');
                expect(sut.emitted()).toHaveProperty('digitou');
                expect(sut.emitted('digitou')).toHaveLength(1);
                const evento = sut.emitted('digitou');
                if (!evento) {
                    throw new Error('array de eventos não contém objeto');
                }
                const argumento = evento[0] as any;
                expect(argumento[0]).toBeInstanceOf(Subtitulo);
            });
            test('com valor nulo se não digitado nenhum texto', async () => {
                const subtituloFactoryDummy = new SubtituloFactoryDummy();
                const sut = mount(SubtituloInputVue, {
                    global: {
                        provide: { subtituloFactory: subtituloFactoryDummy },
                    },
                });
                await sut.find('textarea').setValue('');
                await sut.find('textarea').trigger('focusout');
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
