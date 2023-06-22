import { IIdFormulario } from '../comum/IdFormulario';
import { IdFormularioDummy } from '../comum/IdFormulario.dubles';
import { ISubtitulo } from '../comum/Subtitulo';
import { ITitulo } from '../comum/Titulo';
import { TituloDummy } from '../comum/Titulo.dubles';
import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { IFormularioEditor } from './FormularioEditor';
import { IListaEditavel } from './comum/ListaEditavel';
import { IModeloEditavel } from './modelo/ModeloEditavel';
import { ListaDeModelosEditavelDummy } from './modelo/ModeloEditavel.dubles';
import { IQuestaoOpcaoEditavel } from './questoes/questao-opcao/QuestaoOpcaoEditavel';
import { ListaDeQuestoesEditavelDummy } from './questoes/questao-opcao/QuestaoOpcaoEditavel.dubles';

export class FormularioEditorDummy implements IFormularioEditor {
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private listaQuestoes = new ListaDeQuestoesEditavelDummy();
    private listaModelos = new ListaDeModelosEditavelDummy();

    getId(): IIdFormulario {
        return this.id;
    }
    getTitulo(): ITitulo {
        return this.titulo;
    }
    setTitulo(titulo: ITitulo): void {
        return;
    }
    setId(id: IIdFormulario): void {
        return;
    }
    getSubtitulo(): ISubtitulo | undefined {
        return;
    }
    setSubtitulo(subtitulo?: ISubtitulo | undefined): void {
        return;
    }
    getListaQuestoes(): IListaEditavel<IQuestaoOpcaoEditavel> {
        return this.listaQuestoes;
    }
    getListaModelos(): IListaEditavel<IModeloEditavel> {
        return this.listaModelos;
    }
    gerarEspecificacao(): EspecificacaoDTO {
        // TODO: retornar um dummy
        throw new Error('Method not implemented.');
    }
}
