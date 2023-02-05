import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { IModeloEditavel } from '@/dominio/editor/modelo/ModeloEditavel';
import { ModeloDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { IdFormularioDummy } from '../../comum/IdFormularioDubles';
import { TextoModeloDummy } from '../../comum/TextoModeloDubles';
import { TituloDummy } from '../../comum/TituloDubles';

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
