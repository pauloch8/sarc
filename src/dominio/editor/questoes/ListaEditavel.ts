import { ItemEditavel } from './ItemEditavel';

export class ListaEditavel<Item extends ItemEditavel> {
    constructor(private itens: Item[] = []) {}

    getItens() {
        return this.itens;
    }

    getLength(): number {
        return this.itens.length;
    }

    editarItem(itemSolicitado: Item) {
        const itemParaEditar = this.obterItem(itemSolicitado);
        // const outrosItens = this.itens.filter(item => item != itemParaEditar);
        // const itemEmEdicao = outrosItens.find(item => item.getEmEdicao());
        // if (itemEmEdicao) {
        //     throw new ErroExisteItemEmEdicao(itemEmEdicao);
        // }
        itemParaEditar.editar();
    }

    subirItem(itemSolicitada: Item) {
        const itemParaSubir = this.obterItem(itemSolicitada);
        const indiceDoItemSolicitado = itemParaSubir.getIndice();
        const ultimoIndice = this.itens.length - 1;

        if (indiceDoItemSolicitado === ultimoIndice) {
            return;
        }

        const novoIndiceDoItemSolicitado = indiceDoItemSolicitado + 1;

        const itemSubstituido = this.obterItemPorIndice(
            novoIndiceDoItemSolicitado,
        );
        itemParaSubir.setIndice(novoIndiceDoItemSolicitado);
        itemSubstituido.setIndice(indiceDoItemSolicitado);
    }

    descerItem(itemSolicitada: Item) {
        const itemParaDescer = this.obterItem(itemSolicitada);
        const indiceDoItemSolicitado = itemParaDescer.getIndice();

        if (indiceDoItemSolicitado === 0) {
            return;
        }

        const novoIndiceDoItemSolicitado = indiceDoItemSolicitado - 1;

        const itemSubstituido = this.obterItemPorIndice(
            novoIndiceDoItemSolicitado,
        );
        itemParaDescer.setIndice(novoIndiceDoItemSolicitado);
        itemSubstituido.setIndice(indiceDoItemSolicitado);
    }

    excluirItem(itemSolicitada: Item) {
        const itemParaExcluir = this.obterItem(itemSolicitada);
        let indiceDoItem = this.itens.indexOf(itemParaExcluir);
        // remove o item
        this.itens.splice(indiceDoItem, 1);

        //renumera os ??ndices das pr??ximos itens
        const ultimoIndice = this.itens.length - 1;
        for (let i = indiceDoItem; i <= ultimoIndice; i++, indiceDoItem++) {
            const item = this.itens[i];
            item.setIndice(indiceDoItem);
        }
    }

    obterItemPorIndice(indice: number) {
        const retorno = this.itens.find(item => item.getIndice() === indice);
        if (!retorno) {
            throw new ErroItemComIndiceSolicitadoNaoEncontrado(indice);
        }
        return retorno;
    }

    private obterItem(itemSolicitada: Item) {
        const retorno = this.itens.find(item => item === itemSolicitada);
        if (!retorno) {
            throw new ErroItemSolicitadoNaoEncontrado(itemSolicitada);
        }
        return retorno;
    }
}

export class ErroExisteItemEmEdicao extends Error {
    constructor(item: ItemEditavel) {
        super(`Existe um item em edi????o, indice: ${item.toString()}`);
    }
}

export class ErroItemSolicitadoNaoEncontrado extends Error {
    constructor(item: ItemEditavel) {
        super(
            `Quest??o solicitada n??o encontrada no formul??rio: ${item.toString()}`,
        );
    }
}

export class ErroItemComIndiceSolicitadoNaoEncontrado extends Error {
    constructor(indice: number) {
        super(
            `Quest??o com ??ndice n??mero ${indice} n??o encontrado no formul??rio`,
        );
    }
}
