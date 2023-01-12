import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IVariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { IdFormularioDummy } from '../../comum/IdFormularioDubles';
import { TituloDummy } from '../../comum/TituloDubles';
import { ErroNaEdicao } from '@/dominio/editor/questoes/ItemEditavel';
import { ITipoVariavelID } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelID';
import { TipoVariavelIDDummy } from './TipoVariavelDubles';
import { IListaEditavel } from '@/dominio/editor/questoes/ListaEditavel';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';

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
    getEscapador(): IEscapadorDeVariavel {
        throw new Error('Method getEscapador not implemented.');
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
    getEscapador(): IEscapadorDeVariavel {
        throw new Error('Method getEscapador not implemented.');
    }
}

export class VariavelEditavelDummy implements IVariavelEditavel {
    getId(): IIdFormulario {
        throw new Error('Method getId not implemented.');
    }
    setId(): void {
        throw new Error('Method setId not implemented.');
    }
    getTitulo(): ITitulo {
        throw new Error('Method getTitulo not implemented.');
    }
    setTitulo(): void {
        throw new Error('Method setTitulo not implemented.');
    }
    getTipo(): ITitulo {
        throw new Error('Method getTipo not implemented.');
    }
    setTipo(): void {
        throw new Error('Method setTipo not implemented.');
    }
    getEmEdicao(): boolean {
        throw new Error('Method getEmEdicao not implemented.');
    }
    editar(): void {
        throw new Error('Method editar not implemented.');
    }
    encerrarEdicao(): void {
        throw new Error('Method encerrarEdicao not implemented.');
    }
    getIndice(): number {
        throw new Error('Method getIndice not implemented.');
    }
    setIndice(): void {
        throw new Error('Method setIndice not implemented.');
    }
    toString(): string {
        throw new Error('Method toString not implemented.');
    }
    getEscapador(): IEscapadorDeVariavel {
        throw new Error('Method getEscapador not implemented.');
    }
}

export class ListaDeVariaveisEditavelDummy
    implements IListaEditavel<IVariavelEditavel>
{
    getItens(): IVariavelEditavel[] {
        throw new Error('Method getItens not implemented.');
    }
    getLength(): number {
        throw new Error('Method getLength not implemented.');
    }
    editarItem(): void {
        throw new Error('Method editarItem not implemented.');
    }
    subirItem(): void {
        throw new Error('Method subirItem not implemented.');
    }
    descerItem(): void {
        throw new Error('Method descerItem not implemented.');
    }
    excluirItem(): void {
        throw new Error('Method excluirItem not implemented.');
    }
    adicionarItem(): void {
        throw new Error('Method adicionarItem not implemented.');
    }
    obterItemPorIndice(): IVariavelEditavel {
        throw new Error('Method obterItemPorIndice not implemented.');
    }
    getEscapador(): IEscapadorDeVariavel {
        throw new Error('Method getEscapador not implemented.');
    }
}
