import { criarEspecificacaoFake } from '@/dominio/especificacao/__tests__/criarEspecificacaoFake';
import { ProcessadorDeRespostaDeFormulario } from '../ProcessadorDeRespostaDeFormulario';
import { criarProcessadorDeRespostaDeFormularioFactorySut } from './factories/criarProcessadorDeRespostaDeFormularioFactorySut';

describe('ProcessadorDeRespostaDeFormularioFactory', () => {
    describe('criarDeEspecificacao', () => {
        test('retorna um processador', async () => {
            const sut = criarProcessadorDeRespostaDeFormularioFactorySut();
            const especificacaoFake = criarEspecificacaoFake();
            const processador = sut.criarDeEspecificacao(especificacaoFake);
            expect(processador).toBeInstanceOf(
                ProcessadorDeRespostaDeFormulario,
            );
        });
    });
});
