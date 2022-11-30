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
        const retorno: Questao[] = [];
        let parar = false;
        let posicaoAtual = 0;
        const ultimaPosicao = this.questoes.length - 1;
        while (!parar) {
            const questaoAtual = this.questoes[posicaoAtual];
            retorno.push(questaoAtual);
            if (posicaoAtual === ultimaPosicao) {
                parar = true;
                break;
            } else if (questaoAtual.irPara === 'avançar') {
                posicaoAtual++;
                continue;
            } else {
                if (questaoAtual.irPara) {
                    if (questaoAtual.irPara === 'fim do formulário') {
                        parar = true;
                        break;
                    } else {
                        const proximaPosicao = this.questoes.findIndex(
                            questao => questao.getId() === questaoAtual.irPara,
                        );
                        if (proximaPosicao < 0) {
                            throw new ErroPosicaoDoIdIrParaNaoLocalizada(
                                questaoAtual.irPara,
                            );
                        }
                        if (proximaPosicao <= posicaoAtual) {
                            throw new ErroPosicaoDoIdIrParaNaoEstaEmFrenteAoAtual(
                                questaoAtual.irPara,
                                posicaoAtual,
                                proximaPosicao,
                            );
                        }
                        posicaoAtual = proximaPosicao;
                        continue;
                    }
                } else {
                    parar = true;
                    break;
                }
            }
        }
        return retorno;
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

export class ErroPosicaoDoIdIrParaNaoLocalizada extends Error {
    constructor(IdIrPara: string) {
        super(`Posição do id "${IdIrPara}" não encontrada`);
    }
}
export class ErroPosicaoDoIdIrParaNaoEstaEmFrenteAoAtual extends Error {
    constructor(
        idIrPara: string,
        posicaoAtual: number,
        proximaPosicao: number,
    ) {
        super(
            `Id "${idIrPara}" posição "${proximaPosicao}" não está em frente à posição atual ${posicaoAtual}`,
        );
    }
}
