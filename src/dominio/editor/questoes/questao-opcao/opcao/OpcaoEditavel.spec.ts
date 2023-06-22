import { IdFormularioDummy } from '@/dominio/comum/IdFormulario.dubles';
import { TituloDummy } from '@/dominio/comum/Titulo.dubles';
import { ListaDeTextosEditavelGetItensStub } from '../../comum/texto/TextoEditavel.dubles';
import { OpcaoEditavel } from './OpcaoEditavel';

describe('OpcaoEditavel', () => {
    test.skip('retorna as categorias de seus textos', () => {
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
        expect(sut.getIdCategorias()).toContain(
            lista.textosFake[0].categoriaFake,
        );
        expect(sut.getIdCategorias()).toContain(
            lista.textosFake[1].categoriaFake,
        );
        expect(sut.getIdCategorias()).toContain(
            lista.textosFake[2].categoriaFake,
        );
    });
});
