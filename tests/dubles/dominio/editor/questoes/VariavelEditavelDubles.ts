import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IVariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { IdFormularioDummy } from '../../comum/IdFormularioDubles';
import { TituloDummy } from '../../comum/TituloDubles';
import { ErroNaEdicao } from '@/dominio/editor/questoes/ItemEditavel';
import { ITipoVariavelID } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelID';
import { TipoVariavelIDDummy } from './TipoVariavelDubles';
import { IListaEditavel } from '@/dominio/editor/questoes/ListaEditavel';

export class VariavelEditavelEditaComSucessoMock implements IVariavelEditavel {
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private tipo = new TipoVariavelIDDummy();
    private indice = 0;
    getId() {
        return this.id;
    }
    setId(id: IdFormulario): void {
        this.id = id;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo: ITitulo): void {
        this.titulo = titulo;
    }
    getTipo(): ITitulo {
        return this.tipo;
    }
    setTipo(tipo: ITipoVariavelID): void {
        this.tipo = tipo;
    }
    getEmEdicao() {
        return true;
    }
    editar() {
        throw new Error('dummy');
    }
    encerrarEdicao() {
        'dummy';
    }
    getIndice() {
        return this.indice;
    }
    setIndice(indice: number): void {
        this.indice = indice;
    }
    toString() {
        return 'dummy';
    }
}

export class VariavelEditavelErroStub implements IVariavelEditavel {
    id = new IdFormularioDummy();
    titulo = new TituloDummy();
    tipo = 'dummy';
    indice = 0;
    getId() {
        return this.id;
    }
    setId() {
        throw new ErroNaEdicao('id');
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo() {
        throw new ErroNaEdicao('titulo');
    }
    getTipo(): ITitulo {
        return this.tipo;
    }
    setTipo(): void {
        throw new ErroNaEdicao('tipo');
    }
    getEmEdicao() {
        return true;
    }
    editar() {
        throw new Error('dummy');
    }
    encerrarEdicao() {
        'dummy';
    }
    getIndice() {
        return this.indice;
    }
    setIndice() {
        throw new ErroNaEdicao('indice');
    }
    toString() {
        return 'dummy';
    }
}

export class VariavelEditavelDummy implements IVariavelEditavel {
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
    getTipo(): ITitulo {
        throw new Error('Method not implemented.');
    }
    setTipo(): void {
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

export class ListaDeVariaveisEditavelDummy
    implements IListaEditavel<IVariavelEditavel>
{
    getItens(): IVariavelEditavel[] {
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
    obterItemPorIndice(): IVariavelEditavel {
        throw new Error('Method not implemented.');
    }
}
