import { IdFormulario } from '@/dominio/comum/IdFormulario';
import {
    IListaEditavel,
    ListaEditavel,
} from '@/dominio/editor/comum/ListaEditavel';
import {
    ErroNaEdicaoDaOpcao,
    IOpcaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { TextoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { ITitulo, Titulo } from '@/dominio/comum/Titulo';
import { IdFormularioDummy } from '../../comum/IdFormularioDubles';
import { TituloDummy } from '../../comum/TituloDubles';
import { TextoModeloDummy } from '../../comum/TextoModeloDubles';

export class OpcaoEditavelErroStub implements IOpcaoEditavel {
    getCategorias(): ITitulo[] {
        throw new Error('Method not implemented.');
    }
    erros = {
        id: 'Erro ao atualizar o id',
        titulo: 'Erro ao atualizar o titulo',
        textos: 'Erro ao atualizar os textos',
        variaveis: 'Erro ao atualizar as variaveis',
    };
    private id = new IdFormulario('id');
    private titulo = new Titulo('titulo');
    private textos = new ListaEditavel<TextoEditavel>([
        new TextoEditavel(
            new IdFormularioDummy(),
            new TituloDummy(),
            new TextoModeloDummy(),
            0,
        ),
    ]);
    getId(): IdFormulario {
        return this.id;
    }
    setId(): void {
        throw new ErroNaEdicaoDaOpcao(this.erros.id);
    }
    getTitulo(): Titulo {
        return this.titulo;
    }
    setTitulo(): void {
        throw new ErroNaEdicaoDaOpcao(this.erros.titulo);
    }
    getTextos(): ListaEditavel<TextoEditavel> {
        return this.textos;
    }
    setTextos(): void {
        throw new ErroNaEdicaoDaOpcao(this.erros.textos);
    }
    getVariaveis(): undefined {
        return undefined;
    }
    setVariaveis(): void {
        throw new ErroNaEdicaoDaOpcao(this.erros.variaveis);
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

export class OpcaoEditavelDummy implements IOpcaoEditavel {
    private id = new IdFormulario('id');
    private titulo = new Titulo('titulo');
    private textos = new ListaEditavel<TextoEditavel>([
        new TextoEditavel(
            new IdFormularioDummy(),
            new TituloDummy(),
            new TextoModeloDummy(),
            0,
        ),
    ]);
    getId(): IdFormulario {
        return this.id;
    }
    setId(): void {
        'dummy';
    }
    getTitulo(): Titulo {
        return this.titulo;
    }
    setTitulo(): void {
        'dummy';
    }
    getTextos(): ListaEditavel<TextoEditavel> {
        return this.textos;
    }
    setTextos(): void {
        'dummy';
    }
    getVariaveis(): undefined {
        return undefined;
    }
    setVariaveis(): void {
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
    getCategorias(): ITitulo[] {
        throw new Error('Method not implemented.');
    }
}

export class ListaDeOpcoesEditavelDummy
    implements IListaEditavel<IOpcaoEditavel>
{
    getItens(): IOpcaoEditavel[] {
        throw new Error('Method not implemented.');
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
    obterItemPorIndice(): IOpcaoEditavel {
        throw new Error('Method not implemented.');
    }
}
