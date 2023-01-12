import { VariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { IIdFormulario } from '@/dominio/editor/comum/IdFormulario';
import { ITitulo } from '@/dominio/editor/comum/Titulo';
import {
    TituloDummy,
    TituloToStringStub,
} from '@/tests/dubles/dominio/editor/comum/TituloDubles';
import {
    IdFormularioDummy,
    IdFormularioToStringStub,
} from '@/tests/dubles/dominio/editor/comum/IdFormularioDubles';
import {
    ErroInconsistenciasNaValidacao,
    ErroNaEdicao,
} from '@/dominio/editor/questoes/ItemEditavel';
import { TipoVariavelIDDummy } from '@/tests/dubles/dominio/editor/questoes/TipoVariavelDubles';
import { ITipoVariavelID } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelID';

describe('VariavelEditavel', () => {
    describe('valida o variavel na sua criação', () => {
        test('lança erro de inconsistencias', () => {
            let erro: ErroInconsistenciasNaValidacao | undefined = undefined;
            try {
                new VariavelEditavel(
                    null as unknown as IIdFormulario,
                    null as unknown as ITitulo,
                    null as unknown as ITipoVariavelID,
                    null as unknown as number,
                );
            } catch (e) {
                erro = e as ErroInconsistenciasNaValidacao;
            }
            expect(erro).toBeInstanceOf(ErroInconsistenciasNaValidacao);
            expect(erro?.inconsistencias).toContain('Não contêm ID');
            expect(erro?.inconsistencias).toContain('Não contêm Título');
            expect(erro?.inconsistencias).toContain('Não contêm Tipo');
            expect(erro?.inconsistencias).toContain('Não contêm índice');
        });
    });
    describe('lança erro na edição', () => {
        test('ao informar um id vazio', () => {
            const sut = new VariavelEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TipoVariavelIDDummy(),
                0,
            );
            expect(() => {
                sut.setId(undefined);
            }).toThrow(ErroNaEdicao);
        });
        test('ao informar um título vazio', () => {
            const sut = new VariavelEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TipoVariavelIDDummy(),
                0,
            );
            expect(() => {
                sut.setTitulo(undefined);
            }).toThrow(ErroNaEdicao);
        });
        test('ao informar um tipo vazio', () => {
            const sut = new VariavelEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TipoVariavelIDDummy(),
                0,
            );
            expect(() => {
                sut.setTipo(undefined);
            }).toThrow(ErroNaEdicao);
        });
    });
    describe('cria uma representação em string do objeto', () => {
        test('com o id e o variavel plano', () => {
            const id = new IdFormularioToStringStub();
            const titulo = new TituloToStringStub();
            const tipo = new TipoVariavelIDDummy();
            const sut = new VariavelEditavel(id, titulo, tipo, 0);
            expect(sut.toString()).toBe(id.valor + ': ' + titulo.valor);
        });
    });
});
