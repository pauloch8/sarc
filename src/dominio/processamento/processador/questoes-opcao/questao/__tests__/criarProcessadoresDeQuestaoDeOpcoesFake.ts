import { RespostaDeOpcao } from '@/dominio/formulario/respostas/Respostas';
import { IProcessadorDeQuestaoDeOpcoes } from '../ProcessadorDeQuestaoDeOpcoes';

export function criarProcessadoresDeQuestaoDeOpcoesFake(numeros: number[]) {
    const processadoresDeOpcaoFake = numeros.map(numero => {
        const processador: IProcessadorDeQuestaoDeOpcoes = {
            compararId(id: string) {
                return id === 'questao' + numero;
            },
            processar(resposta: RespostaDeOpcao, template: string) {
                const escapador =
                    '${questao' + numero + '.categoria' + numero + '}';
                return template.replaceAll(escapador, 'resposta' + numero);
            },
        };
        return processador;
    });
    return processadoresDeOpcaoFake;
}
