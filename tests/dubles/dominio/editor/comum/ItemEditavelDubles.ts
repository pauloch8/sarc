import { ItemEditavel } from '@/dominio/editor/comum/ItemEditavel';

export class ItemEditavelDummy extends ItemEditavel {
    toString(): string {
        return 'item editavel dummy';
    }
}
