import { Variavel } from './Variavel';

export class Texto {
    constructor(private categoria: string, private texto: string) {}

    getTexto(variaveis?: Variavel[]) {
        let retorno = this.texto;
        if (variaveis) {
            for (const variavel of variaveis) {
                retorno = retorno.replaceAll(
                    variavel.getEscapador(),
                    variavel.getResposta(),
                );
            }
        }
        return retorno;
    }
}
