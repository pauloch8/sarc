import {
    ErroNaEdicaoDaQuestao,
    IQuestaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavel';
import { IdFormularioDummy } from '../comum/IdFormularioDubles';
import { TituloDummy } from '../comum/TituloDubles';
import { SubtituloDummy } from '../comum/SubtituloDubles';
import { ListaDeOpcoesEditavelDummy } from './OpcaoEditavelDubles';

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
    getOpcoes() {
        return this.opcoes;
    }
    setOpcoes(): void {
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
    getOpcoes() {
        return this.opcoes;
    }
    setOpcoes(): void {
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
}
