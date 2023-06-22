import { especificacaoDTOFake } from '@/dominio/especificacao/EspecificacaoDTO.dubles';
import { ProcessadorDeRespostaDeFormulario } from './ProcessadorDeRespostaDeFormulario';
import { criarProcessadorDeRespostaDeFormularioFactorySut } from './ProcessadorDeRespostaDeFormularioFactory.dubles';

describe('ProcessadorDeRespostaDeFormularioFactory', () => {
    describe('criarDeEspecificacao', () => {
        test('retorna um processador', async () => {
            const sut = criarProcessadorDeRespostaDeFormularioFactorySut();
            const processador = sut.criarDeEspecificacao(especificacaoDTOFake);
            expect(processador).toBeInstanceOf(
                ProcessadorDeRespostaDeFormulario,
            );
        });
    });
});
