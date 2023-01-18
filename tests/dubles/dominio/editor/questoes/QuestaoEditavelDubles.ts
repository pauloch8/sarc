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
import { EscapadorDeQuestaoToStringStub } from '../../comum/escapador/questao/EscapadorDeQuestaoDubles';
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
    getSubTitulo() {
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
        throw new Error('Method not implemented.');
    }
}
export class QuestaoEditavelDummy implements IQuestaoEditavel {
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private subtitulo = new SubtituloDummy();
    private opcoes = new ListaDeOpcoesEditavelDummy();
    getId() {
        return this.id;
    }
    setId(): void {
        'dummy';
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(): void {
        'dummy';
    }
    getSubTitulo() {
        return this.subtitulo;
    }
    setSubtitulo(): void {
        'dummy';
    }
    getListaOpcoes() {
        return this.opcoes;
    }
    setListaOpcoes(): void {
        'dummy';
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
        throw new Error('Method not implemented.');
    }
}

export class QuestaoEditavelRetornaEscapadorStub implements IQuestaoEditavel {
    escapadores = [new EscapadorDeQuestaoToStringStub()];

    getEscapadores(): IEscapadorDeQuestao[] {
        return this.escapadores;
    }

    getId(): IIdFormulario {
        throw new Error('Method not implemented.');
    }
    setId(): void {
        throw new Error('Method not implemented.');
    }
    getTitulo(): ITitulo {
        throw new Error('Method not implemented.');
    }
    setTitulo(): void {
        throw new Error('Method not implemented.');
    }
    getSubTitulo(): ISubtitulo | undefined {
        throw new Error('Method not implemented.');
    }
    setSubtitulo(): void {
        throw new Error('Method not implemented.');
    }
    getListaOpcoes(): IListaEditavel<IOpcaoEditavel> | undefined {
        throw new Error('Method not implemented.');
    }
    setListaOpcoes(): void {
        throw new Error('Method not implemented.');
    }
    getEmEdicao(): boolean {
        throw new Error('Method not implemented.');
    }
    editar(): void {
        throw new Error('Method not implemented.');
    }
    encerrarEdicao(): void {
        throw new Error('Method not implemented.');
    }
    getIndice(): number {
        throw new Error('Method not implemented.');
    }
    setIndice(): void {
        throw new Error('Method not implemented.');
    }
    toString(): string {
        throw new Error('Method not implemented.');
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
        throw new Error('Method not implemented.');
    }
    editarItem(): void {
        throw new Error('Method not implemented.');
    }
    subirItem(): void {
        throw new Error('Method not implemented.');
    }
    descerItem(): void {
        throw new Error('Method not implemented.');
    }
    excluirItem(): void {
        throw new Error('Method not implemented.');
    }
    adicionarItem(): void {
        throw new Error('Method not implemented.');
    }
    obterItemPorIndice(): IQuestaoEditavel {
        throw new Error('Method not implemented.');
    }
}

export class ListaDeQuestoesEditavelDummy
    implements IListaEditavel<IQuestaoEditavel>
{
    getItens(): IQuestaoEditavel[] {
        throw new Error(
            'Method ListaDeQuestoesEditavelDummy.getItens not implemented.',
        );
    }
    getLength(): number {
        throw new Error(
            'Method ListaDeQuestoesEditavelDummy.getLength not implemented.',
        );
    }
    editarItem(): void {
        throw new Error(
            'Method ListaDeQuestoesEditavelDummy.editarItem not implemented.',
        );
    }
    subirItem(): void {
        throw new Error(
            'Method ListaDeQuestoesEditavelDummy.subirItem not implemented.',
        );
    }
    descerItem(): void {
        throw new Error(
            'Method ListaDeQuestoesEditavelDummy.descerItem not implemented.',
        );
    }
    excluirItem(): void {
        throw new Error(
            'Method ListaDeQuestoesEditavelDummy.excluirItem not implemented.',
        );
    }
    adicionarItem(): void {
        throw new Error(
            'Method ListaDeQuestoesEditavelDummy.adicionarItem not implemented.',
        );
    }
    obterItemPorIndice(): IQuestaoEditavel {
        throw new Error(
            'Method ListaDeQuestoesEditavelDummy.obterItemPorIndice not implemented.',
        );
    }
}
