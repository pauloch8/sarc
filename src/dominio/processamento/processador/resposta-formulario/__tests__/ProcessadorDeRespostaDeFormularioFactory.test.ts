import { ProcessadorDeRespostaDeFormulario } from '../ProcessadorDeRespostaDeFormulario';
import { ProcessadorDeRespostaDeFormularioFactory } from '../ProcessadorDeRespostaDeFormularioFactory';

describe('ProcessadorDeRespostaDeFormularioFactory', () => {
    describe('criarDeEspecificacao', () => {
        test('retorna um processador', async () => {
            const questaoFactoryFake = {
                criarDeEspecificacao() {
                    return [];
                },
            };
            const sut = new ProcessadorDeRespostaDeFormularioFactory(
                questaoFactoryFake,
            );
            const especificacaoFake = {
                id: 'teste',
                questoes: [],
                template: 'template',
                titulo: 'Teste',
            };
            const processador = sut.criarDeEspecificacao(especificacaoFake);
            expect(processador).toBeInstanceOf(
                ProcessadorDeRespostaDeFormulario,
            );
        });
    });
});
