import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { FormularioEditor, IFormularioEditor } from './FormularioEditor';
import { IdFormulario, IIdFormulario } from '../comum/IdFormulario';
import { ListaEditavel } from './comum/ListaEditavel';
import {
    IQuestaoOpcaoEditavel,
    QuestaoOpcaoEditavel,
} from './questoes/questao-opcao/QuestaoOpcaoEditavel';
import { ISubtitulo, Subtitulo } from '../comum/Subtitulo';
import { ITitulo, Titulo } from '../comum/Titulo';
import { ModeloEditavel } from './modelo/ModeloEditavel';
import { TextoModelo } from '../comum/TextoModelo';
import { IEscapadorDeVariavelFactory } from '../comum/escapador/variavel/EscapadorDeVariavelFactory';
import { RemoveHtml } from '@/dominio/util/RemoveHtml';
import { IQuestaoEditavelFactory } from './questoes/QuestaoEditavelFactory';
import { IQuestaoSelecaoEditavel } from './questoes/questao-selecao/QuestaoSelecaoEditavel';

export interface IFormularioEditorFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO): IFormularioEditor;
    criarNovo(
        id: IIdFormulario,
        titulo: ITitulo,
        subtitulo?: ISubtitulo,
    ): IFormularioEditor;
}
export class FormularioEditorFactory implements IFormularioEditorFactory {
    constructor(
        private escapadorDeVariavelFactory: IEscapadorDeVariavelFactory,
        private removeHtml: RemoveHtml,
        private questaoEditavelFactory: IQuestaoEditavelFactory,
    ) {}

    criarDaEspecificacao(especificacao: EspecificacaoDTO): FormularioEditor {
        // criar Formuláiro Editor
        const id = new IdFormulario(especificacao.id);
        const titulo = new Titulo(especificacao.titulo);
        let subtitulo: Subtitulo | undefined;
        if (especificacao.subtitulo) {
            subtitulo = new Subtitulo(especificacao.subtitulo);
        }

        // criar Lista de Questões
        const itensQuestoes = especificacao.listaQuestoes.map(
            (item, indice) => {
                return this.questaoEditavelFactory.criarDeEspecificacao(
                    item,
                    indice,
                );
            },
        );

        // TODO: remover esse filter. Só tem itens vazios pq não foi implementado seleção
        const itensNaoVazios = itensQuestoes.filter(item => item);

        // cria a lista de questões
        const listaQuestoes = new ListaEditavel<
            IQuestaoOpcaoEditavel | IQuestaoSelecaoEditavel
        >(itensNaoVazios);

        // criar Lista de Modelos
        const itensModelos = especificacao.listaModelos.map((item, indice) => {
            const id = new IdFormulario(item.id);
            const titulo = new Titulo(item.titulo);
            const textoModelo = new TextoModelo(
                item.texto,
                this.removeHtml,
                this.escapadorDeVariavelFactory,
            );
            return new ModeloEditavel(id, titulo, textoModelo, indice);
        });
        const listaModelos = new ListaEditavel<ModeloEditavel>(itensModelos);

        const retorno = new FormularioEditor(
            id,
            titulo,
            listaQuestoes,
            listaModelos,
            subtitulo,
        );
        return retorno;
    }

    criarNovo(id: IIdFormulario, titulo: ITitulo, subtitulo?: ISubtitulo) {
        const listaQuestoes = new ListaEditavel<QuestaoOpcaoEditavel>();
        const listaModelos = new ListaEditavel<ModeloEditavel>();
        const formulario = new FormularioEditor(
            id,
            titulo,
            listaQuestoes,
            listaModelos,
            subtitulo,
        );
        return formulario;
    }
}
