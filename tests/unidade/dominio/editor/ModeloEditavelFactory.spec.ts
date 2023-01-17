import { ModeloEditavel } from '@/dominio/editor/modelo/ModeloEditavel';
import { ModeloEditavelFactory } from '@/dominio/editor/modelo/ModeloEditavelFactory';
import { IdFormularioDummy } from '@/tests/dubles/dominio/comum/IdFormularioDubles';
import { TextoModeloDummy } from '@/tests/dubles/dominio/comum/TextoModeloDubles';
import { TituloDummy } from '@/tests/dubles/dominio/comum/TituloDubles';

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
