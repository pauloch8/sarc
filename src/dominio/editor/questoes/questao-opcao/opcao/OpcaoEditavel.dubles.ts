import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { IdFormularioDummy } from '@/dominio/comum/IdFormulario.dubles';
import { TextoModeloDummy } from '@/dominio/comum/TextoModelo.dubles';
import { Titulo, ITitulo } from '@/dominio/comum/Titulo';
import { TituloDummy } from '@/dominio/comum/Titulo.dubles';
import {
    ListaEditavel,
    IListaEditavel,
} from '@/dominio/editor/comum/ListaEditavel';
import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { TextoEditavel, ITextoEditavel } from '../../comum/texto/TextoEditavel';
import { IVariavelEditavel } from '../../comum/variavel/VariavelEditavel';
import { IOpcaoEditavel, ErroNaEdicaoDaOpcao } from './OpcaoEditavel';
import { IRamificacao } from './Ramificacao';
import { RamificacaoDummy } from './Ramificacao.dubles';

export class OpcaoEditavelErroStub implements IOpcaoEditavel {
    erros = {
        id: 'Erro ao atualizar o id',
        titulo: 'Erro ao atualizar o titulo',
        textos: 'Erro ao atualizar os textos',
        variaveis: 'Erro ao atualizar as variaveis',
    };
    private id = new IdFormulario('id');
    private titulo = new Titulo('titulo');
    private textos = new ListaEditavel<TextoEditavel>([
        new TextoEditavel(new IdFormularioDummy(), new TextoModeloDummy(), 0),
    ]);
    private ramificacao = new RamificacaoDummy();
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
    getIdCategorias(): ITitulo[] {
        throw new Error(
            'Method OpcaoEditavelErroStub.getCategorias not implemented.',
        );
    }
    getRamificacao(): IRamificacao {
        return this.ramificacao;
    }
    setRamificacao(ramificacao: IRamificacao): void {
        return;
    }
    gerarEspecificacao(): OpcaoValorDTO {
        throw new Error(
            'Method OpcaoEditavelErroStub.gerarEspecificacao not implemented.',
        );
    }
}

export class OpcaoEditavelDummy implements IOpcaoEditavel {
    private id = new IdFormulario('id');
    private titulo = new Titulo('titulo');
    private textos = new ListaEditavel<TextoEditavel>([
        new TextoEditavel(new IdFormularioDummy(), new TextoModeloDummy(), 0),
    ]);
    private ramificacao = new RamificacaoDummy();
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
    getIdCategorias(): ITitulo[] {
        throw new Error(
            'Method OpcaoEditavelDummy.getCategorias not implemented.',
        );
    }
    getRamificacao(): IRamificacao {
        return this.ramificacao;
    }
    setRamificacao(ramificacao: IRamificacao): void {
        return;
    }
    gerarEspecificacao(): OpcaoValorDTO {
        throw new Error('Method not implemented.');
    }
}

export class OpcaoEditavelGetCategoriaStub implements IOpcaoEditavel {
    getIdCategorias(): ITitulo[] {
        return [new TituloDummy()];
    }
    getTitulo(): ITitulo {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.getTitulo not implemented.',
        );
    }
    setTitulo(titulo: ITitulo): void {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.setTitulo not implemented.',
        );
    }
    getId(): IIdFormulario {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.getId not implemented.',
        );
    }
    setId(id: IIdFormulario): void {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.setId not implemented.',
        );
    }
    getTextos(): IListaEditavel<ITextoEditavel> {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.getTextos not implemented.',
        );
    }
    setTextos(textos: IListaEditavel<ITextoEditavel>): void {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.setTextos not implemented.',
        );
    }
    getVariaveis(): IListaEditavel<IVariavelEditavel> | undefined {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.getVariaveis not implemented.',
        );
    }
    setVariaveis(variaveis: IListaEditavel<IVariavelEditavel>): void {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.setVariaveis not implemented.',
        );
    }

    getEmEdicao(): boolean {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.getEmEdicao not implemented.',
        );
    }
    editar(): void {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.editar not implemented.',
        );
    }
    encerrarEdicao(): void {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.encerrarEdicao not implemented.',
        );
    }
    getIndice(): number {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.getIndice not implemented.',
        );
    }
    setIndice(indice: number): void {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.setIndice not implemented.',
        );
    }
    toString(): string {
        throw new Error(
            'Method OpcaoEditavelGetCategoriaStub.toString not implemented.',
        );
    }
    getRamificacao(): IRamificacao {
        throw new Error('Method not implemented.');
    }
    setRamificacao(ramificacao: IRamificacao): void {
        throw new Error('Method not implemented.');
    }
    gerarEspecificacao(): OpcaoValorDTO {
        throw new Error('Method not implemented.');
    }
}

export class ListaDeOpcoesEditavelDummy
    implements IListaEditavel<IOpcaoEditavel>
{
    item = new OpcaoEditavelGetCategoriaStub();
    itens = [this.item];
    getItens(): IOpcaoEditavel[] {
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
    obterItemPorIndice(): IOpcaoEditavel {
        return this.item;
    }
}

export class ListaDeOpcoesEditavelGetCategoriaStub
    implements IListaEditavel<IOpcaoEditavel>
{
    itens = [new OpcaoEditavelDummy()];

    getItens(): IOpcaoEditavel[] {
        return this.itens;
    }
    getLength(): number {
        return this.itens.length;
    }
    editarItem(): void {
        throw new Error(
            'Method ListaDeOpcoesEditavelGetCategoriaStub.editarItem not implemented.',
        );
    }
    subirItem(): void {
        throw new Error(
            'Method ListaDeOpcoesEditavelGetCategoriaStub.subirItem not implemented.',
        );
    }
    descerItem(): void {
        throw new Error(
            'Method ListaDeOpcoesEditavelGetCategoriaStub.descerItem not implemented.',
        );
    }
    excluirItem(): void {
        throw new Error(
            'Method ListaDeOpcoesEditavelGetCategoriaStub.excluirItem not implemented.',
        );
    }
    adicionarItem(): void {
        throw new Error(
            'Method ListaDeOpcoesEditavelGetCategoriaStub.adicionarItem not implemented.',
        );
    }
    obterItemPorIndice(): IOpcaoEditavel {
        throw new Error(
            'Method ListaDeOpcoesEditavelGetCategoriaStub.obterItemPorIndice not implemented.',
        );
    }
}
