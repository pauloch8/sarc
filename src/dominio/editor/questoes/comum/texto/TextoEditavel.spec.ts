import {
    InconsistenciasNaValidacaoDoTexto,
    TextoEditavel,
    ErroNaEdicaoDoTexto,
} from './TextoEditavel';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { IdFormularioDummy } from '@/dominio/comum/IdFormulario.dubles';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import {
    TextoModeloDummy,
    TextoModeloRetornaTextosStub,
} from '@/dominio/comum/TextoModelo.dubles';

describe('TextoEditavel', () => {
    test('lança erro de inconsistencias na instanciação se não passar na valicação', () => {
        let erro: InconsistenciasNaValidacaoDoTexto | undefined = undefined;
        try {
            new TextoEditavel(
                null as unknown as IIdFormulario,
                null as unknown as ITextoModelo,
                null as unknown as number,
            );
        } catch (e) {
            erro = e as InconsistenciasNaValidacaoDoTexto;
        }
        expect(erro).toBeInstanceOf(InconsistenciasNaValidacaoDoTexto);
        expect(erro?.inconsistencias).toContain('Não contém Categoria');
        expect(erro?.inconsistencias).toContain('Não contém Texto Modelo');
        expect(erro?.inconsistencias).toContain('Não contém índice');
    });
    describe('lança erro na edição', () => {
        test('ao informar uma categoria vazia', () => {
            const sut = new TextoEditavel(
                new IdFormularioDummy(),
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
                new TextoModeloDummy(),
                0,
            );
            expect(() => {
                sut.setTextoModelo(undefined);
            }).toThrow(ErroNaEdicaoDoTexto);
        });
    });
    test('cria uma representação em string com a categoria e o texto plano', () => {
        const categoria = new IdFormularioDummy();
        const texto = new TextoModeloRetornaTextosStub();
        const sut = new TextoEditavel(categoria, texto, 0);
        expect(sut.toString()).toBe(
            categoria.toString() + ': ' + texto.textoPlano,
        );
    });
});
