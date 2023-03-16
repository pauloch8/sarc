import {
    ModeloEditavel,
    ErroNaEdicaoDoModelo,
    InconsistenciasNaValidacaoDoModelo,
} from '@/dominio/editor/modelo/ModeloEditavel';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { ITitulo } from '@/dominio/comum/Titulo';
import {
    TextoModeloDummy,
    TextoModeloRetornaTextosStub,
} from '@/tests/dubles/dominio/comum/TextoModeloDubles';
import { TituloDummy } from '@/tests/dubles/dominio/comum/TituloDubles';
import {
    IdFormularioDummy,
    IdFormularioToStringStub,
} from '@/tests/dubles/dominio/comum/IdFormularioDubles';

describe('ModeloEditavel', () => {
    test('lança erro de inconsistencias na instanciação se não passar na valicação', () => {
        let erro: InconsistenciasNaValidacaoDoModelo | undefined = undefined;
        try {
            new ModeloEditavel(
                null as unknown as IIdFormulario,
                null as unknown as ITitulo,
                null as unknown as ITextoModelo,
                null as unknown as number,
            );
        } catch (e) {
            erro = e as InconsistenciasNaValidacaoDoModelo;
        }
        expect(erro).toBeInstanceOf(InconsistenciasNaValidacaoDoModelo);
        expect(erro?.inconsistencias).toContain('Não contêm ID');
        expect(erro?.inconsistencias).toContain('Não contêm Título');
        expect(erro?.inconsistencias).toContain('Não contêm Modelo Modelo');
        expect(erro?.inconsistencias).toContain('Não contêm índice');
    });
    describe('lança erro na edição', () => {
        test('ao informar um id vazio', () => {
            const sut = new ModeloEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TextoModeloDummy(),
                0,
            );
            expect(() => {
                sut.setId(undefined);
            }).toThrow(ErroNaEdicaoDoModelo);
        });
        test('ao informar um título vazio', () => {
            const sut = new ModeloEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TextoModeloDummy(),
                0,
            );
            expect(() => {
                sut.setTitulo(undefined);
            }).toThrow(ErroNaEdicaoDoModelo);
        });
        test('ao informar um modeloTemplate vazio', () => {
            const sut = new ModeloEditavel(
                new IdFormularioDummy(),
                new TituloDummy(),
                new TextoModeloDummy(),
                0,
            );
            expect(() => {
                sut.setTextoModelo(undefined);
            }).toThrow(ErroNaEdicaoDoModelo);
        });
    });
    test('cria uma representação em string com o id e o modelo plano', () => {
        const id = new IdFormularioToStringStub();
        const titulo = new TituloDummy();
        const modelo = new TextoModeloRetornaTextosStub();
        const sut = new ModeloEditavel(id, titulo, modelo, 0);
        expect(sut.toString()).toBe(id.valor + ': ' + modelo.textoPlano);
    });
});
