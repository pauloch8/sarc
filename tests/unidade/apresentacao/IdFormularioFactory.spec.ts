import IdFormularioInput from '@/apresentacao/telas/editor/comum/IdFormularioFactory.vue';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { Titulo } from '@/dominio/comum/Titulo';
import { mount } from '@vue/test-utils';
import {
    IdFormularioFactoryDummy,
    IdFormularioFactorySucessoStub,
} from '@/tests/dubles/dominio/comum/IdFormularioFactoryDubles';

describe('IdFormularioFactory', () => {
    describe('quando recebe um título', () => {
        test('exibe o id criado', () => {
            const tituloString = 'teste';
            const retorno = new IdFormulario(tituloString);
            const titulo = new Titulo(tituloString);
            const factoryStub = new IdFormularioFactorySucessoStub(retorno);
            const sut = mount(IdFormularioInput, {
                global: { provide: { idFormularioFactory: factoryStub } },
                props: { titulo },
            });
            const actual = sut.get('.idExibido').text();
            const expected = tituloString;
            expect(actual).toBe(expected);
        });
        test('emite um evento gerouId com um objeto ID', () => {
            const tituloString = 'teste';
            const retorno = new IdFormulario(tituloString);
            const titulo = new Titulo(tituloString);
            const factoryStub = new IdFormularioFactorySucessoStub(retorno);
            const sut = mount(IdFormularioInput, {
                global: { provide: { idFormularioFactory: factoryStub } },
                props: { titulo },
            });
            const nomeDoEvento = 'gerouId';
            expect(sut.emitted()).toHaveProperty(nomeDoEvento);
            expect(sut.emitted(nomeDoEvento)).toHaveLength(1);
            const evento = sut.emitted(nomeDoEvento) as unknown[][];
            const argumento = evento[0] as any;
            expect(argumento[0]).toBeInstanceOf(IdFormulario);
            expect(argumento[0].toString()).toBe(tituloString);
        });
    });

    describe('se não fornecido um título', () => {
        test('exibe um texto vazio', () => {
            const factoryStub = new IdFormularioFactoryDummy();
            const sut = mount(IdFormularioInput, {
                global: { provide: { idFormularioFactory: factoryStub } },
            });
            const actual = sut.get('.idExibido').text();
            const expected = '';
            expect(actual).toBe(expected);
        });
        test('emite um evento gerouId com valor null', () => {
            const factoryStub = new IdFormularioFactoryDummy();
            const sut = mount(IdFormularioInput, {
                global: { provide: { idFormularioFactory: factoryStub } },
            });
            const nomeDoEvento = 'gerouId';
            expect(sut.emitted()).toHaveProperty(nomeDoEvento);
            expect(sut.emitted(nomeDoEvento)).toHaveLength(1);
            const evento = sut.emitted(nomeDoEvento) as unknown[][];
            const argumento = evento[0] as any;
            expect(argumento[0]).toBeNull();
        });
    });
});
