import { Questao } from './questoes/Questao';

export class Formulario {
    constructor(
        private titulo: string,
        private questoes: Questao[],
        private subtitulo?: string,
    ) {}

    getTitulo() {
        return this.titulo;
    }

    getSubtitulo() {
        return this.subtitulo;
    }

    getQuestoes() {
        return this.questoes;
    }

    getTextos() {
        return this.questoes.map(questao => questao.getTextos());
    }
}
