import {
    ErroNaEdicaoDaQuestao,
    IQuestaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavel';
import { IdFormularioDummy } from '../../comum/IdFormularioDubles';
import { TituloDummy } from '../../comum/TituloDubles';
import { SubtituloDummy } from '../../comum/SubtituloDubles';
import { ListaDeOpcoesEditavelDummy } from './OpcaoEditavelDubles';
import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ISubtitulo } from '@/dominio/comum/Subtitulo';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IOpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import {
    EscapadorDeQuestaoDummy,
    EscapadorDeQuestaoToStringStub,
} from '../../comum/escapador/questao/EscapadorDeQuestaoDubles';
import { IListaEditavel } from '@/dominio/editor/comum/ListaEditavel';

export class QuestaoEditavelErroStub implements IQuestaoEditavel {
    erros = {
        id: 'Erro ao atualizar o id',
        titulo: 'Erro ao atualizar o titulo',
        subtitulo: 'Erro ao atualizar o subtitulo',
        opcoes: 'Erro ao atualizar as opções',
    };
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private subtitulo = new SubtituloDummy();
    private opcoes = new ListaDeOpcoesEditavelDummy();
    getId() {
        return this.id;
    }
    setId(): void {
        throw new ErroNaEdicaoDaQuestao(this.erros.id);
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(): void {
        throw new ErroNaEdicaoDaQuestao(this.erros.titulo);
    }
    getSubtitulo() {
        return this.subtitulo;
    }
    setSubtitulo(): void {
        throw new ErroNaEdicaoDaQuestao(this.erros.subtitulo);
    }
    getListaOpcoes() {
        return this.opcoes;
    }
    setListaOpcoes(): void {
        throw new ErroNaEdicaoDaQuestao(this.erros.opcoes);
    }
    toString(): string {
        return 'dummy';
    }
    getEmEdicao(): boolean {
        return true;
    }
    editar(): void {
        'dummy';
    }
    encerrarEdicao(): void {
        'dummy';
    }
    getIndice(): number {
        return 0;
    }
    setIndice(): void {
        'dummy';
    }
    getEscapadores(): IEscapadorDeQuestao[] {
        throw new Error(
            'Method QuestaoEditavelErroStub.getEscapador not implemented.',
        );
    }
}

export class QuestaoEditavelDummy implements IQuestaoEditavel {
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private subtitulo = new SubtituloDummy();
    private opcoes = new ListaDeOpcoesEditavelDummy();
    private escapadores = [new EscapadorDeQuestaoDummy()];
    getId() {
        return this.id;
    }
    setId(): void {
        return;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(): void {
        return;
    }
    getSubtitulo() {
        return this.subtitulo;
    }
    setSubtitulo(): void {
        return;
    }
    getListaOpcoes() {
        return this.opcoes;
    }
    setListaOpcoes(): void {
        return;
    }
    toString(): string {
        return 'dummy';
    }
    getEmEdicao(): boolean {
        return true;
    }
    editar(): void {
        return;
    }
    encerrarEdicao(): void {
        return;
    }
    getIndice(): number {
        return 0;
    }
    setIndice(): void {
        return;
    }
    getEscapadores(): IEscapadorDeQuestao[] {
        return this.escapadores;
    }
}

export class QuestaoEditavelRetornaEscapadorStub implements IQuestaoEditavel {
    escapadores = [new EscapadorDeQuestaoToStringStub()];

    getEscapadores(): IEscapadorDeQuestao[] {
        return this.escapadores;
    }

    getId(): IIdFormulario {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.getId not implemented.',
        );
    }
    setId(): void {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.setId not implemented.',
        );
    }
    getTitulo(): ITitulo {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.getTitulo not implemented.',
        );
    }
    setTitulo(): void {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.setTitulo not implemented.',
        );
    }
    getSubtitulo(): ISubtitulo | undefined {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.getSubtitulo not implemented.',
        );
    }
    setSubtitulo(): void {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.setSubtitulo not implemented.',
        );
    }
    getListaOpcoes(): IListaEditavel<IOpcaoEditavel> | undefined {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.getListaOpcoes not implemented.',
        );
    }
    setListaOpcoes(): void {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.setListaOpcoes not implemented.',
        );
    }
    getEmEdicao(): boolean {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.getEmEdicao not implemented.',
        );
    }
    editar(): void {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.editar not implemented.',
        );
    }
    encerrarEdicao(): void {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.encerrarEdicao not implemented.',
        );
    }
    getIndice(): number {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.getIndice not implemented.',
        );
    }
    setIndice(): void {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.setIndice not implemented.',
        );
    }
    toString(): string {
        throw new Error(
            'Method QuestaoEditavelRetornaEscapadorStub.toString not implemented.',
        );
    }
}

export class ListaDeQuestoesRetornaItensComEscapadorStub
    implements IListaEditavel<IQuestaoEditavel>
{
    itens = [new QuestaoEditavelRetornaEscapadorStub()];

    getItens(): IQuestaoEditavel[] {
        return this.itens;
    }
    getLength(): number {
        throw new Error(
            'Method ListaDeQuestoesRetornaItensComEscapadorStub.getLength not implemented.',
        );
    }
    editarItem(): void {
        throw new Error(
            'Method ListaDeQuestoesRetornaItensComEscapadorStub.editarItem not implemented.',
        );
    }
    subirItem(): void {
        throw new Error(
            'Method ListaDeQuestoesRetornaItensComEscapadorStub.subirItem not implemented.',
        );
    }
    descerItem(): void {
        throw new Error(
            'Method ListaDeQuestoesRetornaItensComEscapadorStub.descerItem not implemented.',
        );
    }
    excluirItem(): void {
        throw new Error(
            'Method ListaDeQuestoesRetornaItensComEscapadorStub.excluiritem not implemented.',
        );
    }
    adicionarItem(): void {
        throw new Error(
            'Method ListaDeQuestoesRetornaItensComEscapadorStub.adicionarItem not implemented.',
        );
    }
    obterItemPorIndice(): IQuestaoEditavel {
        throw new Error(
            'Method ListaDeQuestoesRetornaItensComEscapadorStub.obterItemPorIndice not implemented.',
        );
    }
}

export class ListaDeQuestoesEditavelDummy
    implements IListaEditavel<IQuestaoEditavel>
{
    private item = new QuestaoEditavelDummy();
    private itens = [this.item];

    getItens(): IQuestaoEditavel[] {
        return this.itens;
    }
    getLength(): number {
        return this.itens.length;
    }
    editarItem(): void {
        return;
    }
    subirItem(): void {
        return;
    }
    descerItem(): void {
        return;
    }
    excluirItem(): void {
        return;
    }
    adicionarItem(): void {
        return;
    }
    obterItemPorIndice(): IQuestaoEditavel {
        return this.item;
    }
}
