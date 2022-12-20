import { RespostaDeQuestao } from '@/dominio/formulario/respostas/Respostas';

export function makeRespostaDeQuestaoFake() {
    const respostaFake: RespostaDeQuestao = {
        id: 'questao1',
        resposta: [
            {
                id: 'resposta1',
            },
        ],
    };
    return respostaFake;
}
