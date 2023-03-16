import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { RespostaDeQuestao } from '../../../../formulario/respostas/Respostas';
import { IProcessadorDeSelecao } from '../selecao/ProcessadorDeSelecao';
import { IProcessadorDeQuestao } from './IProcessadorDeQuestao';

export class ProcessadorDeQuestaoDeSelecoes implements IProcessadorDeQuestao {
    constructor(
        private id: string,
        private processadores: IProcessadorDeSelecao[],
    ) {}

    compararId(id: string): boolean {
        return id === this.id;
    }

    processar(
        escapador: IEscapadorDeQuestao,
        resposta: RespostaDeQuestao,
        template: string,
    ): string {
        if (resposta.id !== this.id) {
            throw new ErroIdDaQuestaoDiferenteDoIdDoProcessador(
                resposta.id,
                this.id,
            );
        }
        const textos = resposta.resposta
            .map(resposta => {
                const processador = this.processadores.find(processador =>
                    processador.compararId(resposta.id),
                );
                if (!processador) {
                    throw new ErroNaoEncontrouProcessadorDaSelecaoDaResposta(
                        resposta.id,
                    );
                }
                const textosDaOpcao = processador.processar(resposta);
                const texto = textosDaOpcao.find(t =>
                    escapador.compararCategoria(t.categoria),
                );
                if (texto) {
                    return texto.texto;
                }
            })
            .filter(texto => texto);
        const textoProcessado = template.replaceAll(
            escapador.toString(),
            textos.join('</br>'),
        );
        return textoProcessado;
    }
}

export class ErroNaoEncontrouProcessadorDaSelecaoDaResposta extends Error {
    constructor(idDaOpcaoDaResposta: string) {
        super(
            `Não encontrou processador da seleção da resposta id ${idDaOpcaoDaResposta}`,
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
