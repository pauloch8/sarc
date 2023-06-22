import { RespostaDeFormulario, RespostaDeQuestao } from './Respostas';

export function criarRespostaDeFormularioFake(numeros: number[]) {
    const respostasQuestoes = numeros.map(numero => {
        const respostas = {
            id: 'questao' + numero,
            resposta: [
                {
                    id: 'resposta' + numero,
                },
            ],
        };
        return respostas;
    });
    const respostaFake: RespostaDeFormulario = {
        id: 'id-teste',
        respostasQuestoes,
    };
    return respostaFake;
}

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
