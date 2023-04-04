import { IVariavelEditavel, VariavelEditavel } from './VariavelEditavel';
import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo, Titulo } from '@/dominio/comum/Titulo';
import {
    ITipoVariavelID,
    TipoVariavelID,
} from './tipo-variavel/TipoVariavelID';
import { IEscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';
import { VariavelDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export interface IVariavelEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        tipo: ITipoVariavelID,
        indice: number,
    ): IVariavelEditavel;

    criarDeEspecificacao(
        especificacao: VariavelDTO,
        indice: number,
    ): IVariavelEditavel;
}

export class VariavelEditavelFactory implements IVariavelEditavelFactory {
    constructor(private escapadorFactory: IEscapadorDeVariavelFactory) {}

    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        tipo: ITipoVariavelID,
        indice: number,
    ) {
        return new VariavelEditavel(
            id,
            titulo,
            tipo,
            indice,
            this.escapadorFactory,
        );
    }

    criarDeEspecificacao(especificacao: VariavelDTO, indice: number) {
        const id = new IdFormulario(especificacao.id);
        const titulo = new Titulo(especificacao.titulo);
        const tipo = new TipoVariavelID(especificacao.tipo);
        return this.criar(id, titulo, tipo, indice);
    }
}
