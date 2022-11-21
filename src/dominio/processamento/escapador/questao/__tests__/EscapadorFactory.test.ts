import { EscapadorDeQuestao } from '../EscapadorDeQuestao';
import { EscapadorDeQuestaoFactory } from '../EscapadorDeQuestaoFactory';

describe('EscapadorFactory', () => {
    describe('criarEscapadoresDeTexto', () => {
        test('retorna os escapadores de um texto', async () => {
            const sut = new EscapadorDeQuestaoFactory();
            const texto =
                'Template de ${questao1.categoria1} de ${questao2.categoria2}';
            const escapadores = sut.criarEscapadoresDeTexto(texto);
            expect(escapadores).toHaveLength(2);
            expect(escapadores[0]).toBeInstanceOf(EscapadorDeQuestao);
        });
    });
});
