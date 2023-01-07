import { ItemEditavel } from '@/dominio/editor/questoes/ItemEditavel';
import {
    ErroExisteItemEmEdicao,
    ErroItemSolicitadoNaoEncontrado,
    ListaEditavel,
} from '@/dominio/editor/questoes/ListaEditavel';

class ItemEditavelDummy extends ItemEditavel {
    toString(): string {
        return 'item editavel dummy';
    }
}

describe('ListaEditavel', () => {
    describe('editarItem', () => {
        test('faz com que o item entre em edição', () => {
            const item0 = new ItemEditavelDummy(0);
            const sut = new ListaEditavel<ItemEditavelDummy>([item0]);
            expect(item0.getEmEdicao()).toBeFalsy();
            sut.editarItem(item0);
            expect(item0.getEmEdicao()).toBeTruthy();
        });
        test.skip('lança erro se um item já está em edição', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const sut = new ListaEditavel<ItemEditavelDummy>([item0, item1]);
            sut.editarItem(item0);
            expect(() => {
                sut.editarItem(item1);
            }).toThrow(ErroExisteItemEmEdicao);
        });
        test('lança erro se solicitada a edição de um item que não faz parte do formulário', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const sut = new ListaEditavel<ItemEditavelDummy>([item0]);
            expect(() => {
                sut.editarItem(item1);
            }).toThrow(ErroItemSolicitadoNaoEncontrado);
        });
    });
    describe('subirItem', () => {
        test('altera o índice dos itens', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const item2 = new ItemEditavelDummy(2);
            const sut = new ListaEditavel<ItemEditavelDummy>([
                item0,
                item1,
                item2,
            ]);
            sut.subirItem(item1);
            expect(item1.getIndice()).toBe(2);
            expect(item2.getIndice()).toBe(1);
        });
        test('o índice se mantém caso o item já seja o último', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const item2 = new ItemEditavelDummy(2);
            const item3 = new ItemEditavelDummy(3);
            const sut = new ListaEditavel<ItemEditavelDummy>([
                item0,
                item1,
                item2,
                item3,
            ]);
            sut.subirItem(item3);
            expect(item3.getIndice()).toBe(3);
        });
        test('lança erro se solicitada um item que não faz parte do formulário', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const sut = new ListaEditavel<ItemEditavelDummy>([item0]);
            expect(() => {
                sut.subirItem(item1);
            }).toThrow(ErroItemSolicitadoNaoEncontrado);
        });
    });
    describe('descerItem', () => {
        test('altera o indice dos itens', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const item2 = new ItemEditavelDummy(2);
            const sut = new ListaEditavel<ItemEditavelDummy>([
                item0,
                item1,
                item2,
            ]);
            sut.descerItem(item2);
            expect(item2.getIndice()).toBe(1);
            expect(item1.getIndice()).toBe(2);
        });
        test('o índice se mantém caso o item já seja o primeiro', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const sut = new ListaEditavel<ItemEditavelDummy>([item0, item1]);
            sut.descerItem(item0);
            expect(item0.getIndice()).toBe(0);
        });
        test('lança erro se solicitada um item que não faz parte do formulário', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const sut = new ListaEditavel<ItemEditavelDummy>([item0]);
            expect(() => {
                sut.descerItem(item1);
            }).toThrow(ErroItemSolicitadoNaoEncontrado);
        });
    });
    describe('excluirItem', () => {
        test('exclui da lista o item solicitada', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const item2 = new ItemEditavelDummy(2);
            const sut = new ListaEditavel<ItemEditavelDummy>([
                item0,
                item1,
                item2,
            ]);
            sut.excluirItem(item1);
            expect(() => {
                sut.excluirItem(item1);
            }).toThrow(ErroItemSolicitadoNaoEncontrado);
        });
        test('reordena o índice dos itens', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const item2 = new ItemEditavelDummy(2);
            const item3 = new ItemEditavelDummy(3);
            const sut = new ListaEditavel<ItemEditavelDummy>([
                item0,
                item1,
                item2,
                item3,
            ]);
            sut.excluirItem(item0);
            expect(item1.getIndice()).toBe(0);
            expect(item2.getIndice()).toBe(1);
            expect(item3.getIndice()).toBe(2);
        });
        test('lança erro se solicitada um item que não faz parte do formulário', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const sut = new ListaEditavel<ItemEditavelDummy>([item0]);
            expect(() => {
                sut.excluirItem(item1);
            }).toThrow(ErroItemSolicitadoNaoEncontrado);
        });
    });
    describe('.getLength', () => {
        test('retorna o tamanho da array de itens', () => {
            const item0 = new ItemEditavelDummy(0);
            const item1 = new ItemEditavelDummy(1);
            const item2 = new ItemEditavelDummy(2);
            const item3 = new ItemEditavelDummy(3);
            const sut = new ListaEditavel<ItemEditavelDummy>([
                item0,
                item1,
                item2,
                item3,
            ]);

            expect(sut.getLength()).toBe(4);
        });
    });
});
