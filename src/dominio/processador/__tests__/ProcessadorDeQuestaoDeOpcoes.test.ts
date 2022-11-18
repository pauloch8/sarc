import {
    RespostaDeOpcao,
    RespostaDeQuestaoDeOpcoes,
} from '@/dominio/formulario/respostas/Respostas';
import {
    ProcessadorDeQuestaoDeOpcoes,
    ErroNaoEncontrouEscapadoresDaQuestao,
} from '../ProcessadorDeQuestaoDeOpcoes';

function makeSut() {
    const sut = new ProcessadorDeQuestaoDeOpcoes('questao1', [
        {
            compararId(id: string) {
                return id === 'resposta1';
            },
            processar(resposta: RespostaDeOpcao) {
                return [{ categoria: 'categoria1', texto: 'sistema' }];
            },
        },
    ]);
    return sut;
}

describe('ProcessadorDeQuestaoDeOpcoes', () => {
    describe('processar', () => {
        test('lança erro se não encontrar escapadores da questão', () => {
            const sut = makeSut();
            const resposta: RespostaDeQuestaoDeOpcoes = {
                id: 'questao2',
                resposta: {
                    id: 'resposta1',
                },
            };
            const template = 'Template ${questao2.categoria2}';
            expect(() => {
                sut.processar(resposta, template);
            }).toThrow(ErroNaoEncontrouEscapadoresDaQuestao);
        });
        test('substitui o espaçador do template pelo texto da resposta', async () => {
            const sut = makeSut();
            const resposta: RespostaDeQuestaoDeOpcoes = {
                id: 'questao1',
                resposta: {
                    id: 'resposta1',
                },
            };
            const template =
                'Template de ${questao1.categoria1} de ${questao2.categoria2}';
            const textoProcessado = sut.processar(resposta, template);
            expect(textoProcessado).toBe(
                'Template de sistema de ${questao2.categoria2}',
            );
        });
    });
});
