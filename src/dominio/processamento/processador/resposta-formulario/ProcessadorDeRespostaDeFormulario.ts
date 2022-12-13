import { Template } from '@/dominio/especificacao/EspecificacaoDTO';
import {
    RespostaDeFormulario,
    RespostaDeOpcao,
} from '../../../formulario/respostas/Respostas';
import { IEscapadorDeQuestaoFactory } from '../../escapador/questao/EscapadorDeQuestaoFactory';
import { IProcessadorDeQuestao } from '../questoes-opcao/questao/IProcessadorDeQuestao';

export class ProcessadorDeRespostaDeFormulario {
    constructor(
        private id: string,
        private processadoresDeQuestoes: IProcessadorDeQuestao[],
        private escapadorFactory: IEscapadorDeQuestaoFactory,
        private templates: Template[],
    ) {}

    processar(resposta: RespostaDeFormulario): TextoProcessado[] {
        debugger;
        if (resposta.id !== this.id) {
            throw new ErroRespostaNaoPossuiIdDoProcessador();
        }
        const textosProcessados: TextoProcessado[] = [];
        for (const template of this.templates) {
            let textoProcessado = template.texto;
            const escapadores =
                this.escapadorFactory.criarEscapadoresDeTexto(textoProcessado);
            for (const escapador of escapadores) {
                const respostaQuestao = resposta.respostasQuestoes.find(
                    resposta =>
                        escapador.getQuestaoId().toString() === resposta.id,
                );
                if (respostaQuestao) {
                    const processador = this.processadoresDeQuestoes.find(p =>
                        p.compararId(respostaQuestao.id),
                    );
                    if (!processador) {
                        throw new ErroProcessadorDeQuestaoNaoEncontrado(
                            respostaQuestao,
                        );
                    }
                    textoProcessado = processador.processar(
                        escapador,
                        respostaQuestao,
                        textoProcessado,
                    );
                }
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
