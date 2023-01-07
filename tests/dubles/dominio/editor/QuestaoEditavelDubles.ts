import {
    ErroNaEdicaoDaQuestao,
    IQuestaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavel';
import { IdFormulario } from '@/dominio/editor/comum/IdFormulario';
import { Subtitulo } from '@/dominio/editor/comum/Subtitulo';
import { Titulo } from '@/dominio/editor/comum/Titulo';
import { ListaEditavel } from '@/dominio/editor/questoes/ListaEditavel';
import { OpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { TextoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';

export class QuestaoEditavelErroStub implements IQuestaoEditavel {
    erros = {
        id: 'Erro ao atualizar o id',
        titulo: 'Erro ao atualizar o titulo',
        subtitulo: 'Erro ao atualizar o subtitulo',
        opcoes: 'Erro ao atualizar as opções',
    };
    private id = new IdFormulario('id');
    private titulo = new Titulo('titulo');
    private subtitulo = new Subtitulo('subtitulo');
    private opcoes = new ListaEditavel<OpcaoEditavel>([
        new OpcaoEditavel(
            new IdFormulario('titulo'),
            new Titulo('titulo'),
            0,
            new ListaEditavel<TextoEditavel>([
                new TextoEditavel('categoria', 'texto', 0),
            ]),
        ),
    ]);
    getId(): IdFormulario {
        return this.id;
    }
    setId(): void {
        throw new ErroNaEdicaoDaQuestao(this.erros.id);
    }
    getTitulo(): Titulo {
        return this.titulo;
    }
    setTitulo(): void {
        throw new ErroNaEdicaoDaQuestao(this.erros.titulo);
    }
    getSubTitulo(): Subtitulo | undefined {
        return this.subtitulo;
    }
    setSubtitulo(): void {
        throw new ErroNaEdicaoDaQuestao(this.erros.subtitulo);
    }
    getOpcoes(): ListaEditavel<OpcaoEditavel> | undefined {
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
    private id = new IdFormulario('id');
    private titulo = new Titulo('titulo');
    private subtitulo = new Subtitulo('subtitulo');
    private opcoes = new ListaEditavel<OpcaoEditavel>([
        new OpcaoEditavel(
            new IdFormulario('titulo'),
            new Titulo('titulo'),
            0,
            new ListaEditavel<TextoEditavel>([
                new TextoEditavel('categoria', 'texto', 0),
            ]),
        ),
    ]);
    getId(): IdFormulario {
        return this.id;
    }
    setId(id: IdFormulario): void {
        'dummy';
    }
    getTitulo(): Titulo {
        return this.titulo;
    }
    setTitulo(titulo: Titulo): void {
        'dummy';
    }
    getSubTitulo(): Subtitulo | undefined {
        return this.subtitulo;
    }
    setSubtitulo(subtitulo?: Subtitulo | undefined): void {
        'dummy';
    }
    getOpcoes(): ListaEditavel<OpcaoEditavel> | undefined {
        return this.opcoes;
    }
    setOpcoes(opcoes: ListaEditavel<OpcaoEditavel>): void {
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
    setIndice(indice: number): void {
        'dummy';
    }
}
