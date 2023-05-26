import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { RespostaDeQuestao } from '../../../../formulario/respostas/Respostas';
import { IProcessadorDeOpcao } from '../opcao/ProcessadorDeOpcao';
import { IProcessadorDeQuestao } from './IProcessadorDeQuestao';

export class ProcessadorDeQuestaoDeOpcoes implements IProcessadorDeQuestao {
    constructor(
        private id: string,
        private processadores: IProcessadorDeOpcao[],
    ) {}

    compararId(id: string): boolean {
        return id === this.id;
    }

    processar(
        escapador: IEscapadorDeQuestao,
        respostaDto: RespostaDeQuestao,
        template: string,
    ): string {
        if (respostaDto.id !== this.id) {
            throw new ErroIdDaQuestaoDiferenteDoIdDoProcessador(
                respostaDto.id,
                this.id,
            );
        }
        const resposta = respostaDto.resposta[0]; // questões de opção só tem uma resposta
        const processador = this.processadores.find(processador =>
            processador.compararId(resposta.id),
        );
        if (!processador) {
            throw new ErroNaoEncontrouProcessadorDaOpcaoDaResposta(resposta.id);
        }
        const textosDaOpcao = processador.processar(resposta);
        const texto = textosDaOpcao.find(t =>
            escapador.compararCategoria(t.categoria),
        );
        let textoProcessado = template;
        if (texto) {
            textoProcessado = template.replaceAll(
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

export class ErroIdDaQuestaoDiferenteDoIdDoProcessador extends Error {
    constructor(idDaQuestao: string, IdDoProcessador: string) {
        super(
            `Id da questão ${idDaQuestao} é diferente do Id do processador ${IdDoProcessador}`,
        );
    }
}
