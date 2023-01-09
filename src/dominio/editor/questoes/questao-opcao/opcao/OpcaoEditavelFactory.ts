import { IOpcaoEditavel, OpcaoEditavel } from './OpcaoEditavel';
import { IListaEditavel } from '../../ListaEditavel';
import { ITitulo } from '../../../comum/Titulo';
import { IIdFormulario } from '../../../comum/IdFormulario';
import { ITextoEditavel } from './texto/TextoEditavel';
import { IVariavelEditavel } from './variavel/VariavelEditavel';

export interface IOpcaoEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        textos: IListaEditavel<ITextoEditavel>,
        variaveis?: IListaEditavel<IVariavelEditavel>,
    ): IOpcaoEditavel;
}

export class OpcaoEditavelFactory implements IOpcaoEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        textos: IListaEditavel<ITextoEditavel>,
        variaveis?: IListaEditavel<IVariavelEditavel>,
    ) {
        return new OpcaoEditavel(id, titulo, indice, textos, variaveis);
    }
}
