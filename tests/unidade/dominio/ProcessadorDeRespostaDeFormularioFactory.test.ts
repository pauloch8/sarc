import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { especificacaoDTOFake } from '@/tests/dubles/dominio/especificacao/especificacaoDTOFake';
import { criarProcessadorDeRespostaDeFormularioFactorySut } from '@/tests/dubles/dominio/processamento/processador/resposta-formulario/criarProcessadorDeRespostaDeFormularioFactorySut';

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
