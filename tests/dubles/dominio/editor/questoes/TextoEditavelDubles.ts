import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import {
    ErroNaEdicaoDoTexto,
    ITextoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { IdFormularioDummy } from '../../comum/IdFormularioDubles';
import { TextoModeloDummy } from '../../comum/TextoModeloDubles';
import { TituloDummy, TituloFake } from '../../comum/TituloDubles';

export class TextoEditavelEditaComSucessoMock implements ITextoEditavel {
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private textoModelo = new TextoModeloDummy();
    private indice = 0;
    getId() {
        return this.id;
    }
    setId(id?: IdFormulario | undefined): void {
        this.id = id as IdFormulario;
    }
    getCategoria() {
        return this.titulo;
    }
    setCategoria(titulo?: ITitulo | undefined): void {
        this.titulo = titulo as ITitulo;
    }
    getTextoModelo() {
        return this.textoModelo;
    }
    setTextoModelo(textoModelo?: ITextoModelo | undefined): void {
        this.textoModelo = textoModelo as ITextoModelo;
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

export class TextoEditavelErroStub implements ITextoEditavel {
    id = new IdFormularioDummy();
    titulo = new TituloDummy();
    textoModelo = new TextoModeloDummy();
    indice = 0;
    getId() {
        return this.id;
    }
    setId() {
        throw new ErroNaEdicaoDoTexto('id');
    }
    getCategoria() {
        return this.titulo;
    }
    setCategoria() {
        throw new ErroNaEdicaoDoTexto('titulo');
    }
    getTextoModelo() {
        return this.textoModelo;
    }
    setTextoModelo() {
        throw new ErroNaEdicaoDoTexto('texto-modelo');
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
        throw new ErroNaEdicaoDoTexto('indice');
    }
    toString() {
        return 'dummy';
    }
}

export class TextoEditavelDummy implements ITextoEditavel {
    getId(): IIdFormulario {
        throw new Error('Method not implemented.');
    }
    setId(): void {
        throw new Error('Method not implemented.');
    }
    getCategoria(): ITitulo {
        throw new Error('Method not implemented.');
    }
    setCategoria(): void {
        throw new Error('Method not implemented.');
    }
    getTextoModelo(): ITextoModelo {
        throw new Error('Method not implemented.');
    }
    setTextoModelo(): void {
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

export class ListaDeTextosEditavelDummy
    implements IListaEditavel<ITextoEditavel>
{
    getItens(): ITextoEditavel[] {
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
    obterItemPorIndice(): ITextoEditavel {
        throw new Error('Method not implemented.');
    }
}
export class ListaDeTextosEditavelGetLengthMaiorQueZeroStub
    implements IListaEditavel<ITextoEditavel>
{
    getItens(): ITextoEditavel[] {
        throw new Error('Method not implemented.');
    }
    getLength(): number {
        return 1;
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
    obterItemPorIndice(): ITextoEditavel {
        throw new Error('Method not implemented.');
    }
}

export class TextoEditavelFake implements ITextoEditavel {
    categoriaFake: TituloFake;

    constructor(public valorFalso: string) {
        this.categoriaFake = new TituloFake(valorFalso);
    }

    getId(): IIdFormulario {
        throw new Error('Method not implemented.');
    }
    setId(id?: IdFormulario | undefined): void {
        throw new Error('Method not implemented.');
    }
    getCategoria(): ITitulo {
        return this.categoriaFake;
    }
    setCategoria(titulo?: ITitulo | undefined): void {
        throw new Error('Method not implemented.');
    }
    getTextoModelo(): ITextoModelo {
        throw new Error('Method not implemented.');
    }
    setTextoModelo(textoModelo?: ITextoModelo | undefined): void {
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
    setIndice(indice: number): void {
        throw new Error('Method not implemented.');
    }
    toString(): string {
        return this.valorFalso;
    }
}

export class ListaDeTextosEditavelGetItensStub
    implements IListaEditavel<ITextoEditavel>
{
    textosFake: TextoEditavelFake[];

    constructor(itens: string[]) {
        this.textosFake = itens.map(item => new TextoEditavelFake(item));
    }

    getItens(): ITextoEditavel[] {
        return this.textosFake;
    }
    getLength(): number {
        return this.textosFake.length;
    }
    editarItem(): void {
        throw new Error('Method editarItem not implemented.');
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
    obterItemPorIndice(): ITextoEditavel {
        throw new Error('Method not implemented.');
    }
}
