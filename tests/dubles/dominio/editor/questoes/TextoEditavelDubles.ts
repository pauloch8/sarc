import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { ITitulo } from '@/dominio/comum/Titulo';
import {
    ErroNaEdicaoDoTexto,
    ITextoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { IdFormularioDummy } from '../../comum/IdFormularioDubles';
import { TextoModeloDummy } from '../../comum/TextoModeloDubles';
import { TituloDummy } from '../../comum/TituloDubles';

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
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo?: ITitulo | undefined): void {
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
    getTitulo() {
        return this.titulo;
    }
    setTitulo() {
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
    getTitulo(): ITitulo {
        throw new Error('Method not implemented.');
    }
    setTitulo(): void {
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
    setIndice(indice: number): void {
        throw new Error('Method not implemented.');
    }
    toString(): string {
        throw new Error('Method not implemented.');
    }
}
