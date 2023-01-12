import { EscapadorDeQuestao } from '../../../../comum/escapador/questao/EscapadorDeQuestao';

export interface IProcessadorDeVariavel {
    processar(variavel: EscapadorDeQuestao, texto: string): string;
}

export class ProcessadorDeVariavel implements IProcessadorDeVariavel {
    processar(variavel: EscapadorDeQuestao, texto: string): string {
        throw new Error('Method not implemented.');
    }
}
