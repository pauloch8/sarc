import { IdFormulario } from './IdFormulario';
import { Questao } from './Questao';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export interface IEditor {
    getId(): IdFormulario;
    getTitulo(): Titulo;
    setTitulo(titulo: Titulo): void;
}

export class Editor implements IEditor {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        private subtitulo?: Subtitulo,
        private questoes: Questao[] = [],
    ) {}
    getId(): IdFormulario {
        return this.id;
    }
    getTitulo() {
        return this.titulo;
    }
    getSubtitulo() {
        return this.subtitulo;
    }
    setTitulo(titulo: Titulo) {
        if (!titulo) {
            throw new ErroTituloEhStringVazia();
        }
        this.titulo = titulo;
    }
    getQuestoes() {
        return this.questoes;
    }
    editarQuestao(questaoSolicitada: Questao) {
        const questaoParaEditar = this.obterQuestao(questaoSolicitada);
        const outrasQuestoes = this.questoes.filter(
            questao => questao != questaoParaEditar,
        );
        const questaoEmEdicao = outrasQuestoes.find(questao =>
            questao.getEmEdicao(),
        );
        if (questaoEmEdicao) {
            throw new ErroExisteQuestaoEmEdicao(questaoEmEdicao);
        }
        questaoParaEditar.editar();
    }

    subirQuestao(questaoSolicitada: Questao) {
        const questaoParaSubir = this.obterQuestao(questaoSolicitada);
        const indiceDaQuestao = this.questoes.indexOf(questaoParaSubir);
        const ultimoIndice = this.questoes.length - 1;

        if (indiceDaQuestao === ultimoIndice) {
            return;
        }

        const indiceDaQuestaoSolicitada = questaoParaSubir.getIndice();
        const novoIndiceDaQuestaoSolicitada = indiceDaQuestaoSolicitada + 1;

        const proximaQuestao = this.questoes[indiceDaQuestao + 1];
        const indiceDaProximaQuestao = proximaQuestao.getIndice();
        const novoIndiceDaProximaQuestao = indiceDaProximaQuestao - 1;

        questaoParaSubir.setIndice(novoIndiceDaQuestaoSolicitada);
        proximaQuestao.setIndice(novoIndiceDaProximaQuestao);
    }

    descerQuestao(questaoSolicitada: Questao) {
        const questaoParaDescer = this.obterQuestao(questaoSolicitada);
        const indiceDaQuestao = this.questoes.indexOf(questaoParaDescer);

        if (indiceDaQuestao === 0) {
            return;
        }

        const indiceDaQuestaoSolicitada = questaoParaDescer.getIndice();
        const novoIndiceDaQuestaoSolicitada = indiceDaQuestaoSolicitada - 1;

        const questaoAnterior = this.questoes[indiceDaQuestao - 1];
        const indiceDaQuestaoAnterior = questaoAnterior.getIndice();
        const novoIndiceDaQuestaoAnterior = indiceDaQuestaoAnterior + 1;

        questaoParaDescer.setIndice(novoIndiceDaQuestaoSolicitada);
        questaoAnterior.setIndice(novoIndiceDaQuestaoAnterior);
    }

    excluirQuestao(questaoSolicitada: Questao) {
        const questaoParaExcluir = this.obterQuestao(questaoSolicitada);
        let indiceDaQuestao = this.questoes.indexOf(questaoParaExcluir);
        // remove a questão
        this.questoes.splice(indiceDaQuestao, 1);

        //renumera os índices das próximas questões
        const ultimoIndice = this.questoes.length - 1;
        for (
            let i = indiceDaQuestao;
            i <= ultimoIndice;
            i++, indiceDaQuestao++
        ) {
            const questao = this.questoes[i];
            questao.setIndice(indiceDaQuestao);
        }
    }

    private obterQuestao(questaoSolicitada: Questao) {
        const retorno = this.questoes.find(
            questao => questao === questaoSolicitada,
        );
        if (!retorno) {
            throw new ErroQuestaoSolicitadaNaoEncontrada(questaoSolicitada);
        }
        return retorno;
    }
}

export class ErroTituloEhStringVazia extends Error {
    constructor() {
        super('Título não pode ser uma string vazia');
    }
}

export class ErroExisteQuestaoEmEdicao extends Error {
    constructor(questao: Questao) {
        super(`Existe uma questão em edição: ${questao}`);
    }
}

export class ErroQuestaoSolicitadaNaoEncontrada extends Error {
    constructor(questao: Questao) {
        super(`Questão solicitada não encontrada no formulário: ${questao}`);
    }
}
