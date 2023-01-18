import { OpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { IdFormularioDummy } from '@/tests/dubles/dominio/comum/IdFormularioDubles';
import { TituloDummy } from '@/tests/dubles/dominio/comum/TituloDubles';
import { ListaDeTextosEditavelGetItensStub } from '@/tests/dubles/dominio/editor/questoes/TextoEditavelDubles';

describe('OpcaoEditavel', () => {
    test('retorna as categorias de seus textos', () => {
        const lista = new ListaDeTextosEditavelGetItensStub([
            'categoria1',
            'categoria2',
            'categoria3',
        ]);
        const sut = new OpcaoEditavel(
            new IdFormularioDummy(),
            new TituloDummy(),
            0,
            lista,
        );
        expect(sut.getCategorias()).toContain(
            lista.textosFake[0].categoriaFake,
        );
        expect(sut.getCategorias()).toContain(
            lista.textosFake[1].categoriaFake,
        );
        expect(sut.getCategorias()).toContain(
            lista.textosFake[2].categoriaFake,
        );
    });
});
