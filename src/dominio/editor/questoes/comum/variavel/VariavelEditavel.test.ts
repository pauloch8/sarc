import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import {
    IdFormularioDummy,
    IdFormularioToStringStub,
} from '@/dominio/comum/IdFormulario.dubles';
import { ITitulo } from '@/dominio/comum/Titulo';
import { TituloDummy, TituloToStringStub } from '@/dominio/comum/Titulo.dubles';
import { EscapadorDeVariavelToStringStub } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel.dubles';
import {
    EscapadorDeVariavelFactoryDummy,
    EscapadorDeVariavelFactoryRetornaToStringStub,
} from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory.dubles';
import {
    ErroInconsistenciasNaValidacao,
    ErroNaEdicao,
} from '@/dominio/editor/comum/ItemEditavel';
import { VariavelEditavel } from './VariavelEditavel';
import { ITipoVariavelID } from './tipo-variavel/TipoVariavelID';
import { TipoVariavelIDDummy } from './tipo-variavel/TipoVariavelID.dubles';

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
            new EscapadorDeVariavelFactoryRetornaToStringStub();
        const sut = new VariavelEditavel(id, titulo, tipo, 0, escapadorFactory);
        const escapador = sut.getEscapador() as EscapadorDeVariavelToStringStub;
        expect(escapador).toBeInstanceOf(EscapadorDeVariavelToStringStub);
        expect(escapador.toString()).toBe(escapador.string);
    });
});
