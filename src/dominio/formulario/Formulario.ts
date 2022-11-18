import { Questao } from './questoes/Questao';
import { RespostaDeFormulario } from './respostas/Respostas';

export class Formulario {
    constructor(
        private id: string,
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

    getRespostas(): RespostaDeFormulario {
        const respostasQuestoes = this.questoes.map(questao =>
            questao.getResposta(),
        );
        const respostaFormulario = {
            id: this.id,
            respostasQuestoes,
        };
        return respostaFormulario;
    }
}
