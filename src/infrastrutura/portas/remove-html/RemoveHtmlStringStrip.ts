import { RemoveHtml } from '@/dominio/util/RemoveHtml';
import { stripHtml } from 'string-strip-html';

export class RemoveHtmlStringStrip implements RemoveHtml {
    remover(htmlString: string) {
        return stripHtml(htmlString).result;
    }
}
