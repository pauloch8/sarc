import { mount } from '@vue/test-utils';
import TipoVariavelSelecaoVue from '@/apresentacao/telas/editor/questoes/questao-opcao/opcao/variavel/TipoVariavelSelecao.vue';
import {
    TipoVariavelRepositorySucessoStub,
    TipoVariavelIDFake,
} from '@/tests/dubles/dominio/editor/questoes/TipoVariavelDubles';

describe('TipoVariavelSelecao', () => {
    test('selecionar um item emite o evento "selecionou"', async () => {
        const tipoVariavelRepository = new TipoVariavelRepositorySucessoStub();
        const sut = mount(TipoVariavelSelecaoVue, {
            global: {
                provide: {
                    tipoVariavelRepository,
                },
            },
        });
        await sut.find('select').setValue('2');
        expect(sut.emitted()).toHaveProperty('selecionou');
        expect(sut.emitted('selecionou')).toHaveLength(1);
        const evento = sut.emitted('selecionou') as unknown[][];
        const argumento = evento[0] as any;
        expect(argumento[0]).toBeInstanceOf(TipoVariavelIDFake);
    });
    test('selecionar nunhum valor retorna null', async () => {
        const tipoVariavelRepository = new TipoVariavelRepositorySucessoStub();
        const sut = mount(TipoVariavelSelecaoVue, {
            global: {
                provide: {
                    tipoVariavelRepository,
                },
            },
        });
        await sut.find('select').setValue('1');
        await sut.find('select').setValue('');
        expect(sut.emitted()).toHaveProperty('selecionou');
        expect(sut.emitted('selecionou')).toHaveLength(2);
        const evento = sut.emitted('selecionou') as unknown[][];
        const argumento = evento[1] as any;
        expect(argumento[0]).toBeNull();
    });
});