import { ITextoEditavel, ErroNaEdicaoDoTexto } from './TextoEditavel';
import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { IdFormularioDummy } from '@/dominio/comum/IdFormulario.dubles';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { TextoModeloDummy } from '@/dominio/comum/TextoModelo.dubles';
import { ITitulo } from '@/dominio/comum/Titulo';
import { TituloDummy, TituloFake } from '@/dominio/comum/Titulo.dubles';
import { IListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { TextoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export class TextoEditavelEditaComSucessoMock implements ITextoEditavel {
    gerarEspecificacao(): TextoDTO {
        throw new Error('Method not implemented.');
    }
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private textoModelo: ITextoModelo = new TextoModeloDummy();
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
    setTextoModelo(textoModelo: ITextoModelo): void {
        this.textoModelo = textoModelo;
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
    gerarEspecificacao(): TextoDTO {
        throw new Error('Method not implemented.');
    }
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
    gerarEspecificacao(): TextoDTO {
        throw new Error('Method not implemented.');
    }
    private id = new IdFormularioDummy();
    private categoria = new TituloDummy();
    private textoModelo = new TextoModeloDummy();
    getId(): IIdFormulario {
        return this.id;
    }
    setId(): void {
        return;
    }
    getCategoria(): ITitulo {
        return this.categoria;
    }
    setCategoria(): void {
        return;
    }
    getTextoModelo(): ITextoModelo {
        return this.textoModelo;
    }
    setTextoModelo(): void {
        return;
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
        return 1;
    }
    setIndice(): void {
        return;
    }
    toString(): string {
        return 'dummy';
    }
}

export class ListaDeTextosEditavelDummy
    implements IListaEditavel<ITextoEditavel>
{
    private textoEditavel = new TextoEditavelDummy();
    private itens = [this.textoEditavel];

    getItens(): ITextoEditavel[] {
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
    obterItemPorIndice(): ITextoEditavel {
        return this.textoEditavel;
    }
}
export class ListaDeTextosEditavelGetLengthMaiorQueZeroStub
    implements IListaEditavel<ITextoEditavel>
{
    getLength(): number {
        return 1;
    }
    getItens(): ITextoEditavel[] {
        throw new Error(
            'Method ListaDeTextosEditavelGetLengthMaiorQueZeroStub.getItens not implemented.',
        );
    }
    editarItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetLengthMaiorQueZeroStub.editarItem not implemented.',
        );
    }
    subirItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetLengthMaiorQueZeroStub.subirItem not implemented.',
        );
    }
    descerItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetLengthMaiorQueZeroStub.descerItem not implemented.',
        );
    }
    excluirItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetLengthMaiorQueZeroStub.excluirItem not implemented.',
        );
    }
    adicionarItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetLengthMaiorQueZeroStub.adicionarItem not implemented.',
        );
    }
    obterItemPorIndice(): ITextoEditavel {
        throw new Error(
            'Method ListaDeTextosEditavelGetLengthMaiorQueZeroStub.obterItemPorIndice not implemented.',
        );
    }
}

export class TextoEditavelFake implements ITextoEditavel {
    categoriaFake: TituloFake;

    constructor(public valorFalso: string) {
        this.categoriaFake = new TituloFake(valorFalso);
    }

    getId(): IIdFormulario {
        throw new Error('Method TextoEditavelFake.getId not implemented.');
    }
    setId(id?: IdFormulario | undefined): void {
        throw new Error('Method TextoEditavelFake.setId not implemented.');
    }
    getCategoria(): ITitulo {
        return this.categoriaFake;
    }
    setCategoria(titulo?: ITitulo | undefined): void {
        throw new Error(
            'Method TextoEditavelFake.setCategoria not implemented.',
        );
    }
    getTextoModelo(): ITextoModelo {
        throw new Error(
            'Method TextoEditavelFake.getTextoModelo not implemented.',
        );
    }
    setTextoModelo(textoModelo?: ITextoModelo | undefined): void {
        throw new Error(
            'Method TextoEditavelFake.setTextoModelo not implemented.',
        );
    }
    getEmEdicao(): boolean {
        throw new Error(
            'Method TextoEditavelFake.getEmEdicao not implemented.',
        );
    }
    editar(): void {
        throw new Error('Method TextoEditavelFake.editar not implemented.');
    }
    encerrarEdicao(): void {
        throw new Error(
            'Method TextoEditavelFake.encerrarEdicao not implemented.',
        );
    }
    getIndice(): number {
        throw new Error('Method TextoEditavelFake.getIndice not implemented.');
    }
    setIndice(indice: number): void {
        throw new Error('Method TextoEditavelFake.setIndice not implemented.');
    }
    toString(): string {
        return this.valorFalso;
    }
    gerarEspecificacao(): TextoDTO {
        throw new Error(
            'Method TextoEditavelFake.gerarEspecificacao not implemented.',
        );
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
        throw new Error(
            'Method ListaDeTextosEditavelGetItensStub.editarItem not implemented.',
        );
    }
    subirItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetItensStub.subirItem not implemented.',
        );
    }
    descerItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetItensStub.descerItem not implemented.',
        );
    }
    excluirItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetItensStub.excluirItem not implemented.',
        );
    }
    adicionarItem(): void {
        throw new Error(
            'Method ListaDeTextosEditavelGetItensStub.adicionarItem not implemented.',
        );
    }
    obterItemPorIndice(): ITextoEditavel {
        throw new Error(
            'Method ListaDeTextosEditavelGetItensStub.obterItemPorIndice not implemented.',
        );
    }
}
