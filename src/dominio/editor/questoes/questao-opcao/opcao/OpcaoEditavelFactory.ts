import { IOpcaoEditavel, OpcaoEditavel } from './OpcaoEditavel';
import { IListaEditavel, ListaEditavel } from '../../../comum/ListaEditavel';
import { ITitulo, Titulo } from '../../../../comum/Titulo';
import { IdFormulario, IIdFormulario } from '../../../../comum/IdFormulario';
import { ITextoEditavel } from './texto/TextoEditavel';
import { IVariavelEditavel } from './variavel/VariavelEditavel';
import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { ITextoEditavelFactory } from './texto/TextoEditavelFactory';
import { IVariavelEditavelFactory } from './variavel/VariavelEditavelFactory';

export interface IOpcaoEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        textos: IListaEditavel<ITextoEditavel>,
        variaveis?: IListaEditavel<IVariavelEditavel>,
    ): IOpcaoEditavel;
    criarDeEspecificacao(item: OpcaoValorDTO, indice: number): IOpcaoEditavel;
}

export class OpcaoEditavelFactory implements IOpcaoEditavelFactory {
    constructor(
        private textoEditavelFactory: ITextoEditavelFactory,
        private variavelEditavelFactory: IVariavelEditavelFactory,
    ) {}

    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        textos: IListaEditavel<ITextoEditavel>,
        variaveis?: IListaEditavel<IVariavelEditavel>,
    ) {
        return new OpcaoEditavel(id, titulo, indice, textos, variaveis);
    }

    criarDeEspecificacao(
        especificacao: OpcaoValorDTO,
        indice: number,
    ): IOpcaoEditavel {
        const id = new IdFormulario(especificacao.id);
        const titulo = new Titulo(especificacao.titulo);

        // criar Lista de Texto
        const itensTextos = especificacao.listaTextos.map((item, indice) => {
            return this.textoEditavelFactory.criarDeEspecificacao(item, indice);
        });
        const listaTextos = new ListaEditavel<ITextoEditavel>(itensTextos);

        // criar Lista de Variáveis
        const itensVariaveis = especificacao.listaVariaveis?.map(
            (item, indice) => {
                return this.variavelEditavelFactory.criarDeEspecificacao(
                    item,
                    indice,
                );
            },
        );
        let listaVariaveis;
        if (itensVariaveis) {
            listaVariaveis = new ListaEditavel<IVariavelEditavel>(
                itensVariaveis,
            );
        }

        // retorna objeto
        return this.criar(id, titulo, indice, listaTextos, listaVariaveis);
    }
}
