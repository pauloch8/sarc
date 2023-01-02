import { ItemEditavel } from './ItemEditavel';

export class ListaEditavel<Item extends ItemEditavel> {
    constructor(private itens: Item[] = []) {}

    editarItem(itemSolicitado: Item) {
        const itemParaEditar = this.obterItem(itemSolicitado);
        const outrosItens = this.itens.filter(item => item != itemParaEditar);
        const itemEmEdicao = outrosItens.find(item => item.getEmEdicao());
        if (itemEmEdicao) {
            throw new ErroExisteItemEmEdicao(itemEmEdicao);
        }
        itemParaEditar.editar();
    }

    subirItem(itemSolicitada: Item) {
        const itemParaSubir = this.obterItem(itemSolicitada);
        const indiceDoItem = this.itens.indexOf(itemParaSubir);
        const ultimoIndice = this.itens.length - 1;

        if (indiceDoItem === ultimoIndice) {
            return;
        }

        const indiceDoItemSolicitado = itemParaSubir.getIndice();
        const novoIndiceDaItemSolicitada = indiceDoItemSolicitado + 1;

        const proximoItem = this.itens[indiceDoItem + 1];
        const indiceDoProximoItem = proximoItem.getIndice();
        const novoIndiceDoProximoItem = indiceDoProximoItem - 1;

        itemParaSubir.setIndice(novoIndiceDaItemSolicitada);
        proximoItem.setIndice(novoIndiceDoProximoItem);
    }

    descerItem(itemSolicitada: Item) {
        const itemParaDescer = this.obterItem(itemSolicitada);
        const indiceDoItem = this.itens.indexOf(itemParaDescer);

        if (indiceDoItem === 0) {
            return;
        }

        const indiceDoItemSolicitado = itemParaDescer.getIndice();
        const novoIndiceDoItemSolicitado = indiceDoItemSolicitado - 1;

        const itemAnterior = this.itens[indiceDoItem - 1];
        const indiceDoItemAnterior = itemAnterior.getIndice();
        const novoIndiceDaQuestaoAnterior = indiceDoItemAnterior + 1;

        itemParaDescer.setIndice(novoIndiceDoItemSolicitado);
        itemAnterior.setIndice(novoIndiceDaQuestaoAnterior);
    }

    excluirItem(itemSolicitada: Item) {
        const itemParaExcluir = this.obterItem(itemSolicitada);
        let indiceDoItem = this.itens.indexOf(itemParaExcluir);
        // remove o item
        this.itens.splice(indiceDoItem, 1);

        //renumera os índices das próximos itens
        const ultimoIndice = this.itens.length - 1;
        for (let i = indiceDoItem; i <= ultimoIndice; i++, indiceDoItem++) {
            const item = this.itens[i];
            item.setIndice(indiceDoItem);
        }
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
        super(`Existe um item em edição, indice: ${item.toString()}`);
    }
}

export class ErroItemSolicitadoNaoEncontrado extends Error {
    constructor(item: ItemEditavel) {
        super(
            `Questão solicitada não encontrada no formulário: ${item.toString()}`,
        );
    }
}
