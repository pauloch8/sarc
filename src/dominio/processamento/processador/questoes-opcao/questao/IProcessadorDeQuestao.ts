import { RespostaDeQuestao } from '@/dominio/formulario/respostas/Respostas';
import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';

export interface IProcessadorDeQuestao {
    compararId(id: string): boolean;
    processar(
        escapador: IEscapadorDeQuestao,
        resposta: RespostaDeQuestao,
        template: string,
    ): string;
}
