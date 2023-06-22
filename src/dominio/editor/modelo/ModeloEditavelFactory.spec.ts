import { ModeloEditavelFactory } from './ModeloEditavelFactory';
import { IdFormularioDummy } from '@/dominio/comum/IdFormulario.dubles';
import { TextoModeloDummy } from '@/dominio/comum/TextoModelo.dubles';
import { TituloDummy } from '@/dominio/comum/Titulo.dubles';
import { ModeloEditavel } from './ModeloEditavel';

describe('ModeloEditavelFactory', () => {
    test('cria instâncias', () => {
        const sut = new ModeloEditavelFactory();
        const instancia = sut.criar(
            new IdFormularioDummy(),
            new TituloDummy(),
            new TextoModeloDummy(),
            0,
        );
        expect(instancia).toBeInstanceOf(ModeloEditavel);
    });
});
