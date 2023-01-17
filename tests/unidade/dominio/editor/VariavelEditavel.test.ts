import { VariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import {
    TituloDummy,
    TituloToStringStub,
} from '@/tests/dubles/dominio/comum/TituloDubles';
import {
    IdFormularioDummy,
    IdFormularioToStringStub,
} from '@/tests/dubles/dominio/comum/IdFormularioDubles';
import {
    ErroInconsistenciasNaValidacao,
    ErroNaEdicao,
} from '@/dominio/editor/questoes/ItemEditavel';
import { TipoVariavelIDDummy } from '@/tests/dubles/dominio/editor/questoes/TipoVariavelDubles';
import { ITipoVariavelID } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelID';
import {
    EscapadorDeVariavelFactoryCriarDeIdFormularioRetornaToStringStub,
    EscapadorDeVariavelFactoryDummy,
} from '@/tests/dubles/dominio/comum/escapador/EscapadorDeVariavelFactoryDubles';
import { EscapadorDeVariavelToStringStub } from '@/tests/dubles/dominio/comum/escapador/EscapadorDeVariavelDubles';

describe('VariavelEditavel', () => {
    test('valida o variavel na sua criação lança erro se houver inconsistencias', () => {
        let erro: ErroInconsistenciasNaValidacao | undefined = undefined;
        const escapcadorFactory = new EscapadorDeVariavelFactoryDummy();
        try {
            new VariavelEditavel(
                null as unknown as IIdFormulario,
                null as unknown as ITitulo,
                null as unknown as ITipoVariavelID,
                null as unknown as number,
                escapcadorFactory,
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
    describe('lança erro na edição', () => {
        test('ao informar um id vazio', () => {
            const sut = new VariavelEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TipoVariavelIDDummy(),
                0,
                new EscapadorDeVariavelFactoryDummy(),
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
                new EscapadorDeVariavelFactoryDummy(),
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
                new EscapadorDeVariavelFactoryDummy(),
            );
            expect(() => {
                sut.setTipo(undefined);
            }).toThrow(ErroNaEdicao);
        });
    });
    test('tem a representação em string com o id e o variavel plano', () => {
        const id = new IdFormularioToStringStub();
        const titulo = new TituloToStringStub();
        const tipo = new TipoVariavelIDDummy();
        const escapadorFactory = new EscapadorDeVariavelFactoryDummy();
        const sut = new VariavelEditavel(id, titulo, tipo, 0, escapadorFactory);
        expect(sut.toString()).toBe(id.valor + ': ' + titulo.valor);
    });
    test('gera escapador da variável', () => {
        const id = new IdFormularioToStringStub();
        const titulo = new TituloDummy();
        const tipo = new TipoVariavelIDDummy();
        const escapadorFactory =
            new EscapadorDeVariavelFactoryCriarDeIdFormularioRetornaToStringStub();
        const sut = new VariavelEditavel(id, titulo, tipo, 0, escapadorFactory);
        const escapador = sut.getEscapador();
        expect(escapador).toBeInstanceOf(EscapadorDeVariavelToStringStub);
        expect(escapador.toString()).toBe(
            EscapadorDeVariavelToStringStub.string,
        );
    });
});
