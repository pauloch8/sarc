import {
    RespostaDeFormulario,
    RespostaDeOpcao,
} from '../../../formulario/respostas/Respostas';
import { IEscapadorDeQuestaoFactory } from '../../escapador/questao/EscapadorDeQuestaoFactory';
import { IProcessadorDeQuestaoDeOpcoes } from '../questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoes';

export class ProcessadorDeRespostaDeFormulario {
    constructor(
        private id: string,
        private processadoresDeQuestoes: IProcessadorDeQuestaoDeOpcoes[],
        private escapadorFactory: IEscapadorDeQuestaoFactory,
        private template: string,
    ) {}

    processar(resposta: RespostaDeFormulario): string {
        if (resposta.id !== this.id) {
            throw new ErroRespostaNaoPossuiIdDoProcessador();
        }
        let textoProcessado = this.template;
        for (const respostaQuestao of resposta.respostasQuestoes) {
            const processador = this.processadoresDeQuestoes.find(p =>
                p.compararId(respostaQuestao.id),
            );
            if (!processador) {
                throw new ErroProcessadorDeQuestaoNaoEncontrado(
                    respostaQuestao,
                );
            }
            textoProcessado = processador.processar(
                respostaQuestao,
                textoProcessado,
            );
        }
        // apaga os escapadores restantes
        textoProcessado = this.apagarEscapadoresRestantes(textoProcessado);
        return textoProcessado;
    }

    private apagarEscapadoresRestantes(textoProcessado: string): string {
        const escapadores =
            this.escapadorFactory.criarEscapadoresDeTexto(textoProcessado);
        for (const escapador of escapadores) {
            textoProcessado = textoProcessado.replaceAll(
                escapador.toString(),
                '',
            );
        }
        return textoProcessado;
    }
}

export class ErroRespostaNaoPossuiIdDoProcessador extends Error {
    constructor() {
        super(`Resposta fornecida não possui o id do processador selecionado`);
    }
}

export class ErroProcessadorDeQuestaoNaoEncontrado extends Error {
    constructor(resposta: RespostaDeOpcao) {
        super(`Processador não encontrado para a questão id ${resposta.id}`);
    }
}
