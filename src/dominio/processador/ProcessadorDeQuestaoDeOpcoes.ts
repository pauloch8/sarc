import { RespostaDeQuestaoDeOpcoes } from '../formulario/respostas/Respostas';
import { Escapador } from './Escapador';
import { IProcessadorDeOpcao } from './ProcessadorDeOpcao';

export interface IProcessadorDeQuestaoDeOpcoes {
    compararId(id: string): boolean;
    processar(resposta: RespostaDeQuestaoDeOpcoes, template: string): string;
}

export class ProcessadorDeQuestaoDeOpcoes
    implements IProcessadorDeQuestaoDeOpcoes
{
    constructor(
        private id: string,
        private processadoresDeOpcao: IProcessadorDeOpcao[],
    ) {}

    compararId(id: string): boolean {
        return id === this.id;
    }

    processar(resposta: RespostaDeQuestaoDeOpcoes, template: string): string {
        const escapadoresDaQuestao = this.localizarEscapadores(template);
        if (!escapadoresDaQuestao.length) {
            throw new ErroNaoEncontrouEscapadoresDaQuestao(this.id);
        }
        return '';
    }

    private localizarEscapadores(template: string) {
        const regex = new RegExp('${(' + this.id + '\\.[a-zA-Z_-]+)}', 'g');
        const matchEscapadores = Array.from(template.matchAll(regex));
        const escapadores = matchEscapadores.map(match => {
            const split = match[1].split('.');
            const questaoId = split[0];
            const opcaoId = split[1];
            const categoriaId = split[2];
            return new Escapador(questaoId, opcaoId, categoriaId);
        });
        const escapadoresDaQuestao = escapadores.filter(e =>
            e.compararQuestao(this.id),
        );
        return escapadoresDaQuestao;
    }
}

export class ErroNaoEncontrouEscapadoresDaQuestao extends Error {
    constructor(id: string) {
        super(`Não encontrou escapadores da questão ${id}`);
    }
}
