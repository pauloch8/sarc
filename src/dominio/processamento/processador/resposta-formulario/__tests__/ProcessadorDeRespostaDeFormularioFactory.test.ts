import { criarEscapadorDeQuestaoFactoryFake } from '@/dominio/processamento/escapador/questao/__tests__/criarEscapadorDeQuestaoFactoryFake';
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
            const escapadorDeQuestaoFactoryFake =
                criarEscapadorDeQuestaoFactoryFake([1, 2, 3]);
            const sut = new ProcessadorDeRespostaDeFormularioFactory(
                questaoFactoryFake,
                escapadorDeQuestaoFactoryFake,
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
