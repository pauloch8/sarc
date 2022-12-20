import { RespostaDeFormulario } from '@/dominio/formulario/respostas/Respostas';

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
