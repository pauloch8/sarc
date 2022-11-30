import { IEscapadorDeQuestao } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestao';
import { RespostaDeQuestaoDeOpcoes } from '../../../../formulario/respostas/Respostas';
import { IEscapadorDeQuestaoFactory } from '../../../escapador/questao/EscapadorDeQuestaoFactory';
import { IProcessadorDeOpcao } from '../opcao/ProcessadorDeOpcao';

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
        private escapadorFactory: IEscapadorDeQuestaoFactory,
    ) {}

    compararId(id: string): boolean {
        return id === this.id;
    }

    processar(resposta: RespostaDeQuestaoDeOpcoes, template: string): string {
        if (resposta.id !== this.id) {
            throw new ErroIdDaQuestaoDiferenteDoIdDoProcessador(
                resposta.id,
                this.id,
            );
        }
        const escapadores =
            this.escapadorFactory.criarEscapadoresDeTexto(template);
        const escapadoresDaResposta = escapadores.filter(e =>
            e.compararQuestao(resposta.id),
        );
        if (!escapadoresDaResposta.length) {
            throw new ErroNaoEncontrouEscapadorDaQuestao(resposta.id);
        }
        let textoProcessado = template;
        for (const escapador of escapadoresDaResposta) {
            const processadorDeOpcao = this.processadoresDeOpcao.find(
                processador => processador.compararId(resposta.resposta.id),
            );
            if (!processadorDeOpcao) {
                throw new ErroNaoEncontrouProcessadorDaOpcaoDaResposta(
                    resposta.resposta.id,
                );
            }
            const textosDaOpcao = processadorDeOpcao.processar(
                resposta.resposta,
            );
            const texto = textosDaOpcao.find(t =>
                escapador.compararCategoria(t.categoria),
            );
            if (!texto) {
                throw new ErroDaRespostaNaoEncontrado(
                    escapador,
                    resposta.resposta.id,
                );
            }
            textoProcessado = textoProcessado.replaceAll(
                escapador.toString(),
                texto.texto,
            );
        }
        return textoProcessado;
    }
}

export class ErroNaoEncontrouEscapadorDaQuestao extends Error {
    constructor(id: string) {
        super(`Não encontrou escapador da questão ${id}`);
    }
}

export class ErroNaoEncontrouProcessadorDaOpcaoDaResposta extends Error {
    constructor(idDaOpcaoDaResposta: string) {
        super(
            `Não encontrou processador da opção da resposta id ${idDaOpcaoDaResposta}`,
        );
    }
}

export class ErroDaRespostaNaoEncontrado extends Error {
    constructor(escapador: IEscapadorDeQuestao, questaoId: string) {
        super(
            `Texto para o escapador ${escapador} da resposta ${questaoId} não encontrado`,
        );
    }
}

export class ErroIdDaQuestaoDiferenteDoIdDoProcessador extends Error {
    constructor(idDaQuestao: string, IdDoProcessador: string) {
        super(
            `Id da questão ${idDaQuestao} é diferente do Id do processador ${IdDoProcessador}`,
        );
    }
}
