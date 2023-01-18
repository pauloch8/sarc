import { IIdFormulario } from '../comum/IdFormulario';
import { ITitulo } from '../comum/Titulo';
import { ISubtitulo } from '../comum/Subtitulo';
import { IListaEditavel } from './comum/ListaEditavel';
import { IQuestaoEditavel } from './questoes/questao-opcao/QuestaoEditavel';
import { IModeloEditavel } from './modelo/ModeloEditavel';

export interface IFormularioEditor {
    getId(): IIdFormulario;
    getTitulo(): ITitulo;
    setTitulo(titulo: ITitulo): void;
}

export class FormularioEditor implements IFormularioEditor {
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        private listaQuestoes: IListaEditavel<IQuestaoEditavel>,
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
}

export class ErroTituloEhStringVazia extends Error {
    constructor() {
        super('Título não pode ser uma string vazia');
    }
}
