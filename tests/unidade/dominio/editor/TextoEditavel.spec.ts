import {
    TextoEditavel,
    ErroNaEdicaoDoTexto,
    InconsistenciasNaValidacaoDoTexto,
} from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { ITitulo } from '@/dominio/comum/Titulo';
import {
    TextoModeloDummy,
    TextoModeloRetornaTextosStub,
} from '@/tests/dubles/dominio/comum/TextoModeloDubles';
import {
    TituloDummy,
    TituloToStringStub,
} from '@/tests/dubles/dominio/comum/TituloDubles';
import { IdFormularioDummy } from '@/tests/dubles/dominio/comum/IdFormularioDubles';

describe('TextoEditavel', () => {
    test('lança erro de inconsistencias na instanciação se não passar na valicação', () => {
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
        expect(erro?.inconsistencias).toContain('Não contém ID');
        expect(erro?.inconsistencias).toContain('Não contém Categoria');
        expect(erro?.inconsistencias).toContain('Não contém Texto Modelo');
        expect(erro?.inconsistencias).toContain('Não contém índice');
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
        test('ao informar uma categoria vazia', () => {
            const sut = new TextoEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TextoModeloDummy(),
                0,
            );
            expect(() => {
                sut.setCategoria(undefined);
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
    test('cria uma representação em string com a categoria e o texto plano', () => {
        const id = new IdFormularioDummy();
        const categoria = new TituloToStringStub();
        const texto = new TextoModeloRetornaTextosStub();
        const sut = new TextoEditavel(id, categoria, texto, 0);
        expect(sut.toString()).toBe(categoria.valor + ': ' + texto.textoPlano);
    });
});
