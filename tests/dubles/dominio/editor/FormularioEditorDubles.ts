import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ISubtitulo } from '@/dominio/comum/Subtitulo';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { IFormularioEditor } from '@/dominio/editor/FormularioEditor';
import { IModeloEditavel } from '@/dominio/editor/modelo/ModeloEditavel';
import { IQuestaoOpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel';
import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { IdFormularioDummy } from '../comum/IdFormularioDubles';
import { TituloDummy } from '../comum/TituloDubles';
import { ListaDeModelosEditavelDummy } from './modelo/ModeloEditavelDubles';
import { ListaDeQuestoesEditavelDummy } from './questoes/QuestaoEditavelDubles';

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
