import { RespostaDeOpcao } from '@/dominio/formulario/respostas/Respostas';
import { IEscapadorDeQuestao } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestao';
import { IProcessadorDeQuestao } from '../IProcessadorDeQuestao';

export function criarProcessadoresDeQuestaoFake(numeros: number[]) {
    const processadoresDeOpcaoFake = numeros.map(numero => {
        const processador: IProcessadorDeQuestao = {
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
