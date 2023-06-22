import { IModeloEditavel } from './ModeloEditavel';
import { IIdFormulario, IdFormulario } from '@/dominio/comum/IdFormulario';
import { IdFormularioDummy } from '@/dominio/comum/IdFormulario.dubles';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { TextoModeloDummy } from '@/dominio/comum/TextoModelo.dubles';
import { ITitulo } from '@/dominio/comum/Titulo';
import { TituloDummy } from '@/dominio/comum/Titulo.dubles';
import { ModeloDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { IListaEditavel } from '../comum/ListaEditavel';

export class ModeloEditavelDummy implements IModeloEditavel {
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();
    private textoModelo = new TextoModeloDummy();

    getId(): IIdFormulario {
        return this.id;
    }
    setId(id?: IdFormulario | undefined): void {
        return;
    }
    getTitulo(): ITitulo {
        return this.titulo;
    }
    setTitulo(titulo?: ITitulo | undefined): void {
        return;
    }
    getTextoModelo(): ITextoModelo {
        return this.textoModelo;
    }
    setTextoModelo(modeloModelo?: ITextoModelo | undefined): void {
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
        return 0;
    }
    setIndice(indice: number): void {
        return;
    }
    toString(): string {
        return 'dummy';
    }
    gerarEspecificacao(): ModeloDTO {
        throw new Error('Method not implemented.');
    }
}

export class ListaDeModelosEditavelDummy
    implements IListaEditavel<IModeloEditavel>
{
    private item = new ModeloEditavelDummy();
    private itens = [this.item];

    getItens(): IModeloEditavel[] {
        return this.itens;
    }
    getLength(): number {
        return this.itens.length;
    }
    editarItem(itemSolicitado: IModeloEditavel): void {
        return;
    }
    subirItem(itemSolicitada: IModeloEditavel): void {
        return;
    }
    descerItem(itemSolicitada: IModeloEditavel): void {
        return;
    }
    excluirItem(itemSolicitada: IModeloEditavel): void {
        return;
    }
    adicionarItem(item: IModeloEditavel): void {
        return;
    }
    obterItemPorIndice(indice: number): IModeloEditavel {
        return this.item;
    }
}
