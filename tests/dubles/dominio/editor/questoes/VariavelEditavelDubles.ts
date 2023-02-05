import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IVariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { IdFormularioDummy } from '../../comum/IdFormularioDubles';
import { TituloDummy } from '../../comum/TituloDubles';
import { ErroNaEdicao } from '@/dominio/editor/comum/ItemEditavel';
import { ITipoVariavelID } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelID';
import { TipoVariavelIDDummy } from './TipoVariavelDubles';
import { IListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import {
    EscapadorDeVariavelDummy,
    EscapadorDeVariavelToStringStub,
} from '../../comum/escapador/variavel/EscapadorDeVariavelDubles';
import { VariavelDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export class VariavelEditavelEditaComSucessoMock implements IVariavelEditavel {
    gerarEspecificacao(): VariavelDTO {
        throw new Error('Method not implemented.');
    }
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
        throw new Error(
            'Method VariavelEditavelEditaComSucessoMock.getEscapador not implemented.',
        );
    }
}

export class VariavelEditavelErroStub implements IVariavelEditavel {
    gerarEspecificacao(): VariavelDTO {
        throw new Error('Method not implemented.');
    }
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
        throw new Error(
            'Method VariavelEditavelErroStub.getEscapador not implemented.',
        );
    }
}

export class VariavelEditavelDummy implements IVariavelEditavel {
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private escapador = new EscapadorDeVariavelDummy();

    getId(): IIdFormulario {
        return this.id;
    }
    setId(): void {
        return;
    }
    getTitulo(): ITitulo {
        return this.titulo;
    }
    setTitulo(): void {
        return;
    }
    getTipo(): ITitulo {
        return this.titulo;
    }
    setTipo(): void {
        return;
    }
    getEmEdicao(): boolean {
        return false;
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
    getEscapador(): IEscapadorDeVariavel {
        return this.escapador;
    }
    gerarEspecificacao(): VariavelDTO {
        // TODO: retornar dummy
        throw new Error('Method not implemented.');
    }
}

export class ListaDeVariaveisEditavelDummy
    implements IListaEditavel<IVariavelEditavel>
{
    private item = new VariavelEditavelDummy();
    private itens = [this.item];
    private escapador = new EscapadorDeVariavelDummy();

    getItens(): IVariavelEditavel[] {
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
    obterItemPorIndice(): IVariavelEditavel {
        return this.item;
    }
    getEscapador(): IEscapadorDeVariavel {
        return this.escapador;
    }
}

class VariavelEditavelRetornaEscapadorStub implements IVariavelEditavel {
    gerarEspecificacao(): VariavelDTO {
        throw new Error('Method not implemented.');
    }
    escapador = new EscapadorDeVariavelToStringStub();

    getEscapador(): EscapadorDeVariavelToStringStub {
        return this.escapador;
    }

    getId(): IIdFormulario {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.getId not implemented.',
        );
    }
    setId(): void {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.setId not implemented.',
        );
    }
    getTitulo(): ITitulo {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.getTitulo not implemented.',
        );
    }
    setTitulo(): void {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.setTitulo not implemented.',
        );
    }
    getTipo(): ITipoVariavelID {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.getTipo not implemented.',
        );
    }
    setTipo(): void {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.setTipo not implemented.',
        );
    }
    getEmEdicao(): boolean {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.getEmEdicao not implemented.',
        );
    }
    editar(): void {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.editar not implemented.',
        );
    }
    encerrarEdicao(): void {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.encerrarEdicao not implemented.',
        );
    }
    getIndice(): number {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.getIndice not implemented.',
        );
    }
    setIndice(): void {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.setIndice not implemented.',
        );
    }
    toString(): string {
        throw new Error(
            'Method VariavelEditavelRetornaEscapadorStub.toString not implemented.',
        );
    }
}

export class ListaDeVariaveisEditavelRetornaItensComEscapadorStub
    implements IListaEditavel<IVariavelEditavel>
{
    itens = [new VariavelEditavelRetornaEscapadorStub()];

    getItens(): VariavelEditavelRetornaEscapadorStub[] {
        return this.itens;
    }
    getLength(): number {
        throw new Error(
            'Method ListaDeVariaveisEditavelRetornaItensComEscapadorStub.getLength not implemented.',
        );
    }
    editarItem(): void {
        throw new Error(
            'Method ListaDeVariaveisEditavelRetornaItensComEscapadorStub.editarItem not implemented.',
        );
    }
    subirItem(): void {
        throw new Error(
            'Method ListaDeVariaveisEditavelRetornaItensComEscapadorStub.subirItem not implemented.',
        );
    }
    descerItem(): void {
        throw new Error(
            'Method ListaDeVariaveisEditavelRetornaItensComEscapadorStub.descerItem not implemented.',
        );
    }
    excluirItem(): void {
        throw new Error(
            'Method ListaDeVariaveisEditavelRetornaItensComEscapadorStub.excluirItem not implemented.',
        );
    }
    adicionarItem(): void {
        throw new Error(
            'Method ListaDeVariaveisEditavelRetornaItensComEscapadorStub.adicionarItem not implemented.',
        );
    }
    obterItemPorIndice(): IVariavelEditavel {
        throw new Error(
            'Method ListaDeVariaveisEditavelRetornaItensComEscapadorStub.obterItemPorIndice not implemented.',
        );
    }
    getEscapador(): IEscapadorDeVariavel {
        throw new Error(
            'Method ListaDeVariaveisEditavelRetornaItensComEscapadorStub.getEscapador not implemented.',
        );
    }
}
