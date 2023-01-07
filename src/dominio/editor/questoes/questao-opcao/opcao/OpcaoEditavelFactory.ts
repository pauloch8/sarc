import { IdFormulario } from './comum/IdFormulario';
import { ListaEditavel } from './ListaEditavel';
import { IOpcaoEditavel, OpcaoEditavel } from './OpcaoEditavel';
import { TextoEditavel } from './TextoEditavel';
import { Titulo } from './comum/Titulo';
import { VariavelEditavel } from './VariavelEditavel';

export interface IOpcaoEditavelFactory {
    criar(
        id: IdFormulario,
        titulo: Titulo,
        indice: number,
        textos: ListaEditavel<TextoEditavel>,
        variaveis?: ListaEditavel<VariavelEditavel>,
    ): IOpcaoEditavel;
}

export class OpcaoEditavelFactory implements IOpcaoEditavelFactory {
    criar(
        id: IdFormulario,
        titulo: Titulo,
        indice: number,
        textos: ListaEditavel<TextoEditavel>,
        variaveis?: ListaEditavel<VariavelEditavel>,
    ) {
        return new OpcaoEditavel(id, titulo, indice, textos, variaveis);
    }
}
