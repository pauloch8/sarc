import {
    IQuestaoEditavel,
    QuestaoEditavel,
} from '@/dominio/editor/QuestaoEditavel';
import { IQuestaoEditavelFactory } from '@/dominio/editor/QuestaoEditavelFactory';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { Titulo } from '@/dominio/editor/Titulo';
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { Opcao } from '@/dominio/editor/Opcao';
import { Texto } from '@/dominio/processamento/processador/texto/Texto';

export class QuestaoEditavelFactoryDummy implements IQuestaoEditavelFactory {
    criar(): IQuestaoEditavel {
        throw new Error('Dummy QuestaoEditavelFactory.criar()');
    }
}

export class QuestaoEditavelFactoryErroStub implements IQuestaoEditavelFactory {
    mensagemDeErro = 'Mensagem de erro';
    criar(): QuestaoEditavel {
        throw new Error(this.mensagemDeErro);
    }
}

export class QuestaoEditavelFactorySucessoStub
    implements IQuestaoEditavelFactory
{
    criar() {
        return new QuestaoEditavelDummy();
    }
}

export class QuestaoEditavelErroStub implements IQuestaoEditavel {
    static mensagemDeErro = 'Erro ao atualizar o id';
    private id = new IdFormulario('id');
    private titulo = new Titulo('titulo');
    private subtitulo = new Subtitulo('subtitulo');
    private opcoes = new ListaEditavel<Opcao>([
        new Opcao(
            new Titulo('titulo'),
            new IdFormulario('titulo'),
            [new Texto('categoria', 'texto')],
            0,
        ),
    ]);
    getId(): IdFormulario {
        return this.id;
    }
    setId(id: IdFormulario): void {
        throw new Error(QuestaoEditavelErroStub.mensagemDeErro);
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
    getOpcoes(): ListaEditavel<Opcao> | undefined {
        return this.opcoes;
    }
    setOpcoes(opcoes: ListaEditavel<Opcao>): void {
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
    getIndice(): number {
        return 0;
    }
    setIndice(indice: number): void {
        'dummy';
    }
}
export class QuestaoEditavelDummy implements IQuestaoEditavel {
    private id = new IdFormulario('id');
    private titulo = new Titulo('titulo');
    private subtitulo = new Subtitulo('subtitulo');
    private opcoes = new ListaEditavel<Opcao>([
        new Opcao(
            new Titulo('titulo'),
            new IdFormulario('titulo'),
            [new Texto('categoria', 'texto')],
            0,
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
    getOpcoes(): ListaEditavel<Opcao> | undefined {
        return this.opcoes;
    }
    setOpcoes(opcoes: ListaEditavel<Opcao>): void {
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
    getIndice(): number {
        return 0;
    }
    setIndice(indice: number): void {
        'dummy';
    }
}
