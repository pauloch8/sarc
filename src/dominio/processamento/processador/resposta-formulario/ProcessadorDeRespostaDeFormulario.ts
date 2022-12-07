import { Template } from '@/dominio/especificacao/EspecificacaoDTO';
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
        private templates: Template[],
    ) {}

    processar(resposta: RespostaDeFormulario): TextoProcessado[] {
        if (resposta.id !== this.id) {
            throw new ErroRespostaNaoPossuiIdDoProcessador();
        }
        const textosProcessados: TextoProcessado[] = [];
        for (const template of this.templates) {
            let textoProcessado = template.texto;
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
            textoProcessado = this.apagarEscapadoresRestantes(textoProcessado);
            textosProcessados.push({
                id: template.id,
                titulo: template.titulo,
                texto: textoProcessado,
            });
        }
        return textosProcessados;
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

export type TextoProcessado = {
    id: string;
    titulo: string;
    texto: string;
};
