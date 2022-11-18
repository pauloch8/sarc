import { RespostaDeOpcao } from '../respostas/Respostas';
import { Observable } from './observer/Observable';

export abstract class Questao extends Observable {
    abstract getResposta(): RespostaDeOpcao;
    abstract readonly semRamificacao: boolean;
    abstract readonly irPara: string | null;

    constructor(
        private id: string,
        private titulo: string,
        private tipo: string,
        private subtitulo?: string,
    ) {
        super();
    }

    getTitulo() {
        return this.titulo;
    }

    getId() {
        return this.id;
    }

    getSubtitulo() {
        return this.subtitulo;
    }
}
