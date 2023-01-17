import { RemoveHtml } from '@/dominio/util/RemoveHtml';

export class RemoveHtmlDummy implements RemoveHtml {
    remover(): string {
        return 'dummy';
    }
}

export class RemoveHtmlRetornaTextoPlanoStub implements RemoveHtml {
    textoPlano = 'textoPlano';
    remover(): string {
        return this.textoPlano;
    }
}

export class RemovHtmlRetornaSemAlterarStub implements RemoveHtml {
    remover(htmlString: string): string {
        return htmlString;
    }
}
