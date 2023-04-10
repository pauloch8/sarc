import { IIdFormulario } from '../comum/IdFormulario';
import { ITitulo } from '../comum/Titulo';
import { ISubtitulo } from '../comum/Subtitulo';
import { IListaEditavel } from './comum/ListaEditavel';
import { IQuestaoOpcaoEditavel } from './questoes/questao-opcao/QuestaoOpcaoEditavel';
import { IModeloEditavel } from './modelo/ModeloEditavel';
import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { IQuestaoSelecaoEditavel } from './questoes/questao-selecao/QuestaoSelecaoEditavel';

export interface IFormularioEditor {
    getId(): IIdFormulario;
    setId(id: IIdFormulario): void;
    getTitulo(): ITitulo;
    getSubtitulo(): ISubtitulo | undefined;
    setSubtitulo(subtitulo?: ISubtitulo | undefined): void;
    setTitulo(titulo: ITitulo): void;
    getListaQuestoes(): IListaEditavel<
        IQuestaoOpcaoEditavel | IQuestaoSelecaoEditavel
    >;
    getListaModelos(): IListaEditavel<IModeloEditavel>;
    gerarEspecificacao(): EspecificacaoDTO;
}

export class FormularioEditor implements IFormularioEditor {
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        private listaQuestoes: IListaEditavel<
            IQuestaoOpcaoEditavel | IQuestaoSelecaoEditavel
        >,
        private listaModelos: IListaEditavel<IModeloEditavel>,
        private subtitulo?: ISubtitulo,
    ) {}
    getId() {
        return this.id;
    }
    setId(id: IIdFormulario) {
        this.id = id;
    }
    getTitulo() {
        return this.titulo;
    }
    getSubtitulo() {
        return this.subtitulo;
    }
    setSubtitulo(subtitulo?: ISubtitulo) {
        this.subtitulo = subtitulo;
    }
    setTitulo(titulo: ITitulo) {
        if (!titulo) {
            throw new ErroTituloEhStringVazia();
        }
        this.titulo = titulo;
    }
    getListaQuestoes() {
        return this.listaQuestoes;
    }
    getListaModelos() {
        return this.listaModelos;
    }
    gerarEspecificacao() {
        const listaQuestoes = this.listaQuestoes
            .getItens()
            .map(item => item.gerarEspecificacao());
        const listaModelos = this.listaModelos
            .getItens()
            .map(item => item.gerarEspecificacao());
        const especificacao: EspecificacaoDTO = {
            id: this.id.toString(),
            titulo: this.titulo.toString(),
            subtitulo: this.subtitulo?.toString(),
            listaQuestoes,
            listaModelos,
        };
        return especificacao;
    }
}

export class ErroTituloEhStringVazia extends Error {
    constructor() {
        super('Título não pode ser uma string vazia');
    }
}
