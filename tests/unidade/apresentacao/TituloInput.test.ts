import { mount } from '@vue/test-utils';
import { Titulo } from '@/dominio/editor/Titulo';
import {
    TituloFactoryLancaErroStub,
    TituloFactorySucessoStub,
} from '@/tests/dubles/dominio/editor/TituloFactoryDubles';
import TituloInputVue from '@/apresentacao/telas/editor/TituloInput.vue';

describe('TituloInput', () => {
    describe('exibe mensagem de erro', () => {
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

    describe('emite o evento digitouTitulo', () => {
        test('com um objeto Título se digitado um texto', async () => {
            const tituloFactoryStub = new TituloFactorySucessoStub();
            const sut = mount(TituloInputVue, {
                global: { provide: { tituloFactory: tituloFactoryStub } },
            });
            await sut.find('input').setValue('teste');
            await sut.find('input').trigger('focusout');
            expect(sut.emitted()).toHaveProperty('digitouTitulo');
            expect(sut.emitted('digitouTitulo')).toHaveLength(1);
            const evento = sut.emitted('digitouTitulo');
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
            expect(sut.emitted()).toHaveProperty('digitouTitulo');
            expect(sut.emitted('digitouTitulo')).toHaveLength(1);
            const evento = sut.emitted('digitouTitulo');
            if (!evento) {
                throw new Error('array de eventos não contém objeto');
            }
            const argumento = evento[0] as any;
            expect(argumento[0]).toBeNull();
        });
    });
});
