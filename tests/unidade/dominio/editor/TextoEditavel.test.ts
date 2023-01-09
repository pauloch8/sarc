import {
    TextoEditavel,
    ErroNaEdicaoDoTexto,
    InconsistenciasNaValidacaoDoTexto,
} from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { IIdFormulario } from '@/dominio/editor/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/editor/comum/TextoModelo';
import { ITitulo } from '@/dominio/editor/comum/Titulo';
import {
    TextoModeloDummy,
    TextoModeloRetornaTextosStub,
} from '@/tests/dubles/dominio/editor/comum/TextoModeloDubles';
import { TituloDummy } from '@/tests/dubles/dominio/editor/comum/TituloDubles';
import {
    IdFormularioDummy,
    IdFormularioToStringStub,
} from '@/tests/dubles/dominio/editor/comum/IdFormularioDubles';

describe('TextoEditavel', () => {
    describe('valida o texto na sua criação', () => {
        test('lança erro de inconsistencias', () => {
            let erro: InconsistenciasNaValidacaoDoTexto | undefined = undefined;
            try {
                new TextoEditavel(
                    null as unknown as IIdFormulario,
                    null as unknown as ITitulo,
                    null as unknown as ITextoModelo,
                    null as unknown as number,
                );
            } catch (e) {
                erro = e as InconsistenciasNaValidacaoDoTexto;
            }
            expect(erro).toBeInstanceOf(InconsistenciasNaValidacaoDoTexto);
            expect(erro?.inconsistencias).toContain('Não contêm ID');
            expect(erro?.inconsistencias).toContain('Não contêm Título');
            expect(erro?.inconsistencias).toContain('Não contêm Texto Modelo');
            expect(erro?.inconsistencias).toContain('Não contêm índice');
        });
    });
    describe('lança erro na edição', () => {
        test('ao informar um id vazio', () => {
            const sut = new TextoEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TextoModeloDummy(),
                0,
            );
            expect(() => {
                sut.setId(undefined);
            }).toThrow(ErroNaEdicaoDoTexto);
        });
        test('ao informar um título vazio', () => {
            const sut = new TextoEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TextoModeloDummy(),
                0,
            );
            expect(() => {
                sut.setTitulo(undefined);
            }).toThrow(ErroNaEdicaoDoTexto);
        });
        test('ao informar um textoTemplate vazio', () => {
            const sut = new TextoEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TextoModeloDummy(),
                0,
            );
            expect(() => {
                sut.setTextoModelo(undefined);
            }).toThrow(ErroNaEdicaoDoTexto);
        });
    });
    describe('cria uma representação em string do objeto', () => {
        test('com o id e o texto plano', () => {
            const id = new IdFormularioToStringStub();
            const titulo = new TituloDummy();
            const texto = new TextoModeloRetornaTextosStub();
            const sut = new TextoEditavel(id, titulo, texto, 0);
            expect(sut.toString()).toBe(id.valor + ': ' + texto.textoPlano);
        });
    });
});
