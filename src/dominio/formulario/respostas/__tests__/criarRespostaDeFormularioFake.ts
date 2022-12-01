import { RespostaDeFormulario } from '../Respostas';

export function criarRespostaDeFormularioFake(numeros: number[]) {
    const respostasQuestoes = numeros.map(numero => {
        return {
            id: 'questao' + numero,
            resposta: {
                id: 'resposta' + numero,
            },
        };
    });
    const respostaFake: RespostaDeFormulario = {
        id: 'id-teste',
        respostasQuestoes,
    };
    return respostaFake;
}
