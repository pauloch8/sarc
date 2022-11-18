import {
    RespostaDeFormulario,
    RespostaDeOpcao,
} from '../formulario/respostas/Respostas';
import { IProcessadorDeQuestaoDeOpcoes } from './ProcessadorDeQuestaoDeOpcoes';

export class ProcessadorDeRespostaDeFormulario {
    constructor(
        private id: string,
        private processadoresDeQuestoes: IProcessadorDeQuestaoDeOpcoes[],
        private template: string,
    ) {}

    processar(resposta: RespostaDeFormulario): string {
        if (resposta.id !== this.id) {
            throw new ErroRespostaNaoPossuiIdDoProcessador();
        }
        let textoProcessado;
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
                this.template,
            );
        }
        if (!textoProcessado) {
            throw new ErroProcessamentoNaoRetornouTexto();
        }
        this.verificarSeSobrouEspacador(textoProcessado);
        return textoProcessado;
    }

    private verificarSeSobrouEspacador(textoProcessado: string): void {
        const regexEscapador = /\$\{[a-z_]+[a-z_0-9]*\}/;
        if (regexEscapador.test(textoProcessado)) {
            throw new ErroSobrouEspacadorAposProcessamento();
        }
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

export class ErroProcessamentoNaoRetornouTexto extends Error {
    constructor() {
        super(`Processamento não retornou texto`);
    }
}

export class ErroSobrouEspacadorAposProcessamento extends Error {
    constructor() {
        super(`Sobrou escapador após o processamnto`);
    }
}
