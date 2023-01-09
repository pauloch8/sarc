import { RemoveHtml } from '@/dominio/util/RemoveHtml';
import striptags from 'striptags';

export class RemoveHtmlStripTags implements RemoveHtml {
    remover(htmlString: string): string {
        return striptags(htmlString);
    }
}
