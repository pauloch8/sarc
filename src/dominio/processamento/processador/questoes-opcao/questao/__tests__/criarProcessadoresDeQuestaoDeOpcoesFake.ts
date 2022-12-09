import { RespostaDeOpcao } from '@/dominio/formulario/respostas/Respostas';
import { IEscapadorDeQuestao } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestao';
import { IProcessadorDeQuestaoDeOpcoes } from '../ProcessadorDeQuestaoDeOpcoes';

export function criarProcessadoresDeQuestaoDeOpcoesFake(numeros: number[]) {
    const processadoresDeOpcaoFake = numeros.map(numero => {
        const processador: IProcessadorDeQuestaoDeOpcoes = {
            compararId(id: string) {
                return id === 'questao' + numero;
            },
            processar(
                escapador: IEscapadorDeQuestao,
                resposta: RespostaDeOpcao,
                template: string,
            ) {
                return template.replaceAll(
                    escapador.toString(),
                    'resposta' + numero,
                );
            },
        };
        return processador;
    });
    return processadoresDeOpcaoFake;
}
