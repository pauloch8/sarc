import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { Titulo } from '@/dominio/editor/Titulo';
import { mount } from '@vue/test-utils';
import IdFormularioInput from '@/apresentacao/telas/editor/IdFormularioInput.vue';
import {
    IdFormularioFactorySucessoDummy,
    IdFormularioFactorySucessoStub,
} from '@/tests/dubles/dominio/editor/IdFormularioFactoryDubles';

describe('IdFormularioInput', () => {
    describe('se fornecido um titulo como props', () => {
        test('exibe o id criado do título', async () => {
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
    });
    describe('se fornecido um valor nulo como props', () => {
        test('exibe uma string vazia', async () => {
            const factoryStub = new IdFormularioFactorySucessoDummy();
            const sut = mount(IdFormularioInput, {
                global: { provide: { idFormularioFactory: factoryStub } },
            });
            const actual = sut.get('.idExibido').text();
            const expected = '';
            expect(actual).toBe(expected);
        });
    });
});
