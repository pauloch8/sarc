import { RespostaDeOpcao } from '../formulario/respostas/Respostas';
import { Texto } from './Texto';
import { TextosDaResposta } from './TextosDaResposta';

export interface IProcessadorDeOpcao {
    compararId(id: string): boolean;
    processar(resposta: RespostaDeOpcao): Texto[];
}

export class ProcessadorDeOpcao {
    constructor(private id: string, textos: Texto[]) {}

    processar(resposta: RespostaDeOpcao) {
        throw 9;
    }
}
